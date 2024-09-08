import React from "react"

interface TextFieldProp {
    inputLabel: string
    text: string
    onTextChange: ((arg: string) => void)
}

const TextField: React.FC<TextFieldProp> = ({inputLabel, text, onTextChange}) => {
    return (
        <div className="form">
            <label className="form-label">{inputLabel}</label>
            <input id="form" className="form-control" value={text} onChange={val => {onTextChange(val.target.value)}}></input>
        </div>
     ) 
} 

export { TextField } 