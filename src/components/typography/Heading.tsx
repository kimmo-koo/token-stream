interface Props {
    children: React.ReactNode
    level?: number
}

export const Heading = ({children, level = 1}: Props) => {

    return (
        <h3 className={`w-full justify-center text-center ${ (level===3) ? 'text-300' : (level===2) ? 'text-400' : 'text-500'} font-bold`}>{children}</h3>
    ) 
}