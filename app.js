(() => {
  "use strict";

  const STORAGE_KEY = "htta_learning_progress_v1";
  const { subjects, gradeInfo, lessons } = window.CURRICULUM;

  const state = {
    grade: "5",
    subject: "all",
    statusFilter: "all",
    search: "",
    activeLessonId: null,
    activeTab: "learn",
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizStartTime: null,
    quizTimerId: null,
    reportGrade: "all",
    progress: loadProgress()
  };

  // ===== DOM Elements =====
  const el = {
    homeView: document.getElementById("home-view"),
    lessonView: document.getElementById("lesson-view"),
    reportView: document.getElementById("report-view"),
    btnHome: document.getElementById("btn-home"),
    btnGrade5: document.getElementById("btn-grade-5"),
    btnGrade7: document.getElementById("btn-grade-7"),
    btnOpenReport: document.getElementById("btn-open-report"),
    btnReportBack: document.getElementById("btn-report-back"),
    btnClearHistory: document.getElementById("btn-clear-history"),
    reportStatsGrid: document.getElementById("report-stats-grid"),
    reportLessonsTable: document.getElementById("report-lessons-table"),
    reportHistoryList: document.getElementById("report-history-list"),
    reportFilterBtns: document.querySelectorAll("[data-report-grade]"),
    heroBadge: document.getElementById("hero-badge"),
    heroTitle: document.getElementById("hero-title"),
    heroDesc: document.getElementById("hero-desc"),
    progressPercent: document.getElementById("progress-percent"),
    progressFill: document.getElementById("progress-fill"),
    progressLessons: document.getElementById("progress-lessons"),
    progressStars: document.getElementById("progress-stars"),
    subjectPills: document.getElementById("subject-pills"),
    statusFilterBtns: document.querySelectorAll("[data-status]"),
    btnRandomQuiz: document.getElementById("btn-random-quiz"),
    allDoneBanner: document.getElementById("all-done-banner"),
    searchInput: document.getElementById("search-input"),
    lessonsGrid: document.getElementById("lessons-grid"),
    emptyState: document.getElementById("empty-state"),
    btnBackHome: document.getElementById("btn-back-home"),
    lessonMetaBadges: document.getElementById("lesson-meta-badges"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonSubtitle: document.getElementById("lesson-subtitle"),
    quizCountBadge: document.getElementById("quiz-count-badge"),
    learnContent: document.getElementById("learn-content"),
    quizContainer: document.getElementById("quiz-container"),
    parentContent: document.getElementById("parent-content"),
    btnGoQuiz: document.getElementById("btn-go-quiz"),
    tabBtns: document.querySelectorAll(".tab-btn"),
    tabPanels: document.querySelectorAll(".tab-panel")
  };

  // ===== Storage & Format Helpers =====
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        completed: parsed.completed || {},
        history: Array.isArray(parsed.history) ? parsed.history : []
      };
    } catch {
      return { completed: {}, history: [] };
    }
  }

  function formatDuration(totalSeconds) {
    const sec = Math.max(0, Math.round(totalSeconds || 0));
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    if (mins === 0) return `${rem} giây`;
    return `${mins} phút ${rem < 10 ? "0" : ""}${rem} giây`;
  }

  function formatShortTimer(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds || 0));
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${rem < 10 ? "0" : ""}${rem}`;
  }

  function formatDateTime(iso) {
    if (!iso) return "—";
    try {
      return new Date(iso).toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return iso;
    }
  }

  function saveLocalOnly() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch {
      // Ignore storage quota errors
    }
  }

  function setCloudBadge(text, isOnline) {
    const badge = document.getElementById("cloud-sync-badge");
    if (!badge) return;
    badge.textContent = text;
    if (isOnline) {
      badge.style.background = "#dcfce7";
      badge.style.color = "#15803d";
      badge.style.border = "1px solid #86efac";
    } else {
      badge.style.background = "#e2e8f0";
      badge.style.color = "#475569";
      badge.style.border = "none";
    }
  }

  async function pushToCloud(clearAll = false) {
    if (window.location.protocol === "file:") return;
    try {
      setCloudBadge("☁️ Đang lưu...", true);
      const payload = clearAll
        ? { clearAll: true }
        : {
            completed: state.progress.completed || {},
            history: state.progress.history || []
          };
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.ok && json.data) {
          state.progress = {
            completed: json.data.completed || {},
            history: Array.isArray(json.data.history) ? json.data.history : []
          };
          saveLocalOnly();
        }
        setCloudBadge("☁️ Đã đồng bộ Cloud", true);
      }
    } catch {
      setCloudBadge("⚠️ Lưu tại máy", false);
    }
  }

  async function syncFromCloud(showNotification = false) {
    if (window.location.protocol === "file:") {
      setCloudBadge("💻 Chế độ Local", false);
      return;
    }
    try {
      setCloudBadge("🔄 Đang đồng bộ...", false);
      // Gửi luôn dữ liệu hiện có trên máy này (ví dụ dữ liệu cũ trên iPad) lên để gộp 2 chiều với Cloud
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: state.progress.completed || {},
          history: state.progress.history || []
        })
      });
      if (!res.ok) throw new Error("Sync failed");
      const json = await res.json();
      if (json && json.ok && json.data) {
        state.progress = {
          completed: json.data.completed || {},
          history: Array.isArray(json.data.history) ? json.data.history : []
        };
        saveLocalOnly();
        renderHeroAndProgress();
        renderLessonsGrid();
        if (!el.reportView.classList.contains("hidden")) {
          renderReport();
        }
        if (showNotification) {
          alert("☁️ Đã cập nhật kết quả học tập mới nhất của các con từ Đám mây!");
        }
      }
      setCloudBadge("☁️ Đã đồng bộ Cloud", true);
    } catch {
      setCloudBadge("💻 Lưu tại máy", false);
    }
  }

  function saveProgress() {
    saveLocalOnly();
    pushToCloud(false);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getSubjectMeta(subjectId) {
    return subjects.find((s) => s.id === subjectId) || subjects[0];
  }

  // ===== Speech Synthesis for English =====
  function speakEnglish(text) {
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt hiện tại chưa hỗ trợ đọc phát âm tự động.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // ===== Grade & Home Rendering =====
  function setGrade(grade) {
    state.grade = grade;
    state.subject = "all";
    state.statusFilter = "all";
    state.search = "";
    el.searchInput.value = "";

    document.body.classList.toggle("grade-7", grade === "7");
    el.btnGrade5.classList.toggle("active", grade === "5");
    el.btnGrade7.classList.toggle("active", grade === "7");

    showHomeView();
  }

  function stopQuizTimer() {
    if (state.quizTimerId) {
      clearInterval(state.quizTimerId);
      state.quizTimerId = null;
    }
  }

  function startQuizTimer() {
    stopQuizTimer();
    state.quizStartTime = Date.now();
    state.quizTimerId = setInterval(() => {
      const badge = document.getElementById("quiz-timer-pill");
      if (badge && state.quizStartTime) {
        const elapsed = Math.floor((Date.now() - state.quizStartTime) / 1000);
        badge.textContent = `⏱ ${formatShortTimer(elapsed)}`;
      }
    }, 1000);
  }

  function showHomeView() {
    stopQuizTimer();
    state.activeLessonId = null;
    el.lessonView.classList.add("hidden");
    el.reportView.classList.add("hidden");
    el.homeView.classList.remove("hidden");
    renderHeroAndProgress();
    renderSubjectPills();
    renderLessonsGrid();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHeroAndProgress() {
    const info = gradeInfo[state.grade];
    el.heroBadge.textContent = info.badge;
    el.heroTitle.textContent = info.title;
    el.heroDesc.textContent = info.desc;

    const gradeLessons = lessons.filter((l) => l.grade === state.grade);
    const total = gradeLessons.length;
    let doneCount = 0;
    let totalStars = 0;

    gradeLessons.forEach((l) => {
      const record = state.progress.completed[l.id];
      if (record && record.done) {
        doneCount += 1;
        totalStars += record.bestScore * 10;
      }
    });

    const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;
    el.progressPercent.textContent = `${percent}%`;
    el.progressFill.style.width = `${percent}%`;
    el.progressLessons.textContent = `${doneCount}/${total} bài đã hoàn thành`;
    el.progressStars.textContent = `⭐ ${totalStars} điểm`;
  }

  function renderSubjectPills() {
    el.subjectPills.innerHTML = subjects
      .map(
        (sub) => `
        <button
          type="button"
          class="pill-btn ${state.subject === sub.id ? "active" : ""}"
          data-subject="${sub.id}"
          role="tab"
          aria-selected="${state.subject === sub.id}"
        >
          <span>${sub.icon}</span>
          <span>${escapeHtml(sub.name)}</span>
        </button>
      `
      )
      .join("");

    el.subjectPills.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.subject = btn.dataset.subject;
        renderSubjectPills();
        renderLessonsGrid();
      });
    });
  }

  function renderLessonsGrid() {
    const gradeLessons = lessons.filter((l) => l.grade === state.grade);
    const allDone =
      gradeLessons.length > 0 &&
      gradeLessons.every((l) => state.progress.completed[l.id]?.done);
    el.allDoneBanner.classList.toggle("hidden", !allDone);

    el.statusFilterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.status === state.statusFilter);
    });

    const keyword = state.search.trim().toLowerCase();
    const filtered = gradeLessons.filter((lesson) => {
      if (state.subject !== "all" && lesson.subject !== state.subject) return false;
      const isDone = Boolean(state.progress.completed[lesson.id]?.done);
      if (state.statusFilter === "todo" && isDone) return false;
      if (state.statusFilter === "done" && !isDone) return false;
      if (keyword) {
        const haystack = `${lesson.title} ${lesson.summary}`.toLowerCase();
        if (!haystack.includes(keyword)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      el.lessonsGrid.innerHTML = "";
      el.emptyState.classList.remove("hidden");
      return;
    }

    el.emptyState.classList.add("hidden");
    el.lessonsGrid.innerHTML = filtered
      .map((lesson) => {
        const sub = getSubjectMeta(lesson.subject);
        const record = state.progress.completed[lesson.id];
        const isDone = record && record.done;
        const statusHtml = isDone
          ? `<span class="status-badge done">✓ Đạt ${record.bestScore}/${lesson.quiz.length}</span>`
          : `<span class="status-badge">⏱ ${escapeHtml(lesson.duration)}</span>`;
        const footerLeft = isDone
          ? `<span>✅ Đã làm ${record.attempts || 1} lần • ⏱ ${formatShortTimer(record.lastTimeSec || 0)}</span>`
          : `<span>📖 Bài học • ✏️ ${lesson.quiz.length} câu hỏi</span>`;

        return `
          <article class="lesson-card ${isDone ? "is-done" : ""}" data-id="${lesson.id}" tabindex="0" role="button">
            <div class="lesson-card-top">
              <span class="subject-tag ${lesson.subject}">${sub.icon} ${escapeHtml(sub.name)}</span>
              ${statusHtml}
            </div>
            <h3>${escapeHtml(lesson.title)}</h3>
            <p>${escapeHtml(lesson.summary)}</p>
            <div class="lesson-card-footer">
              ${footerLeft}
              <span>${isDone ? "Ôn lại →" : "Học ngay →"}</span>
            </div>
          </article>
        `;
      })
      .join("");

    el.lessonsGrid.querySelectorAll(".lesson-card").forEach((card) => {
      const open = () => openLesson(card.dataset.id);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startRandomQuiz() {
    const poolLessons = lessons.filter(
      (l) => l.grade === state.grade && (state.subject === "all" || l.subject === state.subject)
    );
    const allQuestions = [];
    poolLessons.forEach((l) => {
      l.quiz.forEach((q) => {
        const indexedOptions = q.options.map((opt, idx) => ({
          text: opt,
          isCorrect: idx === q.correctIndex
        }));
        const shuffledOptions = shuffleArray(indexedOptions);
        allQuestions.push({
          question: `[${l.title}] ${q.question}`,
          options: shuffledOptions.map((o) => o.text),
          correctIndex: shuffledOptions.findIndex((o) => o.isCorrect),
          explanation: q.explanation
        });
      });
    });

    if (allQuestions.length === 0) return;

    const selected = shuffleArray(allQuestions).slice(0, 10);
    const subMeta = getSubjectMeta(state.subject);
    const randomLesson = {
      id: `random-g${state.grade}-${state.subject}`,
      isRandom: true,
      grade: state.grade,
      subject: state.subject === "all" ? "math" : state.subject,
      title: `🎲 Ôn tập ngẫu nhiên — ${subMeta.name} (Lớp ${state.grade})`,
      summary: `Trộn ngẫu nhiên ${selected.length} câu hỏi và xáo trộn thứ tự đáp án để kiểm tra trí nhớ.`,
      sections: [
        {
          icon: "🎲",
          heading: "Chế độ Ôn tập ngẫu nhiên",
          text: "Các câu hỏi và đáp án A, B, C, D đã được xáo trộn tự động từ các bài học hiện có. Bấm sang tab Bài tập trắc nghiệm để làm lại bất cứ lúc nào!"
        }
      ],
      parentGuide: {
        goal: "Giúp con ôn tập tổng hợp mà không học vẹt theo vị trí đáp án.",
        steps: [
          "Cho con tự làm hết 1 lượt rồi xem lại các câu làm sai ở phần giải thích.",
          "Nếu con sai nhiều ở bài nào, mở lại đúng bài đó để đọc phần Bài học trực quan."
        ],
        mistakes: ["Đoán nhanh theo thói quen cũ mà không đọc kỹ đề."],
        realLife: "Mỗi cuối tuần cho con làm 1 lượt Ôn tập ngẫu nhiên 10 câu để giữ phong độ."
      },
      quiz: selected
    };

    state.activeLessonId = randomLesson.id;
    state.activeRandomLesson = randomLesson;
    stopQuizTimer();
    state.quizStartTime = null;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    el.lessonMetaBadges.innerHTML = `
      <span class="subject-tag ${randomLesson.subject}">🎲 Ôn tập tổng hợp</span>
      <span class="status-badge">Lớp ${escapeHtml(randomLesson.grade)}</span>
    `;
    el.lessonTitle.textContent = randomLesson.title;
    el.lessonSubtitle.textContent = randomLesson.summary;
    el.quizCountBadge.textContent = randomLesson.quiz.length;

    renderLearnContent(randomLesson);
    renderParentContent(randomLesson);
    renderQuiz(randomLesson);
    switchTab("quiz");

    el.homeView.classList.add("hidden");
    el.reportView.classList.add("hidden");
    el.lessonView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ===== Lesson Detail View =====
  function openLesson(lessonId) {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    state.activeRandomLesson = null;

    state.activeLessonId = lessonId;
    stopQuizTimer();
    state.quizStartTime = null;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    const sub = getSubjectMeta(lesson.subject);
    el.lessonMetaBadges.innerHTML = `
      <span class="subject-tag ${lesson.subject}">${sub.icon} ${escapeHtml(sub.name)}</span>
      <span class="status-badge">Lớp ${escapeHtml(lesson.grade)}</span>
    `;
    el.lessonTitle.textContent = lesson.title;
    el.lessonSubtitle.textContent = lesson.summary;
    el.quizCountBadge.textContent = lesson.quiz.length;

    renderLearnContent(lesson);
    renderParentContent(lesson);
    renderQuiz(lesson);
    switchTab("learn");

    el.homeView.classList.add("hidden");
    el.lessonView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    el.tabBtns.forEach((btn) => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
    el.tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `panel-${tabName}`);
    });

    if (tabName === "quiz" && !state.quizStartTime && state.activeLessonId) {
      startQuizTimer();
    }
  }

  function renderLearnContent(lesson) {
    el.learnContent.innerHTML = lesson.sections
      .map((sec) => {
        let body = "";

        if (sec.text) {
          body += `<p>${escapeHtml(sec.text)}</p>`;
        }

        if (sec.diagram) {
          body += `
            <div class="diagram-box">
              ${sec.diagram.svg}
              ${sec.diagram.caption ? `<div class="diagram-caption">${escapeHtml(sec.diagram.caption)}</div>` : ""}
            </div>
          `;
        }

        if (sec.bullets) {
          body += `<ul>${sec.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
        }

        if (sec.formula) {
          body += `<div class="formula-box">${escapeHtml(sec.formula)}</div>`;
        }

        if (sec.workedExample) {
          body += `
            <div class="worked-example">
              <div class="worked-example-title">✍️ ${escapeHtml(sec.workedExample.title)}</div>
              <ol class="example-steps">
                ${sec.workedExample.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
              </ol>
            </div>
          `;
        }

        if (sec.fractionBar) {
          const parts = Array.from({ length: sec.fractionBar.total }, (_, idx) =>
            `<div class="fraction-part ${idx < sec.fractionBar.filled ? "filled" : "empty"}"></div>`
          ).join("");
          body += `
            <div class="fraction-bar-wrap">
              <div>${escapeHtml(sec.fractionBar.label)}</div>
              <div class="fraction-bar">${parts}</div>
            </div>
          `;
        }

        if (sec.grid) {
          body += `
            <div class="visual-grid">
              ${sec.grid
                .map(
                  (item) => `
                  <div class="visual-item">
                    <strong>${escapeHtml(item.title)}</strong>
                    <span>${escapeHtml(item.detail)}</span>
                  </div>
                `
                )
                .join("")}
            </div>
          `;
        }

        if (sec.vocab) {
          body += sec.vocab
            .map(
              (v) => `
              <div class="vocab-row">
                <div>
                  <strong>${escapeHtml(v.word)}</strong>
                  <div style="font-size: 0.88rem; color: var(--text-muted);">${escapeHtml(v.meaning)}</div>
                </div>
                <button type="button" class="btn-speak" data-speak="${escapeHtml(v.word)}">
                  🔊 Nghe
                </button>
              </div>
            `
            )
            .join("");
        }

        if (sec.tip) {
          return `
            <div class="tip-callout">
              <strong>${escapeHtml(sec.icon || "💡")} ${escapeHtml(sec.heading)}:</strong>
              <div style="margin-top: 4px;">${escapeHtml(sec.tip)}</div>
            </div>
          `;
        }

        return `
          <section class="concept-card">
            <h3><span>${escapeHtml(sec.icon || "📌")}</span><span>${escapeHtml(sec.heading)}</span></h3>
            ${body}
          </section>
        `;
      })
      .join("");

    el.learnContent.querySelectorAll(".btn-speak").forEach((btn) => {
      btn.addEventListener("click", () => speakEnglish(btn.dataset.speak));
    });
  }

  function renderParentContent(lesson) {
    const g = lesson.parentGuide;
    el.parentContent.innerHTML = `
      <div class="parent-card highlight">
        <h3>🎯 Mục tiêu cốt lõi khi dạy con bài này</h3>
        <p>${escapeHtml(g.goal)}</p>
      </div>

      <div class="parent-card">
        <h3>🪜 Các bước hướng dẫn con tiếp cận dễ nhất</h3>
        <ol>${g.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
      </div>

      <div class="parent-card">
        <h3>⚠️ Lỗi sai con thường gặp (Bố/mẹ lưu ý nhắc nhẹ)</h3>
        <ul>${g.mistakes.map((m) => `<li>${escapeHtml(m)}</li>`).join("")}</ul>
      </div>

      <div class="parent-card">
        <h3>🏡 Gợi ý thực hành 5 phút trong đời sống</h3>
        <p>${escapeHtml(g.realLife)}</p>
      </div>
    `;
  }

  // ===== Quiz Engine =====
  function renderQuiz(lesson) {
    const total = lesson.quiz.length;

    if (state.quizIndex >= total) {
      renderQuizSummary(lesson);
      return;
    }

    const q = lesson.quiz[state.quizIndex];
    const letters = ["A", "B", "C", "D"];
    const percent = Math.round(((state.quizIndex + 1) / total) * 100);
    const elapsedNow = state.quizStartTime
      ? Math.floor((Date.now() - state.quizStartTime) / 1000)
      : 0;

    el.quizContainer.innerHTML = `
      <div class="quiz-progress-row">
        <span>Câu hỏi ${state.quizIndex + 1} / ${total}</span>
        <span class="quiz-timer-pill" id="quiz-timer-pill">⏱ ${formatShortTimer(elapsedNow)}</span>
        <span>Điểm hiện tại: ${state.quizScore}/${total}</span>
      </div>
      <div class="quiz-bar-track">
        <div class="quiz-bar-fill" style="width: ${percent}%"></div>
      </div>

      <div class="quiz-question-card">
        <div class="quiz-question-text">${escapeHtml(q.question)}</div>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, idx) => `
              <button type="button" class="quiz-option" data-index="${idx}">
                <span class="option-letter">${letters[idx]}</span>
                <span>${escapeHtml(opt)}</span>
              </button>
            `
            )
            .join("")}
        </div>
        <div id="quiz-feedback-slot"></div>
      </div>

      <div class="quiz-actions">
        <button type="button" class="btn-primary hidden" id="btn-next-question">
          ${state.quizIndex + 1 < total ? "Câu tiếp theo →" : "Xem kết quả 🎉"}
        </button>
      </div>
    `;

    const optionBtns = el.quizContainer.querySelectorAll(".quiz-option");
    const feedbackSlot = document.getElementById("quiz-feedback-slot");
    const nextBtn = document.getElementById("btn-next-question");

    optionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.quizAnswered) return;
        state.quizAnswered = true;

        const chosen = Number(btn.dataset.index);
        const isCorrect = chosen === q.correctIndex;
        if (isCorrect) state.quizScore += 1;

        optionBtns.forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.correctIndex) b.classList.add("correct");
          else if (idx === chosen && !isCorrect) b.classList.add("wrong");
        });

        feedbackSlot.innerHTML = `
          <div class="quiz-feedback ${isCorrect ? "correct" : "wrong"}">
            <strong>${isCorrect ? "🎉 Chính xác! Tuyệt vời!" : "💡 Chưa đúng rồi, cùng xem giải thích nhé:"}</strong>
            <div style="margin-top: 4px;">${escapeHtml(q.explanation)}</div>
          </div>
        `;

        nextBtn.classList.remove("hidden");
      });
    });

    nextBtn.addEventListener("click", () => {
      state.quizIndex += 1;
      state.quizAnswered = false;
      renderQuiz(lesson);
    });
  }

  function renderQuizSummary(lesson) {
    const total = lesson.quiz.length;
    const score = state.quizScore;
    const ratio = score / total;
    const durationSec = state.quizStartTime
      ? Math.max(1, Math.round((Date.now() - state.quizStartTime) / 1000))
      : 1;
    stopQuizTimer();
    state.quizStartTime = null;

    const nowIso = new Date().toISOString();
    let attempts = 1;
    if (!lesson.isRandom) {
      const prev = state.progress.completed[lesson.id];
      const bestScore = prev ? Math.max(prev.bestScore, score) : score;
      attempts = prev && prev.attempts ? prev.attempts + 1 : 1;
      const totalTimeSec = (prev && prev.totalTimeSec ? prev.totalTimeSec : 0) + durationSec;

      state.progress.completed[lesson.id] = {
        done: true,
        bestScore,
        lastScore: score,
        attempts,
        totalTimeSec,
        lastTimeSec: durationSec,
        lastPlayedAt: nowIso
      };
    }

    state.progress.history.unshift({
      lessonId: lesson.id,
      grade: lesson.grade,
      subject: lesson.subject,
      title: lesson.title,
      score,
      total,
      durationSec,
      timestamp: nowIso
    });
    if (state.progress.history.length > 100) {
      state.progress.history = state.progress.history.slice(0, 100);
    }
    saveProgress();

    let emoji = "🌟";
    let message = "Con làm rất tốt! Tiếp tục phát huy nhé!";
    if (ratio === 1) {
      emoji = "🏆";
      message = "Xuất sắc 10/10! Con đã nắm trọn kiến thức bài này!";
    } else if (ratio < 0.5) {
      emoji = "💪";
      message = "Không sao đâu! Con hãy đọc lại phần Bài học trực quan rồi thử lại nhé.";
    }

    el.quizContainer.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <h3>Con đạt ${score} / ${total} câu đúng</h3>
        <p>${message}</p>
        <p style="font-size: 0.9rem; font-weight: 600;">
          ⏱ Thời gian làm bài: ${formatDuration(durationSec)} • Lần làm thứ ${attempts}
        </p>
        <div class="quiz-summary-actions">
          <button type="button" class="btn-secondary" id="btn-retry-quiz">🔄 Làm lại bài tập</button>
          <button type="button" class="btn-primary" id="btn-summary-home">📚 Chọn bài học khác</button>
        </div>
      </div>
    `;

    document.getElementById("btn-retry-quiz").addEventListener("click", () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = false;
      startQuizTimer();
      renderQuiz(lesson);
    });

    document.getElementById("btn-summary-home").addEventListener("click", showHomeView);
  }

  // ===== Parent Report Dashboard =====
  function showReportView() {
    stopQuizTimer();
    el.homeView.classList.add("hidden");
    el.lessonView.classList.add("hidden");
    el.reportView.classList.remove("hidden");
    renderReport();
    syncFromCloud(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderReport() {
    const filterGrade = state.reportGrade;
    el.reportFilterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.reportGrade === filterGrade);
    });

    const filteredLessons = lessons.filter(
      (l) => filterGrade === "all" || l.grade === filterGrade
    );
    const filteredHistory = state.progress.history.filter(
      (h) => filterGrade === "all" || h.grade === filterGrade
    );

    const doneLessons = filteredLessons.filter((l) => {
      const rec = state.progress.completed[l.id];
      return rec && rec.done;
    });

    const totalAttempts = filteredHistory.length;
    const totalTimeSec = filteredHistory.reduce((sum, h) => sum + (h.durationSec || 0), 0);
    const avgRatio =
      totalAttempts > 0
        ? Math.round(
            (filteredHistory.reduce((sum, h) => sum + h.score / (h.total || 1), 0) /
              totalAttempts) *
              100
          )
        : 0;

    el.reportStatsGrid.innerHTML = `
      <div class="report-stat-card">
        <div class="report-stat-label">Bài học đã hoàn thành</div>
        <div class="report-stat-value">${doneLessons.length} / ${filteredLessons.length}</div>
      </div>
      <div class="report-stat-card">
        <div class="report-stat-label">Tổng số lần làm bài</div>
        <div class="report-stat-value">${totalAttempts} lần</div>
      </div>
      <div class="report-stat-card">
        <div class="report-stat-label">Tổng thời gian làm bài</div>
        <div class="report-stat-value">${formatDuration(totalTimeSec)}</div>
      </div>
      <div class="report-stat-card">
        <div class="report-stat-label">Tỉ lệ trả lời đúng TB</div>
        <div class="report-stat-value">${avgRatio}%</div>
      </div>
    `;

    // Bảng thống kê theo từng bài học
    const rowsHtml = filteredLessons
      .map((l) => {
        const rec = state.progress.completed[l.id];
        const sub = getSubjectMeta(l.subject);
        if (!rec || !rec.done) {
          return `
            <tr>
              <td><strong>${escapeHtml(l.title)}</strong></td>
              <td>Lớp ${l.grade} • ${sub.icon} ${escapeHtml(sub.name)}</td>
              <td>0 lần</td>
              <td><span style="color: var(--text-muted);">Chưa làm</span></td>
              <td>—</td>
              <td>—</td>
            </tr>
          `;
        }
        return `
          <tr>
            <td><strong>${escapeHtml(l.title)}</strong></td>
            <td>Lớp ${l.grade} • ${sub.icon} ${escapeHtml(sub.name)}</td>
            <td><strong>${rec.attempts || 1} lần</strong></td>
            <td>Cao nhất: <strong>${rec.bestScore}/${l.quiz.length}</strong> (Gần nhất: ${rec.lastScore ?? rec.bestScore}/${l.quiz.length})</td>
            <td>${formatDuration(rec.lastTimeSec || 0)}</td>
            <td>${formatDateTime(rec.lastPlayedAt)}</td>
          </tr>
        `;
      })
      .join("");

    el.reportLessonsTable.innerHTML = `
      <table class="report-table">
        <thead>
          <tr>
            <th>Bài học</th>
            <th>Lớp / Môn</th>
            <th>Số lần làm</th>
            <th>Điểm số</th>
            <th>Thời gian gần nhất</th>
            <th>Lần làm cuối</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    `;

    // Danh sách lịch sử chi tiết
    if (filteredHistory.length === 0) {
      el.reportHistoryList.innerHTML = `
        <p style="color: var(--text-muted);">Chưa có lượt làm bài nào được ghi nhận ở mục này. Khi các con làm xong bài trắc nghiệm, kết quả sẽ tự động hiện ở đây.</p>
      `;
      return;
    }

    el.reportHistoryList.innerHTML = `
      <div class="history-list">
        ${filteredHistory
          .slice(0, 30)
          .map((item) => {
            const sub = getSubjectMeta(item.subject);
            const isGood = item.score / (item.total || 1) >= 0.75;
            return `
              <div class="history-item">
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <div class="history-item-meta">
                    Lớp ${item.grade} • ${sub.icon} ${escapeHtml(sub.name)} • ⏱ ${formatDuration(item.durationSec)} • 🕒 ${formatDateTime(item.timestamp)}
                  </div>
                </div>
                <span class="history-score-badge ${isGood ? "" : "low"}">
                  ${item.score}/${item.total} câu đúng
                </span>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // ===== Event Bindings =====
  el.btnGrade5.addEventListener("click", () => setGrade("5"));
  el.btnGrade7.addEventListener("click", () => setGrade("7"));
  el.btnHome.addEventListener("click", (e) => {
    e.preventDefault();
    showHomeView();
  });
  el.btnBackHome.addEventListener("click", showHomeView);
  el.btnOpenReport.addEventListener("click", showReportView);
  el.btnReportBack.addEventListener("click", showHomeView);

  el.reportFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.reportGrade = btn.dataset.reportGrade;
      renderReport();
    });
  });

  el.btnClearHistory.addEventListener("click", () => {
    if (confirm("Bạn có chắc muốn xóa toàn bộ nhật ký làm bài trên cả thiết bị này và trên Cloud không?")) {
      state.progress = { completed: {}, history: [] };
      saveLocalOnly();
      pushToCloud(true);
      renderReport();
      renderHeroAndProgress();
      renderLessonsGrid();
    }
  });

  const btnSyncNow = document.getElementById("btn-sync-now");
  if (btnSyncNow) {
    btnSyncNow.addEventListener("click", () => syncFromCloud(true));
  }

  window.addEventListener("focus", () => {
    syncFromCloud(false);
  });

  el.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderLessonsGrid();
  });

  el.statusFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.statusFilter = btn.dataset.status;
      renderLessonsGrid();
    });
  });

  el.btnRandomQuiz.addEventListener("click", startRandomQuiz);

  el.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  el.btnGoQuiz.addEventListener("click", () => switchTab("quiz"));

  // ===== Init =====
  setGrade("5");
  syncFromCloud(false);
})();
