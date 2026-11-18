// ============================================================================
// APP LOGIC: IT MES CHINESE (PINYIN-FIRST & AUTO CLOUD SYNC ACROSS DEVICES)
// ============================================================================

const STORAGE_KEY = "IT_MES_CHINESE_STATE_V2";
const CLOUD_API_URL = "/api/sync";

let appState = {
  activeProfileId: "p1",
  selectedDept: "all",
  vocabMode: "srs", // 'srs' or 'list'
  currentVocabIdx: 0,
  currentListenIdx: 0,
  currentDictIdx: 0,
  currentRoleplayIdx: 0,
  listenRevealed: false,
  hanziHidden: true,
  customWords: [],
  profiles: [
    {
      id: "p1",
      name: "Profile 1",
      avatar: "👨‍💻",
      pin: "",
      xp: 0,
      srs: {} // { wordId: { status: 'mastered'|'review'|'learning', nextReview: timestamp } }
    },
    {
      id: "p2",
      name: "Profile 2",
      avatar: "🧑‍💻",
      pin: "",
      xp: 0,
      srs: {}
    },
    {
      id: "p3",
      name: "Profile 3",
      avatar: "👩‍💻",
      pin: "",
      xp: 0,
      srs: {}
    }
  ]
};

let isCloudAvailable = false;

// --- CẬP NHẬT TRẠNG THÁI ĐÁM MÂY TRÊN GIAO DIỆN ---
function setCloudBadge(statusText, isOnline) {
  const badge = document.getElementById("cloud-status-badge");
  const overlayStatus = document.getElementById("overlay-cloud-status");
  if (badge) {
    badge.textContent = statusText;
    badge.style.color = isOnline ? "var(--success)" : "var(--text-muted)";
    badge.style.border = isOnline ? "1px solid var(--success)" : "1px solid var(--border-color)";
  }
  if (overlayStatus) {
    overlayStatus.textContent = isOnline
      ? "☁️ Đã kết nối Cloud! Tiến độ học trên Điện thoại, iPad và Máy tính được đồng bộ tự động."
      : "💻 Đang chạy Offline trên máy (Khi đẩy lên Netlify sẽ tự động kích hoạt đồng bộ Cloud đa thiết bị).";
    overlayStatus.style.color = isOnline ? "var(--success)" : "var(--pinyin-color)";
  }
}

// --- KHỞI TẠO & LƯU TRỮ DỮ LIỆU (LOCAL + AUTO CLOUD SYNC) ---
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.warn("Không thể đọc LocalStorage:", e);
  }
}

function saveLocalOnly() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn("Không thể lưu LocalStorage:", e);
  }
  updateTopStats();
}

function saveState() {
  saveLocalOnly();
  pushToCloud();
}

// Tự động kéo tiến độ mới nhất từ Netlify Cloud Blobs
async function syncFromCloud(showAlert = false) {
  if (window.location.protocol === "file:") {
    setCloudBadge("💻 Chế độ Local", false);
    return;
  }

  try {
    setCloudBadge("🔄 Đang đồng bộ...", false);
    const res = await fetch(CLOUD_API_URL, { method: "GET", cache: "no-store" });
    if (!res.ok) throw new Error("API chưa kích hoạt");
    const json = await res.json();

    isCloudAvailable = true;
    if (json && json.ok && json.data) {
      const cloud = json.data;
      if (Array.isArray(cloud.profiles) && cloud.profiles.length > 0) {
        // Gộp dữ liệu Cloud với Local để không mất tiến độ
        const map = new Map();
        appState.profiles.forEach(p => map.set(p.id, p));
        cloud.profiles.forEach(cp => {
          const lp = map.get(cp.id);
          if (!lp) {
            map.set(cp.id, cp);
          } else {
            map.set(cp.id, {
              ...lp,
              ...cp,
              xp: Math.max(lp.xp || 0, cp.xp || 0),
              srs: { ...(lp.srs || {}), ...(cp.srs || {}) }
            });
          }
        });
        appState.profiles = Array.from(map.values());
      }

      if (Array.isArray(cloud.customWords)) {
        const wMap = new Map();
        (appState.customWords || []).forEach(w => wMap.set(w.id, w));
        cloud.customWords.forEach(w => wMap.set(w.id, w));
        appState.customWords = Array.from(wMap.values());
      }

      saveLocalOnly();
      renderProfileOverlay();
      refreshAllViews();
      if (showAlert) alert("☁️ Đã cập nhật tiến độ mới nhất từ Đám mây!");
    } else {
      // Lần đầu tiên Cloud chưa có dữ liệu -> đẩy dữ liệu mặc định lên
      await pushToCloud();
    }
    setCloudBadge("☁️ Đã đồng bộ Cloud", true);
  } catch (err) {
    setCloudBadge("💻 Lưu tại máy", false);
  }
}

