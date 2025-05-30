import { Notification } from "../components/notification";
import Error from '../assets/404.svg'
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Notification
                imageSrc={Error}
                imageWidth={194}
                imageHeight={85}
                title={"Link não encontrado"}
                message={
                    <>
                        O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em <span className='text-blue-base'><Link to="/">brev.ly.</Link></span>
                    </>
                }
            />
        </div>
    )
}