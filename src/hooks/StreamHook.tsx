import { UserResponse } from "stream-chat"
import { useCreateChatClient } from "stream-chat-react"
import { UserModel } from "../model/UserModel"
import { StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"

const useStreamClient = (user: UserModel) => {
    let chatUser: UserResponse = {
        id: user.id,
        username: user.name
    }
    let apiKey: string = process.env.REACT_APP_STREAM_KEY || ""
    let token: string = process.env.REACT_APP_CACING_TOKEN || ""

    let chatClient = useCreateChatClient({
        apiKey: apiKey,
        tokenOrProvider: token,
        userData: chatUser
    })

    let videoUser: UserRequest = {
        id: user.name,
        name: user.name
    }
    let videoClient = StreamVideoClient.getOrCreateInstance({
        apiKey: apiKey,
        token: token,
        user: videoUser
    })

    return { chatClient, videoClient }
}

export { useStreamClient }