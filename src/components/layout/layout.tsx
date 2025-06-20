import { Inter, PT_Sans_Caption } from "next/font/google"
import { Footer } from "./footer"
import { Header } from "./header"
import { CallToAction } from "@/templates/landing-page/sections"

type LayoutProps = {
    children: React.ReactNode
}
const inter = Inter( {
    subsets: ['latin'],
    weight:['400','500'],
    variable: '--font-inter',
})
const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-sans',
})
export const Layout = ({children} :LayoutProps) => {
    return (
        <div className={`relative 
            flex 
            flex-col 
            min-h-screen 
            ${inter.className}
            ${ptSansCaption.className}
            bg-gray-700 font-inter`}
        >
            <Header />
            <main className="flex-1 flex-col mt-10 mb-12">
                {children}
            </main>
            <CallToAction />
            <Footer />
        </div>
    )
}