import { InputBox } from "./input-box";
import { LinkBox } from "./link-box";

export function Content(){
    return (
        <div className="w-[100%] flex flex-row justify-between max-md:flex max-md:flex-col">
            <InputBox />
            <LinkBox />
        </div>
    )
}