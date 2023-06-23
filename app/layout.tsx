import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './coponents/navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'โปรแกรมแสดงโปสเตอร์หนัง',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className=' m-20 justify-center align-middle text-center'>
          {children}
        </div>
          <footer className="flex flex-col items-center 
        justify-between p-24">พัฒนาโดย Copter</footer>
        </body>
    </html>
  )
}
