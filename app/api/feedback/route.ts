import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const message = `
📋 Новая анкета гостя:

👤 ФИО: ${data.fullName}
✅ Присутствие: ${data.attendance}
🥂 Предпочитаемый алкоголь: ${data.alcohol}
⚠️ Пищевая аллергия: ${data.allergy || "Нет"}
    `;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка отправки в Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Ошибка сервера" },
      { status: 500 },
    );
  }
}
