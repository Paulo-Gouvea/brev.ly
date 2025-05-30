import { DownloadSimpleIcon } from "@phosphor-icons/react"
import type { ButtonHTMLAttributes } from "react"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ExportCsvButton({ ...rest }: IconButtonProps){
    return (
        <button {...rest} 
        className="w-[92px] h-[32px] p-[8px] bg-gray-200 rounded-md flex items-center justify-between disabled:opacity-50 hover:border-[1px] hover:border-solid hover:border-blue-base">
            <DownloadSimpleIcon />

            <p className="text-gray-500 text-Text-sm font-Text-sm">Baixar CSV</p>
        </button>
    )
}