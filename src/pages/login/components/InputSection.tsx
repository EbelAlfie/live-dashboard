import { TextField } from "./TextField";
import { useState } from "react";

export default function InputSection() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
			<>
				<div className="col d-flex justify-content-center align-items-center">
						<form>
							<div className="row m-2">
								<TextField inputLabel="User Name" text={userName} onTextChange={(arg: string) => {setUserName(arg)}}/>
							</div>
							<div className="row m-2">
								<TextField inputLabel="Password" text={password} onTextChange={(arg: string) => {setPassword(arg)}}/>
							</div>
							<div className="row">
								<button className="btn btn-primary">Submit</button>
							</div>
						</form>
				</div>
			</>
    )
} 