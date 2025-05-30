import { api } from "../libs/axios";

export interface DeleteLinkBody {
    shortURL: string
}

export async function deleteLink({
    shortURL
}: DeleteLinkBody) {
    await api.delete('/links', {
        data: {
            shortURL
        }
    })
}