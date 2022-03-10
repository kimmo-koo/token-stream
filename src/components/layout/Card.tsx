interface Props {
    children: React.ReactNode
}

export const Card = ({children}: Props) => {

    return (
        <div className="px-500 py-500 border border-neutral-500 rounded-round flex flex-col gap-400 justify-center">
            {children}
        </div>
    )
}