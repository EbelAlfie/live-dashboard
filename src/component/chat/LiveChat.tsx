import { Channel as ChatChannel } from "stream-chat" 
import { Channel, MessageInput, MessageList, VirtualizedMessageList, Window } from "stream-chat-react"
import { ChatMessageList } from "./ChatMessageList"

type LiveChatProp = {
    channel: ChatChannel
}

const LiveChat: React.FC<LiveChatProp> = (props) => {
    return (
        <>
            <Channel channel={props.channel}>
                <ChatMessageList />
            </Channel> 
        </>
    )
}

export { LiveChat }