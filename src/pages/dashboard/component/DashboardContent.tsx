import { useLocation } from "react-router-dom"
import { useStreamClient } from "../../../hooks/StreamHook"
import { UserModel } from "../../../model/UserModel"
import { LiveStream } from "./LiveStream"
import { LiveChat } from "./LiveChat"
import { StreamCall, StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk"
import { Chat } from "stream-chat-react"
import { StreamChat } from "stream-chat"

const DashBoardContent: React.FC = () => {
    let extras = useLocation()
    let user: UserModel = {
        name: extras.state.name,
        id: extras.state.id
    }
    const clients = useStreamClient(user)

    return (
        <>
            <StreamVideo client={clients.videoClient} >
                <Chat client={clients.chatClient}>
                    <div className="row vw-100">
                        <div className="col">
                            <LiveStream />
                        </div>
                        <div className="col">
                            <LiveChat />
                        </div>
                    </div>
                </Chat>
            </StreamVideo>
        </>
    )
}

export { DashBoardContent }