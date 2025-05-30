import { Notification } from "../components/notification";
import Logo from '../assets/icon.svg';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getOriginalUrl } from "../api/get-original-url";

export function Redirect() {
  const { tipo } = useParams() as { tipo: string }; 

  const {
    data: originalURL,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["originalURL", tipo],
    queryFn: () => getOriginalUrl({ shortURL: tipo }),
    enabled: !!tipo,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && originalURL) {
      const timeout = setTimeout(() => {
        window.location.href = originalURL.originalURL as string;
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess, originalURL]);

  if (isError) {
    return <div>URL não encontrada</div>;
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Notification
        imageSrc={Logo}
        imageWidth={48}
        imageHeight={48}
        title={"Redirecionando..."}
        message={
          <>
            O link será aberto automaticamente em alguns instantes.
            <br />
            Não foi redirecionado?{" "}
            <span className="text-blue-base">
              <Link to={`${originalURL?.originalURL}`}>Acesse aqui</Link>
            </span>
          </>
        }
      />
    </div>
  );
}
