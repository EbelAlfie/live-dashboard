import { AppBar } from "../../component/AppBar";
import InputSection from "./components/InputSection";
import { WelcomeBanner } from "./components/MiscDesc";

function LoginContent() {
    return (
        <div className="row">
            <InputSection />
            <WelcomeBanner />
        </div>
    )
}

export default function LoginScreen() {

    return (
        <>
            <div className="col">
                <AppBar />
                <LoginContent />
            </div>
        </>
    )
}