import React from 'react'

interface Props {
    action: string
    children: React.ReactNode
}

export const Form = ({action, children}: Props) => {

    return (
        <form action={'action'} className="flex flex-col gap-spacing-lg bg-color-primary-500">
            {children}
        </form>
    )
}