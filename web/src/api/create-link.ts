import { api } from "../libs/axios";

export interface CreateLinkBody {
    originalURL: string
    shortURL: string
}

export async function createLink({
    originalURL,
    shortURL
}: CreateLinkBody) {
    await api.post('/links', {
        originalURL,
        shortURL
    })
}