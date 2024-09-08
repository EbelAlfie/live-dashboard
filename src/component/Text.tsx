import React from "react";

type HeaderProps = {
    text: string
} & React.HTMLAttributes<HTMLHeadingElement>


const HeaderText: React.FC<HeaderProps> = ({ text }) => {
    return (
       <h1>{text}</h1>
    )
}

const TitleText: React.FC<HeaderProps> = ({ text }) => {
    return (
        <h2>text</h2>
    )
}

export { HeaderText, TitleText }