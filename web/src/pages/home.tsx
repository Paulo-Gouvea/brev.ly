import { Content } from "../components/content";
import Logo from "../assets/logomarca.svg"

export function Home() {
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center max-md:items-start">
            <div className="w-[72%] max-md:flex max-md:flex-col max-md:w-[90%] max-md:justify-center max-md:items-center max-md:pt-[32px]">
                <header className="mb-[32px] max-md:flex max-md:justify-center max-md:w-[96px] max-md:h-[24px]">
                    <img src={Logo}  />
                </header>
                <Content /> 
            </div>
        </div>
    )
}