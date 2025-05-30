import { api } from "../libs/axios";

export interface GetOriginalUrlBody {
    shortURL: string
}

export interface GetOriginalUrlResponse {
    originalURL: string | undefined
}

export async function getOriginalUrl({ shortURL }: GetOriginalUrlBody) {
    if (!shortURL) {
        throw new Error("Parâmetro 'shortURL' não fornecido.");
    }

  const response = await api.get<GetOriginalUrlResponse>('/original_url', {
    params: {
        shortURL,
    }
  })

  return response.data
}
