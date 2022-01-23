import React, { useContext } from "react"

interface Props {
    label: string
}

export const Button = ({ label }: Props) => {

    return (
        <button className="bg-color-cta-background-primary-default text-color-cta-text-primary-default rounded-default py-md px-lg ">{label}</button>
    )
}