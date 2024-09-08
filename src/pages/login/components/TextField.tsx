import React from "react"

interface TextFieldProp {
    text: string
    onTextChange: ((arg: string) => void)
}

const TextField: React.FC<TextFieldProp> = ({text, onTextChange}) => {
    return (
        <input value={text} onChange={val => {onTextChange(val.target.value)}}></input>
     ) 
} 

export { TextField } 