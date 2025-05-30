import { type Icon } from '@phosphor-icons/react'
import type { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: Icon
}

export function IconButton({icon: Icon, ...rest}: IconButtonProps){
    return (
        <button
            className='w-[32px] h-[32px] rounded-md bg-gray-200 flex items-center justify-center'
            {...rest}
        >
            <Icon size={16} className='text-gray-600' />
        </button>
    )
}