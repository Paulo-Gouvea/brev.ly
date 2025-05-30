import { Button } from "./button";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { WarningIcon } from '@phosphor-icons/react'
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLink } from "../api/create-link";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { type GetAllLinksResponse } from "../api/get-all-links";

const createLinkForm = z.object({
    originalURL: z.string().url(),
    shortURL: z.string(),
})

type CreateLinkForm = z.infer<typeof createLinkForm>

export function InputBox(){
    const queryClient = useQueryClient()

    const [isOriginalURLInputEmpty, setIsOriginalURLInputEmpty] = useState(true)
    const [isShortURLInputEmpty, setIsShortURLInputEmpty] = useState(true)

    const { register, handleSubmit } = useForm<CreateLinkForm>({
        defaultValues: {
            shortURL: "brev.ly/"
        }
    })

    const { mutateAsync: createLinkFn } = useMutation({
        mutationFn: createLink,
        onSuccess(_, {
            originalURL,
            shortURL
        }) {
            const cached = queryClient.getQueryData(['links']) as GetAllLinksResponse

            if (cached){ 
                const newLink = {
                    id: shortURL,
                    originalURL,
                    shortURL,
                    accessCount: 0,
                    createdAt: new Date()
                } as {
                    id: string
                    originalURL: string
                    shortURL: string
                    accessCount: number
                    createdAt: Date
                }

                queryClient.setQueryData(['links'], {
                    ...cached,
                    links: [...cached.links, newLink]
                })
            }
        }
    })

    async function handleCreateLink(data: CreateLinkForm){
        if(data.originalURL === '' || !data.originalURL.startsWith('https://') || !data.originalURL.includes('com')){
            setIsOriginalURLInputEmpty(false);
        } else {
            setIsOriginalURLInputEmpty(true);
        }

        if(data.shortURL === 'brev.ly/'){
            setIsShortURLInputEmpty(false);
        } else {
            setIsShortURLInputEmpty(true);
        }

        if(!isOriginalURLInputEmpty || !isShortURLInputEmpty) {
            return
        }

        const formattedShortURL = data.shortURL.slice(8)

        try {
            await createLinkFn({
            originalURL: data.originalURL,
            shortURL: formattedShortURL
        })
        } catch (err) {
            const error = err as AxiosError

            if(error.status === 409){
                toast.error('Erro no cadastro', {
                    description: 'Essa URL encurtada já existe.'
                })
            }
        }
    }

    return (
        <div className="w-[40%] h-[380px] rounded-md bg-white max-md:w-[100%] max-md:h-[316px] max-md:mb-[12px] max-md:p-[24px] p-[32px]">
            <h1 className="text-gray-600 text-Text-lg font-Text-lg">Novo link</h1>

            <form onSubmit={handleSubmit(handleCreateLink)}>
                <div className="max-md:w-[100%] max-md:h-[156px] max-md:my-[20px] my-[32px] flex flex-col justify-between">
                    <div>
                        <Input
                            title="LINK ORIGINAL"
                            placeholder="www.exemplo.com.br"
                            {...register('originalURL')}
                        />

                        {
                            !isOriginalURLInputEmpty && (
                                <div className="flex items-center mt-[5px]">
                                    <WarningIcon className="text-danger" />
                                    <p className="text-gray-500 text-Text-xs font-Text-xs ml-[7px]" >Informe uma url válida.</p>
                                </div>
                            )
                        }
                    </div>

                    <div className="mt-[8px]">
                        <Input
                            title="LINK ENCURTADO"
                            placeholder="brev.ly/"
                            {...register('shortURL')}
                        />

                        {
                            !isShortURLInputEmpty && (
                                <div className="flex items-center mt-[5px]">
                                    <WarningIcon className="text-danger" />
                                    <p className="text-gray-500 text-Text-xs font-Text-xs ml-[7px]" >Informe uma url minúscula e sem espaço/caracter especial.</p>
                                </div>  
                            )
                        }
                    </div>
                </div>

                <Button
                    title="Salvar link"
                />
            </form>
        </div>
    )
}