// Tự động đẩy tiến độ lên Netlify Cloud Blobs mỗi khi hoàn thành bài học
async function pushToCloud() {
  if (window.location.protocol === "file:") return;
  try {
    setCloudBadge("☁️ Đang lưu Cloud...", true);
    const res = await fetch(CLOUD_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profiles: appState.profiles,
        customWords: appState.customWords || []
      })
    });
    if (res.ok) {
      const json = await res.json();
      if (json && json.ok && json.data && Array.isArray(json.data.profiles)) {
        appState.profiles = json.data.profiles;
        appState.customWords = json.data.customWords || [];
        saveLocalOnly();
      }
      setCloudBadge("☁️ Đã đồng bộ Cloud", true);
    }
  } catch (e) {
    setCloudBadge("⚠️ Lỗi mạng (Đã lưu tại máy)", false);
  }
}

function getActiveProfile() {
  return appState.profiles.find(p => p.id === appState.activeProfileId) || appState.profiles[0];
}

function getAllVocabulary() {
  return [...window.MES_CURRICULUM.vocabulary, ...(appState.customWords || [])];
}

function getFilteredVocabulary() {
  const all = getAllVocabulary();
  if (appState.selectedDept === "all") return all;
  return all.filter(item => item.dept === appState.selectedDept);
}

// --- PHÁT ÂM TIẾNG TRUNG (WEB SPEECH API TTS) ---
function speakChinese(text, rate = 1.0) {
  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt của bạn không hỗ trợ phát âm tự động.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "zh-CN";
  utter.rate = rate;
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.includes("zh") || v.lang.includes("CN") || v.lang.includes("TW"));
  if (zhVoice) utter.voice = zhVoice;
  window.speechSynthesis.speak(utter);
}

// --- QUẢN LÝ HỒ SƠ NGƯỜI HỌC (PROFILE 1, 2, 3...) ---
function renderProfileOverlay() {
  const container = document.getElementById("profile-list");
  const allVocabCount = getAllVocabulary().length;

  container.innerHTML = appState.profiles.map(p => {
    const srsEntries = Object.values(p.srs || {});
    const masteredCount = srsEntries.filter(x => x.status === "mastered").length;
    const pct = allVocabCount > 0 ? Math.round((masteredCount / allVocabCount) * 100) : 0;

    return `
      <div class="profile-card" onclick="selectProfile('${p.id}')" style="position: relative;">
        <button
          onclick="event.stopPropagation(); openProfileModal('${p.id}')"
          title="Đổi tên hoặc đặt mã PIN"
          style="position: absolute; top: 8px; right: 8px; background: transparent; border: none; cursor: pointer; font-size: 0.85rem; opacity: 0.7;"
        >✏️</button>
        <div class="profile-avatar">${p.avatar}</div>
        <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 6px;">
          ${p.name} ${p.pin ? "🔒" : ""}
        </div>
        <div style="font-size: 0.78rem; color: var(--pinyin-color); font-weight: 600; margin-bottom: 6px;">
          Hoàn thành: ${pct}% (${masteredCount}/${allVocabCount} từ)
        </div>
        <div style="font-size: 0.76rem; color: var(--text-muted); background: var(--bg-main); padding: 4px 8px; border-radius: 8px;">
          Điểm tích lũy: <b>${p.xp || 0} XP</b>
        </div>
      </div>
    `;
  }).join("");
}

function selectProfile(profileId) {
  const target = appState.profiles.find(p => p.id === profileId);
  if (!target) return;

  if (target.pin && target.pin.trim() !== "") {
    const entered = prompt(`Nhập mã PIN 4 số của "${target.name}":`);
    if (entered !== target.pin) {
      alert("❌ Mã PIN không đúng!");
      return;
    }
  }

  appState.activeProfileId = target.id;
  saveLocalOnly();

  document.getElementById("profile-overlay").classList.add("hidden");
  refreshAllViews();
  syncFromCloud(false);
}

function showProfileOverlay() {
  renderProfileOverlay();
  document.getElementById("profile-overlay").classList.remove("hidden");
  syncFromCloud(false);
}

function openProfileModal(editId = "") {
  const modalTitle = document.getElementById("profile-modal-title");
  const editInput = document.getElementById("prof-edit-id");
  const nameInput = document.getElementById("prof-name-input");
  const avatarInput = document.getElementById("prof-avatar-input");
  const pinInput = document.getElementById("prof-pin-input");

  if (editId) {
    const existing = appState.profiles.find(p => p.id === editId);
    if (!existing) return;
    modalTitle.textContent = `✏️ Chỉnh sửa ${existing.name}`;
    editInput.value = existing.id;
    nameInput.value = existing.name;
    avatarInput.value = existing.avatar || "👨‍💻";
    pinInput.value = existing.pin || "";
  } else {
    modalTitle.textContent = "👤 Thêm Profile Học Tập Mới";
    editInput.value = "";
    nameInput.value = `Profile ${appState.profiles.length + 1}`;
    avatarInput.value = "👨‍💻";
    pinInput.value = "";
  }

  document.getElementById("profile-modal").classList.remove("hidden");
}

function closeProfileModal() {
  document.getElementById("profile-modal").classList.add("hidden");
}

