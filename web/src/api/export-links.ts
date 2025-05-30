import { api } from "../libs/axios";

export interface GetAllLinksResponse {
    reportUrl: string
}

export async function exportLinks() {
    const response = await api.post('/links/exports')
    return response.data
}