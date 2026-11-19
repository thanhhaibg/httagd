export default async (req) => {
  try {
    const url = new URL(req.url);
    const text = (url.searchParams.get("q") || "").trim().slice(0, 200);
    const lang = (url.searchParams.get("lang") || "vi").trim();

    if (!text) {
      return new Response("Missing text", { status: 400 });
    }

    const ttsUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
      lang
    )}&q=${encodeURIComponent(text)}`;

    const upstream = await fetch(ttsUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
      }
    });

    if (!upstream.ok) {
      return new Response("TTS upstream error", { status: 502 });
    }

    const audioBuffer = await upstream.arrayBuffer();

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=604800, immutable"
      }
    });
  } catch (err) {
    return new Response(err.message || "TTS error", { status: 500 });
  }
};

export const config = {
  path: "/api/tts"
};
