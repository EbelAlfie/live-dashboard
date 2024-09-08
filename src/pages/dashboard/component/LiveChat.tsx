import { MessageInput, MessageList } from "stream-chat-react"

const LiveChat: React.FC = () => {
    return (
        <>
            <MessageList />
            <MessageInput />
        </>
    )
}

export { LiveChat }