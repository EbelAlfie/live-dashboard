import { useLocation } from "react-router-dom"
import { useStreamClient } from "../../../hooks/StreamHook"
import { UserModel } from "../../../model/UserModel"
import { LiveStream } from "./LiveStream"
import { LiveChat } from "./LiveChat"

const DashBoardContent: React.FC = () => {
    let extras = useLocation()
    let user: UserModel = {
        name: extras.state.name,
        id: extras.state.id
    }
    let chat, video = useStreamClient(user)

    if (!chat) return null

    return (
        <>
            <div className="row vw-100">
                <div className="col">
                    <LiveStream />
                </div>
                <div className="col">
                    <LiveChat />
                </div>
            </div>
        </>
    )
}

export { DashBoardContent }