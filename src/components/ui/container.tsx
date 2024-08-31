import { ComponentProps, FC } from 'react'

export const Container: FC<ComponentProps<'div'>> = ({ ...props }) => {
    return <div className='w-full h-screen grid place-items-center space-y-12 p-6' {...props} />
}