import { Channel, MessageInput, MessageList } from "stream-chat-react"

const LiveChat: React.FC = () => {
    return (
        <>
            <Channel>
                <MessageList />
                <MessageInput />
            </Channel> 
        </>
    )
}

export { LiveChat }