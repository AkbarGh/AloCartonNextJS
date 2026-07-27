import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import 'bootstrap/dist/css/bootstrap.min.css'; // اضافه کردن بوت‌استرپ

export const metadata: Metadata = {
  title: "عنوان سایت شما",
  description: "توضیحات سایت شما",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>خرید کارتن اسباب کشی در تهران | پرداخت در محل</title>
        <meta name="description" content="مرجع خرید کارتن اسباب کشی در تهران" />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="stylesheet" href="/css/bootstrap-reboot.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.rtl.min.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body className="font-shabnam">
        {/* اینجا محتوای قالب خودت رو قرار بده */}
        {children}
        
        {/* اگر نیاز به اسکریپت‌های بوت‌استرپ داری */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          async
        />
      </body>
    </html>
  );
}