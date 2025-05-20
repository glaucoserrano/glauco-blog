import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className= "border-t  border-white/10">
            <div className="mx-auto max-w-7xl px-4
                sm:px-6 lg:px-8"
            >
                <div className="
                    flex justify-between md:flex-row 
                    gap-8
                    py-8"
                >
                    <Link href="/" >
                        <Image 
                            src="/logo.svg"
                            alt="Logo site"
                            width={116}
                            height={32}
                        />
                    </Link>

                    <nav className="flex flex-col md:flex-row items-center gap-4
                        text-sm text-muted-foreground">
                        <Link href="/termo-de-uso" className="hover:text-primary">Termos de Uso</Link>
                        <Link href="/pilitica-privacidade" className="hover:text-primary">Políticas de Privacidade</Link>
                        <Link href="/feedback" className="hover:text-primary">Enviar feedback</Link>
                    </nav>
                </div>
            </div>

        </footer>
    )
}