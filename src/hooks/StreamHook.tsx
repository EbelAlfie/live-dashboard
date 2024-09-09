import { Channel, StreamChat, UserResponse } from "stream-chat"
import { UserModel } from "../model/UserModel"
import { Call, StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

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
    
    let chatClient = StreamChat.getInstance(apiKey)

    let videoClient = StreamVideoClient.getOrCreateInstance({
        apiKey: apiKey,
        token: token,
        user: videoUser
    })

    let [chat, setChat] = useState<Channel|null>(null)
    let [call, setCall] = useState<Call|null>(null)

    const type = "livestream"
    const id = "test-live"

    useEffect(() => {
        const createChatRoom = () => {
            let channel = chatClient.channel(type, id)
            setChat(channel)
        }

        chatClient.connectUser(chatUser, token)
        .catch((e) => {
            console.error(`erorr ${e}`)
            createChatRoom()
        })
        return () => {
            chatClient.disconnectUser() 
            setChat(null)
        }
    }, [chatClient])

    useEffect(() => {
        let videoCall = videoClient.call(type, id)
        videoCall.create()
        .then(result => {
            setCall(videoCall)
        }) 
        return () => {
            call?.endCall()
            setCall(null)
        }
    }, [videoClient])
    return { chatClient, videoClient, chat, call }
}