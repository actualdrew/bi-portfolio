export const metadata = {
  title: "Andrew | Data & BI Portfolio",
  description: "Power BI, Data Engineering, and Analytics Portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <nav className="border-b border-neutral-800 px-6 py-4">
          <div className="max-w-5xl mx-auto flex justify-between">
            <h1 className="font-semibold tracking-tight">Andrew</h1>
            <div className="space-x-6 text-sm">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/projects" className="hover:text-blue-400">Projects</a>
              <a href="/about" className="hover:text-blue-400">About</a>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
