import logo from "../../logo.svg"
import { HeaderText } from "../Text"

export function AppBar() {
    return (
        <>
			<header className="navbar row fixed-top pt-2 pb-2 app-bar">
				<div className="col-sm-auto">
					<img src={logo} className="App-logo" alt="app logo" />
				</div>
				<div className="col-sm">
					<HeaderText text="Live Dashboard" />
				</div>
			</header>
        </>
    )
}