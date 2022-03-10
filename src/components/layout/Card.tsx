interface Props {
    children: React.ReactNode
}

export const Card = ({children}: Props) => {

    return (
        <div className="px-500 py-500 rounded-round shadow-2xl flex flex-col gap-400 justify-center">
            {children}
        </div>
    )
}