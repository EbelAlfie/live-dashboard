import { Channel, StreamChat, UserResponse } from "stream-chat"
import { UserModel } from "../model/UserModel"
import { Call, CallingState, StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

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

    let [chat, setChat] = useState<Channel>()
    let [call, setCall] = useState<Call>()

    const type = "livestream"
    const id = "test-live"

    useEffect(() => {
        const createChatRoom = async () => {
            let channel = chatClient.channel(type, id)
            channel.create()
            .then(result => {
                setChat(channel)
            }).catch(error => {
                console.log(error)
            })
        }
        chatClient.connectUser(chatUser, token)
        .then(result => {
            console.log("SUCCESSSS")
            createChatRoom()
        })
        .catch((e) => {
            console.error(`erorr ${e}`)
            setChat(undefined)
        })

        return () => {
            setChat(undefined) 
        }
    }, [chatClient])

    useEffect(() => {
        let videoCall = videoClient.call(type, id)
        videoCall.create()
            .then(result => {
                setCall(videoCall)
            }).catch(error => {
                setCall(undefined)
            }) 

            return () => {
                if (call?.state.callingState !== CallingState.LEFT) {
                    call?.leave()
                    setCall(undefined)
                }
            }
    }, [videoClient])
    
    return { chatClient, videoClient, chat, call }
}