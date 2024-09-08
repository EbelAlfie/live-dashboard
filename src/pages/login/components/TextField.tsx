import React from "react"

interface TextFieldProp extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputLabel: string
    text: string
    onTextChange: ((arg: string) => void)
}

const TextField: React.FC<TextFieldProp> = ({inputLabel, text, onTextChange}) => {
    return (
        <div className="form">
            <label className="form-label" htmlFor="form">{inputLabel}</label>
            <input id="form" className="form-control" value={text} onChange={val => {onTextChange(val.target.value)}}></input>
        </div>
     ) 
} 

export { TextField } 