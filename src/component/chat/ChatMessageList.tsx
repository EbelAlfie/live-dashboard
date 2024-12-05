import { MessageInput, MessageList, MessageListContextProvider, StreamMessage, useChannelStateContext, Window } from "stream-chat-react"
import { BubbleMessage } from "./BubbleMessage"
import { useReducer } from "react"

const ChatMessageList: React.FC = () => {
    let channel = useChannelStateContext()

    let pinnedMessages = channel.pinnedMessages

    let pinState = pinnedMessages?.sort((a,b) => {
        return (b.pinned_at as Date).getMilliseconds() - (a.pinned_at as Date).getMilliseconds()
    })

    return (
        <>
            <Window>
                <MessageList />
                {pinState && pinState.length > 0 && 
                    <BubbleMessage message={pinState[0]} />
                }
                <MessageInput />
            </Window>
        </>
    ) 
}

export { ChatMessageList }