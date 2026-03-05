import "./styles/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Приглашение на свадьбу",
  description: "Дата, место и анкета гостя",
  openGraph: {
    title: "Приглашение на свадьбу",
    description: "Дата, место и анкета гостя",
    url: "https://wedding-nikita-vika.vercel.app/",
    siteName: "Свадебное приглашение",
    images: [
      {
        url: "logo/og-image.jpg.png",
        width: 1200,
        height: 630,
        alt: "Приглашение на свадьбу",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Приглашение на свадьбу",
    description: "Дата, место и анкета гостя",
    images: ["logo/og-image.jpg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
