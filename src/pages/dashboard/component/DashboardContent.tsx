import { useLocation } from "react-router-dom"
import { UserResponse } from "stream-chat"
import { useCreateChatClient } from "stream-chat-react"
import { DashboardArgs } from "../Model"

const DashBoardContent: React.FC = () => {
    let data = useLocation()
    let userData: DashboardArgs = data.state
    
    let chatUser: UserResponse = {
        id: userData.name,
        username: userData.name
    }
    let apiKey: string = process.env.REACT_APP_STREAM_KEY || ""
    
    let chatClient = useCreateChatClient({
        apiKey: apiKey,
        tokenOrProvider: null,
        userData: chatUser
    })

    return (
        <>

        </>
    )
}

export { DashBoardContent }