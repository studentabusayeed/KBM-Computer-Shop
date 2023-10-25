import Navbar from '@/components/nav-utils/Navbar'
import './globals.css'
import { Providers } from '@/app/providers'
import SubNavbar from '@/components/nav-utils/SubNavbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-all">
      <body>
        <div className="min-h-screen">
          <Navbar />
          <SubNavbar />
          <main className={`mt-16`}>
            <Providers>
              {children}
            </Providers>
          </main>
          <div>footer</div>
        </div>
      </body>
    </html>
  )
}
