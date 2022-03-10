import React from 'react'

export enum CTASizes {
    sm,
    md,
    lg
}

export enum CTATypes {
    primary,
    secondary
}

interface Props {
    label: string
    type: CTATypes
    size: CTASizes
}

export const CTA = ({ label, type = CTATypes.primary, size = CTASizes.lg }: Props) => {

    return (
        <button className={`bg-primary-500 text-basic-white px-500 py-300 rounded-round hover:text-basic-white hover:bg-primary-100`}>
            {label}
        </button>
    )
}