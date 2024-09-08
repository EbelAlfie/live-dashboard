import logo from "../logo.svg"

export function AppBar() {
    return (
        <>
            <div className="row m-5 bg-primary">
                <img src={logo} className="w-10 App-logo" alt="app logo"></img>
            </div>
        </>
    )
}