import { IconButton } from "./icon-button";
import { CopyIcon, TrashIcon } from "@phosphor-icons/react";

export interface LinkProps {
    shortURL: string
    originalURL: string
    accessCount: number
    handleDelete: (url: string) => void
    handleCopy: (shortUrl: string) => void
    onVisit: () => void
}

export function CustomLink({
    shortURL,
    originalURL,
    accessCount,
    handleDelete,
    handleCopy,
    onVisit
}: LinkProps){
    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 

        if (onVisit) {
            try {
                await onVisit(); 
            } catch (err) {
                console.error("Erro ao atualizar acessos:", err);
            }
        }

        window.open(`/${shortURL}`, '_blank');
    };

    return(
        <>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <a href={originalURL} onClick={handleClick} className="text-blue-base text-Text-md font-Text-md">{`brev.ly/${shortURL}`}</a>
                        <p className="text-gray-500 text-Text-sm font-Text-sm">{originalURL?.slice(8)}</p>
                    </div>

                    <div className="text-gray-500 text-Text-sm font-Text-sm flex">
                        <p className="flex items-center mr-[15px]">{`${accessCount} ${accessCount === 1 ? 'acesso' : 'acessos'} `}</p>

                        <div className="w-[67px] flex justify-between">
                            <IconButton
                                icon={CopyIcon}
                                onClick={() => handleCopy(shortURL)}
                            />

                            <IconButton
                                icon={TrashIcon}
                                onClick={() => handleDelete(shortURL)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />
        </>
    )
}