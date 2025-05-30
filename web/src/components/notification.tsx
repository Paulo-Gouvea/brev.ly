import type React from 'react'

interface NotificationProps {
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    message: React.ReactNode;
}

export function Notification({
    imageSrc,
    imageWidth,
    imageHeight,
    title,
    message
}: NotificationProps){
    return (
        <div className="bg-white w-[580px] rounded-md py-[64px] flex flex-col items-center justify-center max-md:w-[366px] max-md:px-[20px]">
            <img src={imageSrc} width={imageWidth} height={imageHeight} alt="" />
            <h1 className="text-gray-600 pt-[24px] pb-[24px] text-Text-xl font-Text-xl">{title}</h1>
            <p className='text-gray-500 text-Text-md font-Text-md text-center whitespace-pre-line'>
                {message}
            </p>
        </div>
    )
}