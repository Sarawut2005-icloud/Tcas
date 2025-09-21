import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <nav className="p-4 bg-gray-200 flex space-x-4">
          {/* แทน <a> ด้วย <Link> */}
          <Link href="/" className="text-blue-600">หน้าแรก</Link>
          <Link href="/admin" className="text-blue-600">Admin</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
