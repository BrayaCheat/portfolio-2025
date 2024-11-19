import React from "react"

type LabelProps = {
    text: string,
    size: string
}

const Label: React.FC<LabelProps> = ({text, size}) => {
    return (
        <span className={`${size} pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10`}>
            {text}
        </span>
    )
}

export default Label