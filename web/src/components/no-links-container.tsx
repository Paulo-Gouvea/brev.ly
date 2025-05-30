import { LinkIcon } from "@phosphor-icons/react"

export function NoLinksContainer(){
    return(
        <div className="w-[100%] h-[102px] flex flex-col items-center justify-center">
            <LinkIcon size={32} className="text-gray-400" />

            <p className="text-gray-500 text-Text-xs font-Text-xs mt-[12px]">AINDA NÃO EXISTEM LINKS CADASTRADOS</p>
        </div>
    )
}