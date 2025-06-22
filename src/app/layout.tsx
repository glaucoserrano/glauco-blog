import { Layout } from "@/components/layout"
import "@/styles/globals.css";

export const metadata = {
  title: 'Blog Pessoal',
  description: 'Blog Pessoal - Desenvolvido por: Glauco Serrano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">

      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
