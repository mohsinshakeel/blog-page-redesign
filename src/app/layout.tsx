
import '@/styles/globals.css';
import '@/styles/tailwind.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={''}>
          {children}
        </body>
    </html>
  );
}
