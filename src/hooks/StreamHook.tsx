import { Channel, StreamChat, UserResponse } from "stream-chat"
import { UserModel } from "../model/UserModel"
import { Call, StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"
import { useEffect } from "react"

type Loading = "loading"
type Ready = {
    chatClient: StreamChat,
    videoClient: StreamVideoClient,
    chat: Channel,
    call: Call
}
type Failed = "failed"

export const useStreamClient = (user: UserModel) => {
    let chatUser: UserResponse = {
        id: user.id,
        username: user.name
    }
    let videoUser: UserRequest = {
        id: user.name,
        name: user.name
    }

    let apiKey: string = process.env.REACT_APP_STREAM_KEY || ""
    let token: string = process.env.REACT_APP_CACING_TOKEN || ""
    
    let chatClient = new StreamChat(apiKey)

    let videoClient = StreamVideoClient.getOrCreateInstance({
        apiKey: apiKey,
        token: token,
        user: videoUser
    })

    const type = "livestream"
    const id = "test-live"

    useEffect(() => {
        chatClient.connectUser(chatUser, token)
        .catch((e) => {
            console.error(`erorr ${e}`);
        })
    }, [chatClient])

    // useEffect(() => {
    //     if (chatClient == null) return
    //     console.log("chat client init")

    //     setChat(chatClient.channel(type, id))

    // }, [chatClient])

    // useEffect(() => {
    //     if (videoClient == null) return
    //     console.log("video client init")

    //     setCall(videoClient.call(type, id))

    // }, [videoClient])

    return { chatClient, videoClient }
}