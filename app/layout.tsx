import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Durable Product Tracker — Track Product Longevity & Replacement Cycles',
  description: 'Personal dashboard tracking when durable products need replacement based on usage patterns. For homeowners and facility managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9527f0ef-b604-4e09-b9de-0680ab479d6c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
