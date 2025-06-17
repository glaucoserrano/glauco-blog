import { useCallback, useEffect, useState } from "react"

type useClipboardProps = {
    timeout?: number
}


export const useClipboard = ({timeout=2000 }: useClipboardProps) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = useCallback(async (text : string) =>{
        if(!navigator.clipboard){
            console.error("Clipboard API not supported")
            return false
        }
        try{
            await navigator.clipboard.writeText(text)
            setIsCopied(true)
        }catch(error){
            console.error("Failed to copy text: ", error)
            setIsCopied(false)
            return false
        }
    },[])
    useEffect(()=>{
        if(isCopied){
           const timer = setTimeout(() => {
                setIsCopied(false)
            }, timeout) 
            return () => clearTimeout(timer)
        }
    },[isCopied, timeout])

    return {
        handleCopy,
        isCopied
    }
}