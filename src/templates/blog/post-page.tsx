import { Avatar } from "@/components/avatar";
import { AvatarDescription } from "@/components/avatar/avatar-description";
import { AvatarImage } from "@/components/avatar/avatar-image";
import { MarkdownPost } from "@/components/markdown";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { PostShare } from "./components/post-share";

export type PostPageProps = {
    post : Post
}

export const PostPage = ({ post }: PostPageProps ) =>{
    const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR')
    const postURL = `http://localhost:3000/blog/${post.slug}`

    return(
        <main className="py-20 text-gray-100">
            <div className="
                container space-y-8 px-4 md:px-8"
            >
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild className="text-action-sm">
                                <Link href="/blog">Blog</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span 
                                className="
                                text-blue-200 text-action-sm"
                            >
                                {post?.title}
                            </span>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid 
                    grid-cols-1 lg:grid-cols-[1fr_300px] 
                    gap-6 lg:gap-12"
                >
                    <article className="bg-gray-600 
                            rounded-lg overflow-hidden border-gray-400
                            border-[1px]"
                        >
                            <figure className="
                                relative 
                                aspect-[16/10]
                                w-full
                                overflow-hidden
                                rounded-lg"
                            >
                                <Image 
                                    src={post?.image ?? ""}
                                    alt={post?.title ?? ""}
                                    fill
                                    className="object-cover"
                                />
                            </figure>
                            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
                                <h1 className="
                                    mb-8 text-balance text-heading-lg 
                                    md:text-heading-xl lg:text-heading-xl"
                                >
                                    {post?.title}
                                </h1>
                                <Avatar.Container>
                                    <AvatarImage
                                        src={post?.author.avatar}
                                        alt={post?.author.name}
                                        size="sm"
                                    />
                                    <Avatar.Content>
                                        <Avatar.Title>
                                            {post?.author.name}
                                        </Avatar.Title>
                                        <AvatarDescription>
                                            Publicado em {' '}
                                            <time dateTime={post.date}>
                                                {publishedDate}
                                            </time>
                                        </AvatarDescription>
                                    </Avatar.Content>
                                </Avatar.Container>
                            </header>
                            <div className="
                                prose prose-invert max-w-none px-4 mt-3 
                                md:px-6 lg:px-12"
                            >
                                <MarkdownPost content={post.body.raw}/>
                            </div>
                    </article>
                    <PostShare
                        url={postURL}
                        title={post.title}
                        description= {post.description}
                    />
                </div>  
            </div>
        </main>
    )
}