function saveProfileModal() {
  const editId = document.getElementById("prof-edit-id").value;
  const name = document.getElementById("prof-name-input").value.trim();
  const avatar = document.getElementById("prof-avatar-input").value;
  const pin = document.getElementById("prof-pin-input").value.trim();

  if (!name) {
    alert("Vui lòng nhập tên Profile!");
    return;
  }

  if (editId) {
    const existing = appState.profiles.find(p => p.id === editId);
    if (existing) {
      existing.name = name;
      existing.avatar = avatar;
      existing.pin = pin;
    }
  } else {
    appState.profiles.push({
      id: "p_" + Date.now(),
      name,
      avatar,
      pin,
      xp: 0,
      srs: {}
    });
  }

  saveState();
  closeProfileModal();
  renderProfileOverlay();
  refreshAllViews();
}

// --- CHUYỂN ĐỔI GIAO DIỆN & CHẾ ĐỘ HIỂN THỊ ---
function switchView(viewName) {
  const views = ["dashboard", "vocab", "listen", "dictation", "roleplay", "pinyin"];
  views.forEach(v => {
    document.getElementById("view-" + v).style.display = v === viewName ? "block" : "none";
    const btn = document.getElementById("nav-" + v);
    if (btn) btn.classList.toggle("active", v === viewName);
  });
}

