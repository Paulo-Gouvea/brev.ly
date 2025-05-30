import { api } from "../libs/axios";

export interface UpdateAccessCountBody {
    shortURL: string
}

export async function updateAccessCount({ shortURL }: UpdateAccessCountBody) {
  await api.patch(`/access_count`, undefined, {
    params: {
      shortURL,
    },
  });
}
