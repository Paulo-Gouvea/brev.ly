import { api } from "../libs/axios";

export interface GetAllLinksResponse {
    links: {
        id: string
        originalURL: string
        shortURL: string
        accessCount: number
        createdAt: Date
    }[]
}

export async function getAllLinks() {
    const response = await api.get<GetAllLinksResponse>('/links')

    return response.data
}