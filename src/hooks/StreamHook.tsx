import { useLocation } from "react-router-dom"
import { UserResponse } from "stream-chat"
import { useCreateChatClient } from "stream-chat-react"
import { StreamVideo, StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"
import { UserModel } from "../model/UserModel"

const useStreamClient = (userData: UserModel) => {
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

    let videoUser: UserRequest = {
        id: userData.name,
        name: userData.name
    }
    let videoClient = new StreamVideoClient({
        apiKey: apiKey,
        user: videoUser,
    })

    return { chatClient, videoClient }
}

export { useStreamClient }