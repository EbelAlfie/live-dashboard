import { TextField } from "./TextField";
import { useState } from "react";

export default function InputSection() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
			<>
				<div className="container d-flex justify-content-center align-items-center vh-100">
					<div className="col">
						<form>
							<div className="row m-4">
								<TextField text={userName} onTextChange={(arg: string) => {setUserName(arg)}}/>
							</div>
							<div className="row m-4">
								<TextField text={password} onTextChange={(arg: string) => {setPassword(arg)}}/>
							</div>
							<div className="row">
								<button className="btn btn-primary">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</>
    )
} 