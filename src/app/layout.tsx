import { Providers } from "@/shared/lib/providers/providers";
import { WorkSans } from "@/shared/lib/styles/fonts";
import "@/shared/lib/styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={WorkSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
