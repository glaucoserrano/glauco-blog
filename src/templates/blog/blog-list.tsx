import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-car";
import { PostGridCard } from "./components/post-grid";

export function BlogList(){
    const router = useRouter()
    const query = router.query.q as string
    const pageTitle = query ? `Resultados de buscas para "${query}"` : 'Dicas e estratégias para impulsionar seu negócio'
    return(
        <div className="
            flex flex-col py-24 
            flex-grow h-full" 
        >
            <header className="pb-14">
                <div className="
                    container space-y-6
                    flex flex-col items-start justify-between
                    md:flex-row md:items-end lg:items-end"
                >   
                    <div className="
                        flex flex-col 
                        gap-4 px-4 md:px-0"
                    >
                        <span className="
                            text-body-tag 
                            text-cyan-100
                            w-fit rounded-md text-center
                            md:text-left py-2 
                            bg-cyan-300"
                        >
                            BLOG
                        </span>
                        <h1 className="text-balance 
                            text-start md:text-left
                            text-heading-lg md:text-heading-xl
                            max-w-2xl text-gray-100"
                        >
                            {pageTitle}
                        </h1>
                    </div>
                    <Search />
                </div>
            </header>
            <PostGridCard>
                <PostCard 
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando um maneira simples e 
                        eficaz de vender seus produtos online, o Site.Set..."
                    date="07/06/205"
                    image="/assets/primeiro-post.png"
                    slug="/transformando-seu-negocio"
                    author={{
                        avatar:"/custumer01.png",
                        name:"Avril Lavigne"
                    }}
                />
                <PostCard 
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando um maneira simples e 
                        eficaz de vender seus produtos online, o Site.Set..."
                    date="07/06/205"
                    image="/assets/primeiro-post.png"
                    slug="/transformando-seu-negocio"
                    author={{
                        avatar:"/custumer01.png",
                        name:"Avril Lavigne"
                    }}
                />
                <PostCard 
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando um maneira simples e 
                        eficaz de vender seus produtos online, o Site.Set..."
                    date="07/06/205"
                    image="/assets/primeiro-post.png"
                    slug="/transformando-seu-negocio"
                    author={{
                        avatar:"/custumer01.png",
                        name:"Avril Lavigne"
                    }}
                />
                <PostCard 
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando um maneira simples e 
                        eficaz de vender seus produtos online, o Site.Set..."
                    date="07/06/205"
                    image="/assets/primeiro-post.png"
                    slug="/transformando-seu-negocio"
                    author={{
                        avatar:"/custumer01.png",
                        name:"Avril Lavigne"
                    }}
                />

            </PostGridCard>
        </div>
    )
}