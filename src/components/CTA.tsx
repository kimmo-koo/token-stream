import React from 'react'

interface Props {
    label: string
    type?: string
    size?: string
}

export const CTASizes:any = {
    sm: "py-200 px-400 text-100",
    md: 'py-300 px-500 text-200',
    lg: "py-400 px-600 text-300"
}

export const CTATypes:any = {
    'primary': 'bg-primary-500 text-basic-white rounded-round',
    'secondary': 'bg-basic-white border-2 border-primary-500 text-primary-500 rounded-round'
}

export const CTA = ({ label, type = 'primary', size = 'lg' }: Props) => {

    const sizeClassNames = CTASizes[size]
    const typeClassNames = CTATypes[type]

    return (
        <button className={`${sizeClassNames} ${typeClassNames}`}>{label}</button>
    )
}