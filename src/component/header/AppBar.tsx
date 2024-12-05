import logo from "../../logo.svg"
import { HeaderText } from "../Text"

export function AppBar() {
    return (
        <>
			<header className="row row-cols-2 navbar fixed-top align-items-start app-bar">
				<div className="col-sm-auto">
					<img src={logo} className="App-logo navbar-brand" alt="app logo" />
				</div>
				<div className="col-sm-auto align-self-center">
					<HeaderText text="Live Dashboard" />
				</div>
			</header>
        </>
    )
}