function toggleHanziVisibility() {
  appState.hanziHidden = !appState.hanziHidden;
  document.body.classList.toggle("hanzi-hidden", appState.hanziHidden);
  document.getElementById("btn-toggle-hanzi").textContent = appState.hanziHidden
    ? "👁️ Chữ Hán: Đang ẩn"
    : "👁️ Chữ Hán: Đang hiện";
  saveLocalOnly();
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// --- CẬP NHẬT THỐNG KÊ HỒ SƠ ĐANG HỌC ---
function updateTopStats() {
  const prof = getActiveProfile();
  const allVocab = getAllVocabulary();
  const now = Date.now();

  let mastered = 0;
  let dueToday = 0;

  allVocab.forEach(w => {
    const rec = prof.srs ? prof.srs[w.id] : null;
    if (!rec) {
      dueToday++;
    } else {
      if (rec.status === "mastered") mastered++;
      if (rec.nextReview <= now) dueToday++;
    }
  });

  const deptObj = window.MES_CURRICULUM.departments.find(d => d.id === appState.selectedDept) || window.MES_CURRICULUM.departments[0];

  document.getElementById("active-profile-btn").innerHTML = `${prof.avatar} ${prof.name} (Đổi)`;
  document.getElementById("dash-greeting").textContent = `${prof.avatar} Đang học: ${prof.name}`;
  document.getElementById("dash-dept-focus").textContent = `Chủ đề đang chọn: ${deptObj.icon} ${deptObj.name} • Tiến độ tự động lưu theo ${prof.name}`;
  document.getElementById("stat-mastered").textContent = `${mastered}/${allVocab.length}`;
  document.getElementById("stat-due").textContent = dueToday;
  document.getElementById("due-badge").textContent = dueToday;
  document.getElementById("stat-xp").textContent = `${prof.xp || 0} XP`;
}

// --- VIEW 1: DASHBOARD & TRA NHANH DƯỚI XƯỞNG ---
function renderDeptFilters() {
  const bar1 = document.getElementById("dept-filter-bar");
  const bar2 = document.getElementById("vocab-dept-pills");

  const html = window.MES_CURRICULUM.departments.map(d => `
    <button
      class="dept-pill ${appState.selectedDept === d.id ? "active" : ""}"
      onclick="selectDepartment('${d.id}')"
    >
      ${d.icon} ${d.name}
    </button>
  `).join("");

  if (bar1) bar1.innerHTML = html;
  if (bar2) bar2.innerHTML = html;
}

function selectDepartment(deptId) {
  appState.selectedDept = deptId;
  appState.currentVocabIdx = 0;
  saveLocalOnly();
  renderDeptFilters();
  renderVocabSection();
  renderQuickSearch();
}

function renderQuickSearch() {
  const query = (document.getElementById("quick-search-input").value || "").trim().toLowerCase();
  const container = document.getElementById("quick-search-results");
  const all = getAllVocabulary();

  const filtered = query
    ? all.filter(item =>
        item.pinyin.toLowerCase().includes(query) ||
        (item.pinyinPlain && item.pinyinPlain.toLowerCase().includes(query)) ||
        (item.phoneticVn && item.phoneticVn.toLowerCase().includes(query)) ||
        item.meaning.toLowerCase().includes(query) ||
        (item.exPinyin && item.exPinyin.toLowerCase().includes(query)) ||
        (item.exVn && item.exVn.toLowerCase().includes(query))
      )
    : getFilteredVocabulary().slice(0, 6);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="color: var(--text-muted); font-size: 0.9rem;">Không tìm thấy từ phù hợp. Bạn có thể bấm nút "➕ Thêm từ mới" ở góc trên để bổ sung ngay!</div>`;
    return;
  }

  container.innerHTML = filtered.slice(0, 8).map(item => `
    <div
      style="background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px; cursor: pointer;"
      onclick="speakChinese('${(item.hanzi || item.pinyin).replace(/'/g, "")}', 0.95)"
    >
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
        <div>
          <div style="font-family: monospace; font-size: 1.15rem; font-weight: 800; color: var(--pinyin-color);">
            ${item.pinyin}
          </div>
          <span class="phonetic-badge" style="margin-top: 4px;">🗣️ Đọc bồi: ${item.phoneticVn || item.pinyin}</span>
        </div>
        <span class="btn" style="padding: 4px 10px; font-size: 0.78rem;">🔊 Nghe</span>
      </div>
      <div style="font-weight: 700; margin-top: 8px; font-size: 0.95rem;">
        ${item.meaning}
        <span class="hanzi-subtle">(${item.hanzi || ""})</span>
      </div>
      <div style="margin-top: 6px; font-size: 0.82rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 6px;">
        <div><b>Câu thực chiến:</b> <span style="color: var(--pinyin-color); font-family: monospace;">${item.exPinyin || ""}</span></div>
        <div>→ ${item.exVn || ""}</div>
      </div>
    </div>
  `).join("");
}

// --- VIEW 2: FLASHCARD TỪ MỚI (SRS) & BẢNG TỪ ĐIỂN ---
function setVocabMode(mode) {
  appState.vocabMode = mode;
  document.getElementById("mode-btn-srs").className = mode === "srs" ? "btn btn-primary" : "btn";
  document.getElementById("mode-btn-list").className = mode === "list" ? "btn btn-primary" : "btn";
  document.getElementById("vocab-srs-container").style.display = mode === "srs" ? "block" : "none";
  document.getElementById("vocab-list-container").style.display = mode === "list" ? "grid" : "none";
  renderVocabSection();
}

function renderVocabSection() {
  const list = getFilteredVocabulary();
  if (list.length === 0) return;

  if (appState.currentVocabIdx >= list.length) {
    appState.currentVocabIdx = 0;
  }

  const item = list[appState.currentVocabIdx];
  const prof = getActiveProfile();
  const srsInfo = (prof.srs && prof.srs[item.id]) ? prof.srs[item.id] : null;
  const deptObj = window.MES_CURRICULUM.departments.find(d => d.id === item.dept) || window.MES_CURRICULUM.departments[0];

  const statusBadge = !srsInfo
    ? `<span class="dept-pill">🆕 Từ mới chưa học</span>`
    : srsInfo.status === "mastered"
    ? `<span class="dept-pill" style="border-color: var(--success); color: var(--success);">🟢 Đã phản xạ</span>`
    : `<span class="dept-pill" style="border-color: var(--accent); color: var(--accent);">🟡 Đang ôn tập</span>`;

  const srsBox = document.getElementById("vocab-srs-container");
  srsBox.innerHTML = `
    <div style="background: var(--bg-main); border: 1.5px solid var(--border-color); border-radius: 16px; padding: 22px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="brand-badge">${deptObj.icon} ${deptObj.name}</span>
          ${statusBadge}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
          Thẻ ${appState.currentVocabIdx + 1} / ${list.length}
        </div>
      </div>

      <div class="grid-2" style="align-items: center; margin-bottom: 18px;">
        <div>
          <div class="pinyin-hero">${item.pinyin}</div>
          <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
            <span class="phonetic-badge">🗣️ Đọc bồi chuẩn âm: ${item.phoneticVn || item.pinyin}</span>
            <span class="hanzi-subtle" style="font-size: 1.15rem; font-weight: 700;">${item.hanzi || ""} (${item.hanViet || ""})</span>
          </div>
          <div style="font-size: 1.2rem; font-weight: 800; margin-top: 12px;">
            👉 ${item.meaning}
          </div>
          <div style="font-size: 0.86rem; color: var(--text-muted); margin-top: 6px;">
            💡 <b>Mẹo nhớ & Bối cảnh:</b> ${item.tip || "Cụm từ giao tiếp hàng ngày của IT MES."}
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px;">
            <button class="btn btn-primary" onclick="speakChinese('${(item.hanzi || item.pinyin).replace(/'/g, "")}', 1.0)">
              🔊 Nghe từ (1.0x)
            </button>
            <button class="btn" onclick="speakChinese('${(item.hanzi || item.pinyin).replace(/'/g, "")}', 0.65)">
              🐢 Nghe chậm (0.7x)
            </button>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
              💬 Mẫu câu thực chiến dưới xưởng
            </span>
            <button class="btn" style="padding: 4px 10px; font-size: 0.78rem;" onclick="speakChinese('${(item.exHanzi || item.hanzi || item.pinyin).replace(/'/g, "")}', 0.9)">
              🔊 Nghe cả câu
            </button>
          </div>
          <div style="font-family: monospace; font-size: 1.05rem; font-weight: 700; color: var(--pinyin-color); margin-bottom: 6px;">
            ${item.exPinyin || ""}
          </div>
          <div class="hanzi-subtle" style="margin-bottom: 4px;">${item.exHanzi || ""}</div>
          <div style="font-size: 0.92rem; font-weight: 600;">
            → ${item.exVn || ""}
          </div>
        </div>
      </div>

      <!-- SRS Action Bar -->
      <div style="border-top: 1px solid var(--border-color); padding-top: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; gap: 8px;">
          <button class="btn" onclick="prevVocabCard()">⬅️ Từ trước</button>
          <button class="btn" onclick="nextVocabCard()">Từ tiếp ➡️</button>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-danger" onclick="rateVocabSRS('${item.id}', 'learning', 10)">
            🔴 Chưa nhớ (Ôn sau 10p)
          </button>
          <button class="btn btn-warning" onclick="rateVocabSRS('${item.id}', 'review', 1440)">
            🟡 Hơi ngập ngừng (1 ngày)
          </button>
          <button class="btn btn-success" onclick="rateVocabSRS('${item.id}', 'mastered', 5760)">
            🟢 Đã phản xạ (4 ngày +15 XP)
          </button>
        </div>
      </div>
    </div>
  `;

  // Render full list mode
  const listContainer = document.getElementById("vocab-list-container");
  listContainer.innerHTML = list.map(w => {
    const st = (prof.srs && prof.srs[w.id]) ? prof.srs[w.id].status : "new";
    const badge = st === "mastered" ? "🟢 Đã thuộc" : st === "review" ? "🟡 Đang ôn" : "⚪ Mới";
    return `
      <div style="background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: monospace; font-size: 1.1rem; font-weight: 800; color: var(--pinyin-color);">${w.pinyin}</span>
          <span style="font-size: 0.76rem; color: var(--text-muted);">${badge}</span>
        </div>
        <div style="margin-top: 4px;">
          <span class="phonetic-badge">🗣️ ${w.phoneticVn || w.pinyin}</span>
        </div>
        <div style="font-weight: 700; margin-top: 6px;">${w.meaning}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; font-family: monospace;">${w.exPinyin || ""}</div>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <button class="btn" style="padding: 4px 10px; font-size: 0.78rem;" onclick="speakChinese('${(w.hanzi || w.pinyin).replace(/'/g, "")}', 0.95)">🔊 Từ</button>
          <button class="btn" style="padding: 4px 10px; font-size: 0.78rem;" onclick="speakChinese('${(w.exHanzi || w.hanzi || w.pinyin).replace(/'/g, "")}', 0.9)">🔊 Câu</button>
        </div>
      </div>
    `;
  }).join("");
}

function prevVocabCard() {
  const list = getFilteredVocabulary();
  appState.currentVocabIdx = (appState.currentVocabIdx - 1 + list.length) % list.length;
  renderVocabSection();
}

function nextVocabCard() {
  const list = getFilteredVocabulary();
  appState.currentVocabIdx = (appState.currentVocabIdx + 1) % list.length;
  renderVocabSection();
}

function rateVocabSRS(wordId, status, minutesUntilNext) {
  const prof = getActiveProfile();
  if (!prof.srs) prof.srs = {};
  prof.srs[wordId] = {
    status,
    nextReview: Date.now() + minutesUntilNext * 60 * 1000
  };
  prof.xp = (prof.xp || 0) + (status === "mastered" ? 15 : 5);
  saveState();
  nextVocabCard();
}

// --- VIEW 3: LUYỆN NGHE PHẢN XẠ "MÙ" (BLIND LISTENING) ---
function renderListeningSection() {
  const drills = window.MES_CURRICULUM.listeningDrills;
  const item = drills[appState.currentListenIdx];
  document.getElementById("listen-counter").textContent = `Tình huống ${appState.currentListenIdx + 1} / ${drills.length}`;

  const stage = document.getElementById("listening-stage");
  stage.innerHTML = `
    <div style="background: var(--bg-main); border: 1.5px solid var(--border-color); border-radius: 16px; padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
        <span class="brand-badge">📞 Người gọi: ${item.caller}</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="speakChinese('${item.audioText}', 1.0)">
            🔊 Nghe tốc độ thực tế (1.0x)
          </button>
          <button class="btn" onclick="speakChinese('${item.audioText}', 0.65)">
            🐢 Nghe chậm tách âm (0.7x)
          </button>
          <button class="btn" onclick="toggleListenReveal()">
            ${appState.listenRevealed ? "🙈 Ẩn chữ Pinyin" : "👁️ Hiện Pinyin & Nghĩa"}
          </button>
        </div>
      </div>

      <!-- Blind / Revealed Box -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
        ${
          !appState.listenRevealed
            ? `<div style="color: var(--text-muted); font-size: 0.92rem;">
                 🎧 <b>Chế độ Luyện Tai Mù:</b> Bấm nút <b>"🔊 Nghe tốc độ thực tế"</b> ở trên, cố gắng bắt các từ khóa Pinyin quen thuộc rồi chọn đáp án bên dưới!
               </div>`
            : `<div>
                 <div style="font-family: monospace; font-size: 1.15rem; font-weight: 800; color: var(--pinyin-color);">
                   ${item.pinyin}
                 </div>
                 <div class="hanzi-subtle" style="margin-top: 4px;">${item.audioText}</div>
                 <div style="margin-top: 6px; font-weight: 600;">👉 Dịch nghĩa: ${item.vn}</div>
                 <div style="margin-top: 8px; font-size: 0.82rem; color: var(--accent);">
                   🔑 Từ khóa cần bắt: ${item.keywords.join(" • ")}
                 </div>
               </div>`
        }
      </div>

      <div style="font-weight: 700; margin-bottom: 10px;">❓ ${item.question}</div>
      <div class="grid-3">
        ${item.options.map((opt, idx) => `
          <div
            style="background: var(--bg-card); border: 1.5px solid var(--border-color); border-radius: 12px; padding: 14px; cursor: pointer;"
            onclick="checkListenAnswer(${idx}, ${opt.correct})"
          >
            <div style="font-weight: 700; font-size: 0.92rem;">Phương án ${idx + 1}</div>
            <div style="color: var(--text-muted); font-size: 0.88rem; margin-top: 4px;">${opt.text}</div>
          </div>
        `).join("")}
      </div>
      <div id="listen-feedback" style="margin-top: 14px; font-weight: 700;"></div>
    </div>
  `;
}

function toggleListenReveal() {
  appState.listenRevealed = !appState.listenRevealed;
  renderListeningSection();
}

function checkListenAnswer(idx, isCorrect) {
  const fb = document.getElementById("listen-feedback");
  const prof = getActiveProfile();
  if (isCorrect) {
    appState.listenRevealed = true;
    prof.xp = (prof.xp || 0) + 10;
    saveState();
    renderListeningSection();
    document.getElementById("listen-feedback").innerHTML = `<span style="color: var(--success);">✅ Chính xác! (+10 XP đã đồng bộ) Bạn đã bắt đúng từ khóa của tình huống này.</span>`;
  } else {
    fb.innerHTML = `<span style="color: var(--danger);">❌ Chưa chính xác! Hãy bấm "🐢 Nghe chậm tách âm (0.7x)" để nghe kỹ lại các từ khóa Pinyin nhé.</span>`;
  }
}

function prevListening() {
  const len = window.MES_CURRICULUM.listeningDrills.length;
  appState.currentListenIdx = (appState.currentListenIdx - 1 + len) % len;
  appState.listenRevealed = false;
  renderListeningSection();
}

function nextListening() {
  const len = window.MES_CURRICULUM.listeningDrills.length;
  appState.currentListenIdx = (appState.currentListenIdx + 1) % len;
  appState.listenRevealed = false;
  renderListeningSection();
}

// --- VIEW 4: NGHE & GÕ PINYIN (DICTATION) ---
function normalizePinyin(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function renderDictationSection() {
  const list = window.MES_CURRICULUM.dictations;
  const item = list[appState.currentDictIdx];
  document.getElementById("dict-counter").textContent = `Bài ${appState.currentDictIdx + 1} / ${list.length}`;

  const stage = document.getElementById("dictation-stage");
  stage.innerHTML = `
    <div style="background: var(--bg-main); border: 1.5px solid var(--border-color); border-radius: 16px; padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary" onclick="speakChinese('${item.audioText}', 0.95)">
            🔊 Nghe câu lệnh (1.0x)
          </button>
          <button class="btn" onclick="speakChinese('${item.audioText}', 0.65)">
            🐢 Nghe chậm (0.7x)
          </button>
        </div>
        <button class="btn" onclick="fillDictationHint()">💡 Điền gợi ý mẫu</button>
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 18px; margin-bottom: 14px;">
        <div style="font-family: monospace; font-size: 1.15rem; font-weight: 700; display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
          <span>${item.beforePy}</span>
          <input id="dict-in-1" class="input-field" style="width: 140px; padding: 6px 10px; font-family: monospace; color: var(--pinyin-color);" placeholder="Từ Pinyin 1..." />
          <span>${item.midPy}</span>
          <input id="dict-in-2" class="input-field" style="width: 140px; padding: 6px 10px; font-family: monospace; color: var(--pinyin-color);" placeholder="Từ Pinyin 2..." />
          <span>${item.afterPy}</span>
        </div>
        <div style="margin-top: 10px; color: var(--text-muted); font-size: 0.9rem;">
          Nghĩa tiếng Việt: <b>${item.vn}</b>
        </div>
        <div style="margin-top: 6px; font-size: 0.82rem; color: var(--accent);">
          Gợi ý: ${item.hint}
        </div>
      </div>

      <button class="btn btn-primary" onclick="checkDictationInput()">✅ Kiểm tra Pinyin</button>
      <div id="dictation-result" style="margin-top: 12px; font-weight: 700;"></div>
    </div>
  `;
}

function fillDictationHint() {
  const item = window.MES_CURRICULUM.dictations[appState.currentDictIdx];
  document.getElementById("dict-in-1").value = item.blank1;
  document.getElementById("dict-in-2").value = item.blank2;
  checkDictationInput();
}

function checkDictationInput() {
  const item = window.MES_CURRICULUM.dictations[appState.currentDictIdx];
  const v1 = normalizePinyin(document.getElementById("dict-in-1").value);
  const v2 = normalizePinyin(document.getElementById("dict-in-2").value);
  const res = document.getElementById("dictation-result");

  const ok1 = v1 === item.blank1 || (item.blank1Alt && v1 === item.blank1Alt);
  const ok2 = v2 === item.blank2;

  if (ok1 && ok2) {
    const prof = getActiveProfile();
    prof.xp = (prof.xp || 0) + 15;
    saveState();
    res.innerHTML = `<span style="color: var(--success);">🎉 Tuyệt vời! (+15 XP đã đồng bộ) Chuẩn Pinyin: <b>${item.blank1Display}</b> và <b>${item.blank2Display}</b>.</span>`;
  } else {
    res.innerHTML = `<span style="color: var(--accent);">💡 Kiểm tra lại nhé: Ô 1 là <code>${item.blank1}</code> (${item.blank1Display}), Ô 2 là <code>${item.blank2}</code> (${item.blank2Display}).</span>`;
  }
}

function prevDictation() {
  const len = window.MES_CURRICULUM.dictations.length;
  appState.currentDictIdx = (appState.currentDictIdx - 1 + len) % len;
  renderDictationSection();
}

function nextDictation() {
  const len = window.MES_CURRICULUM.dictations.length;
  appState.currentDictIdx = (appState.currentDictIdx + 1) % len;
  renderDictationSection();
}

// --- VIEW 5: ĐÓNG VAI XỬ LÝ SỰ CỐ & LUYỆN NÓI QUA MICROPHONE ---
function renderRoleplaySection() {
  const list = window.MES_CURRICULUM.roleplays;
  const rp = list[appState.currentRoleplayIdx];
  const stage = document.getElementById("roleplay-stage");

  stage.innerHTML = `
    <div style="background: var(--bg-main); border: 1.5px solid var(--border-color); border-radius: 16px; padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
        <span class="brand-badge">🛠️ Kịch bản ${appState.currentRoleplayIdx + 1}/${list.length}: ${rp.title}</span>
        <button class="btn btn-primary" onclick="speakChinese('${rp.partnerQuestionHanzi}', 0.95)">
          🔊 Nghe ${rp.partnerRole} nói
        </button>
      </div>

      <!-- Partner Bubble -->
      <div style="background: var(--bg-card); border-left: 4px solid var(--accent); border-radius: 10px; padding: 14px; margin-bottom: 18px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent); margin-bottom: 4px;">
          👤 ${rp.partnerRole} gọi báo sự cố:
        </div>
        <div style="font-family: monospace; font-size: 1.1rem; font-weight: 800; color: var(--pinyin-color);">
          "${rp.partnerQuestionPinyin}"
        </div>
        <div class="hanzi-subtle" style="margin-top: 2px;">${rp.partnerQuestionHanzi}</div>
        <div style="margin-top: 6px; color: var(--text-muted); font-size: 0.9rem;">
          (${rp.partnerQuestionVn})
        </div>
      </div>

      <div style="font-weight: 700; margin-bottom: 10px;">
        🗣️ Chọn câu trả lời của IT MES (Bấm nghe mẫu hoặc bấm 🎙️ Thu âm giọng nói của bạn):
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${rp.SuggestedReplies.map((rep, idx) => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--success); margin-bottom: 4px;">
              ${rep.label}
            </div>
            <div style="font-family: monospace; font-size: 1.12rem; font-weight: 800; color: var(--pinyin-color);">
              ${rep.pinyin}
            </div>
            <div style="margin-top: 6px;">
              <span class="phonetic-badge">🗣️ Đọc bồi: ${rep.phoneticVn}</span>
            </div>
            <div style="margin-top: 6px; font-size: 0.9rem;">
              → ${rep.vn}
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
              <button class="btn btn-primary" onclick="speakChinese('${rep.hanzi}', 0.92)">
                🔊 Nghe phát âm mẫu
              </button>
              <button class="btn" onclick="speakChinese('${rep.hanzi}', 0.65)">
                🐢 Nghe chậm (0.7x)
              </button>
              <button class="btn btn-success" onclick="startSpeechPractice('${rep.hanzi}', ${idx})">
                🎙️ Bấm để nói vào Mic
              </button>
            </div>
            <div id="mic-feedback-${idx}" style="margin-top: 8px; font-size: 0.85rem; font-weight: 600;"></div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function startSpeechPractice(expectedHanzi, idx) {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const fb = document.getElementById("mic-feedback-" + idx);

  if (!SpeechRec) {
    fb.innerHTML = `<span style="color: var(--accent);">⚠️ Trình duyệt hiện tại chưa bật nhận diện giọng nói. Bạn hãy dùng Chrome/Edge và bấm "🔊 Nghe phát âm mẫu" để nhại theo nhé!</span>`;
    return;
  }

  const rec = new SpeechRec();
  rec.lang = "zh-CN";
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  fb.innerHTML = `<span style="color: var(--pinyin-color);">🎙️ Đang lắng nghe... Bạn hãy đọc to câu Pinyin ở trên vào Mic!</span>`;

  rec.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const prof = getActiveProfile();
    prof.xp = (prof.xp || 0) + 20;
    saveState();
    fb.innerHTML = `<span style="color: var(--success);">✅ Máy nghe được: "${transcript}" (+20 XP đã đồng bộ!)</span>`;
  };

  rec.onerror = function() {
    fb.innerHTML = `<span style="color: var(--accent);">💡 Không nghe rõ hoặc chưa cấp quyền Mic. Hãy bấm thử lại nhé!</span>`;
  };

  rec.start();
}

function prevRoleplay() {
  const len = window.MES_CURRICULUM.roleplays.length;
  appState.currentRoleplayIdx = (appState.currentRoleplayIdx - 1 + len) % len;
  renderRoleplaySection();
}

function nextRoleplay() {
  const len = window.MES_CURRICULUM.roleplays.length;
  appState.currentRoleplayIdx = (appState.currentRoleplayIdx + 1) % len;
  renderRoleplaySection();
}

// --- VIEW 6: BÍ KÍP ĐỌC PINYIN ---
function renderPinyinRules() {
  const container = document.getElementById("pinyin-rules-container");
  container.innerHTML = window.MES_CURRICULUM.pinyinRules.map(section => `
    <div style="background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 14px; padding: 18px; margin-bottom: 16px;">
      <h3 style="font-size: 1.05rem; color: var(--pinyin-color); margin-bottom: 4px;">${section.group}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">${section.desc}</p>
      <div class="grid-3">
        ${section.items.map(it => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-family: monospace; font-size: 1.1rem; font-weight: 800; color: var(--accent);">${it.pair}</span>
              <button class="btn" style="padding: 4px 10px; font-size: 0.76rem;" onclick="speakChinese('${it.exampleAudio}', 0.85)">
                🔊 Nghe mẫu
              </button>
            </div>
            <div style="font-size: 0.84rem; margin-top: 8px;">${it.howTo}</div>
            <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--border-color); font-size: 0.8rem; font-family: monospace; color: var(--pinyin-color);">
              VD: ${it.examplePy} (${it.vn})
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// --- THÊM TỪ MỚI (CUSTOM VOCABULARY CRUD) ---
function openAddWordModal() {
  document.getElementById("add-word-modal").classList.remove("hidden");
}

function closeAddWordModal() {
  document.getElementById("add-word-modal").classList.add("hidden");
}

function saveCustomWord() {
  const dept = document.getElementById("new-word-dept").value;
  const pinyin = document.getElementById("new-word-pinyin").value.trim();
  const phoneticVn = document.getElementById("new-word-phonetic").value.trim();
  const meaning = document.getElementById("new-word-meaning").value.trim();
  const exPinyin = document.getElementById("new-word-expy").value.trim();
  const exVn = document.getElementById("new-word-exvn").value.trim();

  if (!pinyin || !meaning) {
    alert("Vui lòng nhập tối thiểu Pinyin và Nghĩa tiếng Việt!");
    return;
  }

  const newWord = {
    id: "custom_" + Date.now(),
    dept,
    pinyin,
    pinyinPlain: normalizePinyin(pinyin),
    phoneticVn: phoneticVn || pinyin,
    hanzi: pinyin,
    hanViet: "Từ tự thêm",
    meaning,
    tip: "Từ vựng thực tế bạn tự bổ sung tại xưởng.",
    exPinyin: exPinyin || pinyin,
    exHanzi: exPinyin || pinyin,
    exVn: exVn || meaning
  };

  if (!appState.customWords) appState.customWords = [];
  appState.customWords.unshift(newWord);
  saveState();
  closeAddWordModal();
  refreshAllViews();
  alert("✅ Đã lưu từ mới vào Kho từ chung và tự động đồng bộ Cloud!");
}

// --- ĐỒNG BỘ & SAO LƯU DỮ LIỆU GIỮA CÁC MÁY ---
function openSyncModal() {
  document.getElementById("sync-data-box").value = JSON.stringify(appState);
  document.getElementById("sync-modal").classList.remove("hidden");
}

function closeSyncModal() {
  document.getElementById("sync-modal").classList.add("hidden");
}

function exportProgressJSON() {
  const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "it-mes-chinese-backup.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importProgressJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && parsed.profiles) {
        appState = parsed;
        saveState();
        renderProfileOverlay();
        refreshAllViews();
        closeSyncModal();
        alert("✅ Đã khôi phục toàn bộ Profile & đồng bộ lên Cloud!");
      }
    } catch (err) {
      alert("❌ File không hợp lệ!");
    }
  };
  reader.readAsText(file);
}

function applySyncString() {
  const raw = document.getElementById("sync-data-box").value.trim();
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.profiles) {
      appState = parsed;
      saveState();
      renderProfileOverlay();
      refreshAllViews();
      closeSyncModal();
      alert("✅ Đã nạp và đồng bộ dữ liệu Profile thành công!");
    }
  } catch (e) {
    alert("❌ Chuỗi dữ liệu không đúng định dạng!");
  }
}

function refreshAllViews() {
  updateTopStats();
  renderDeptFilters();
  renderQuickSearch();
  renderVocabSection();
  renderListeningSection();
  renderDictationSection();
  renderRoleplaySection();
  renderPinyinRules();
}

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderProfileOverlay();
  refreshAllViews();
  syncFromCloud(false);
});

// Tự động đồng bộ lại khi người dùng mở lại tab trên điện thoại/máy tính
window.addEventListener("focus", () => {
  syncFromCloud(false);
});
