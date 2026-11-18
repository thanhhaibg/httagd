import { getStore } from "@netlify/blobs";

export default async (req) => {
  try {
    const store = getStore("htta-kids-learning-store");

    if (req.method === "GET") {
      const cloudData = await store.get("shared-progress", { type: "json" });
      return Response.json({
        ok: true,
        data: cloudData || { completed: {}, history: [] }
      });
    }

    if (req.method === "POST") {
      const incoming = await req.json();

      // Hỗ trợ lệnh xóa lịch sử từ phụ huynh nếu gửi cờ clearAll: true
      if (incoming && incoming.clearAll === true) {
        const emptyState = { completed: {}, history: [], updatedAt: Date.now() };
        await store.setJSON("shared-progress", emptyState);
        return Response.json({ ok: true, data: emptyState });
      }

      const existing = (await store.get("shared-progress", { type: "json" })) || {
        completed: {},
        history: []
      };

      // 1. Gộp thông minh tiến độ từng bài học (completed) giữa iPad của con và Máy tính của bố mẹ
      const mergedCompleted = { ...(existing.completed || {}) };
      const incCompleted = incoming.completed || {};

      Object.keys(incCompleted).forEach((lessonId) => {
        const incRec = incCompleted[lessonId];
        const oldRec = mergedCompleted[lessonId];
        if (!oldRec) {
          mergedCompleted[lessonId] = incRec;
        } else {
          const isNewer =
            incRec.lastPlayedAt &&
            (!oldRec.lastPlayedAt || new Date(incRec.lastPlayedAt) >= new Date(oldRec.lastPlayedAt));

          mergedCompleted[lessonId] = {
            done: Boolean(oldRec.done || incRec.done),
            bestScore: Math.max(oldRec.bestScore || 0, incRec.bestScore || 0),
            lastScore: isNewer ? incRec.lastScore : oldRec.lastScore,
            attempts: Math.max(oldRec.attempts || 1, incRec.attempts || 1),
            totalTimeSec: Math.max(oldRec.totalTimeSec || 0, incRec.totalTimeSec || 0),
            lastTimeSec: isNewer ? incRec.lastTimeSec : oldRec.lastTimeSec,
            lastPlayedAt: isNewer ? incRec.lastPlayedAt : oldRec.lastPlayedAt
          };
        }
      });

      // 2. Gộp danh sách lịch sử làm bài (history) không bị trùng lặp
      const historyMap = new Map();
      [...(incoming.history || []), ...(existing.history || [])].forEach((item) => {
        if (item && item.timestamp && item.lessonId) {
          const key = `${item.lessonId}_${item.timestamp}`;
          if (!historyMap.has(key)) {
            historyMap.set(key, item);
          }
        }
      });

      const mergedHistory = Array.from(historyMap.values())
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 150);

      const mergedState = {
        completed: mergedCompleted,
        history: mergedHistory,
        updatedAt: Date.now()
      };

      await store.setJSON("shared-progress", mergedState);

      return Response.json({
        ok: true,
        data: mergedState
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  } catch (err) {
    return Response.json(
      { ok: false, error: err.message || "Cloud sync error" },
      { status: 500 }
    );
  }
};

export const config = {
  path: "/api/sync"
};
