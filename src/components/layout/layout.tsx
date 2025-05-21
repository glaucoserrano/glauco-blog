import { Inter } from "next/font/google"
import { Footer } from "../footer"
import { Header } from "../header"

type LayoutProps = {
    children: React.ReactNode
}
const inter = Inter( {
    subsets: ['latin'],
})
export const Layout = ({children} :LayoutProps) => {
    return (
        <div className={`relative 
            flex 
            flex-col 
            min-h-screen 
            ${inter.className}
            bg-gray-700`}
        >
            <Header />
            <main className="flex-1 flex-col mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}