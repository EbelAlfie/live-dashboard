import { useLocation } from "react-router-dom"
import { useStreamClient } from "../../../hooks/StreamHook"
import { UserModel } from "../../../model/UserModel"
import { LiveChat } from "./LiveChat"
import { StreamVideo } from "@stream-io/video-react-sdk"
import { Chat, CustomClasses } from "stream-chat-react"
import { LiveStream } from "./LiveStream"

const DashBoardContent: React.FC = () => {
    let extras = useLocation()
    let user: UserModel = {
        name: extras.state.name,
        id: extras.state.id
    }

    let { chatClient, videoClient, chat, call } = useStreamClient(user)

    return (
        <>
            <StreamVideo client={videoClient}>
                <Chat client={chatClient}>
                    <div className="row">
                        <div className="col-sm-auto">
                            {call &&
                                <LiveStream call={call}/>
                            }
                        </div>
                        <div className="col-sm-auto">
                            {chat &&
                                <LiveChat channel={chat}/>
                            }
                        </div>
                    </div>
                </Chat>
            </StreamVideo>
        </>
    )
}

export { DashBoardContent }