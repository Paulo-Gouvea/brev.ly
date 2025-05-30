interface ButtonProps {
    title: string;
}

export function Button({title}: ButtonProps){
    return (
        <button type="submit" className="bg-blue-base hover:bg-blue-dark disabled:opacity-50 text-white w-[100%] h-[48px] rounded-md text-Text-md font-Text-md">{title}</button>
    )
}