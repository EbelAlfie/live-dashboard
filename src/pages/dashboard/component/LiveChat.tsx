import { Channel as ChatChannel } from "stream-chat" 
import { Channel, MessageInput, VirtualizedMessageList } from "stream-chat-react"

type LiveChatProp = {
    channel: ChatChannel
}

const LiveChat: React.FC<LiveChatProp> = (props) => {
    return (
        <>
            <Channel channel={props.channel}>
                <VirtualizedMessageList />
                <MessageInput />
            </Channel> 
        </>
    )
}

export { LiveChat }