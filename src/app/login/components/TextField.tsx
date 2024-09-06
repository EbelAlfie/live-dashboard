import { ChangeEventHandler } from "react";

export default function TextField(value: string, onValueChanged: ChangeEventHandler<HTMLInputElement>) {
    return (
        <>
            <input className="form-controll" value={value} onChange={onValueChanged}></input>
        </>
    )
}