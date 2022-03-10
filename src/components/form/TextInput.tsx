import React, { useState } from 'react'

interface Props {
    label: string
    defaultValue?: string
    password?: boolean
}

export const TextInput = ({label, defaultValue ='', password = false}: Props) => {
    
    const [fieldValue, setFieldValue] = useState(defaultValue)
    
    return (
        <div className="flex flex-col gap-spacing-100">
            <label>{label}</label>
            <input className="px-300 py-200 bg-neutral-100 border border-neutral-500 rounded-round" type={ password ? 'password' : 'text'}onChange={ e => setFieldValue(e.target.value)} value={fieldValue} />
        </div>
    )
}