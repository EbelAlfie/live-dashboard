import { useLocation } from "react-router-dom"
import { useStreamClient } from "../../../hooks/StreamHook"
import { UserModel } from "../../../model/UserModel"
import { LiveChat } from "./LiveChat"
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk"
import { Chat } from "stream-chat-react"
import { LiveStream } from "./LiveStream"

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
                            <LiveStream type={"livestream"} id={"test-live"}/>a
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