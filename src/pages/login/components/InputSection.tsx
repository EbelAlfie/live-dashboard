import { Button, Col } from "react-bootstrap";
import TextField from "./TextField";
import { useState } from "react";

export default function InputSection() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Col>
                <TextField value={userName} onValueChanged={(arg: string) => {setUserName(arg)}}/>
                <TextField value={password} onValueChanged={(arg: string) => {setPassword(arg)}}/>

                <Button />
            </Col>
        </>
    )
} 