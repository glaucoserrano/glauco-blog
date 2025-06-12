import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownPostProps ={
    content: string,
}
export const MarkdownPost = ({content}: MarkdownPostProps) => {
    return (
        <Markdown
           remarkPlugins={[remarkGfm]}
           components={{
                h1:({children}) => (
                    <h1 className="
                        mb-4 text-heading-md md:text-heading-xl"
                    >
                        {children}
                    </h1>
                ),
                h2:({children}) => (
                    <h2 className="
                        mb-4 mt-2 text-heading-sm md:text-heading-lg"
                    >
                        {children}
                    </h2>
                ),
                strong:({children}) => (
                    <strong className="
                        font-extrabold text-gray-100"
                    >
                        {children}
                    </strong>
                ),
                p:({children}) => (
                    <p className="
                        mb-6 leading-relaxed text-gray-200"
                    >
                        {children}
                    </p>
                ),
                a:({children, href}) => (
                    <a 
                        href={href} 
                        className="text-blue-200 hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                ),
           }} 
        >
            {content}
        </Markdown>
    )
}