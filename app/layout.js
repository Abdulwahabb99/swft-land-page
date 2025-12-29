import './globals.css'

export const metadata = {
  title: 'Swft',
  description: 'Swft is a company for a cash flow management system',
  icons: {
    icon: '/assets/logoShort.svg',
    shortcut: '/assets/logoShort.svg',
    apple: '/assets/logoShort.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

