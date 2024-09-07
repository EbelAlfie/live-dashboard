import { ChangeEventHandler } from "react";

export default function TextField(value: string, onValueChanged: ((arg: string) => null)) {
    return (
        <>
            <input value={value} onChange={val => {onValueChanged(val.target.value)}}></input>
        </>
    )
}