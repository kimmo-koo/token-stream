import React from 'react'

interface Props {
    label: string
}

export const TextField = ({label}: Props) => {
 
    return (
        <div className="flex flex-col gap-spacing-lg">
            <label>{label}</label>
            <input className="px-md py-sm bg-color-inputfield-background-default border border-color-inputfield-border-default rounded-default" type="text" />
        </div>
    )
}