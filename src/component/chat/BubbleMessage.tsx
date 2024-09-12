import React from "react"
import { DefaultStreamChatGenerics, MessageText, StreamMessage } from "stream-chat-react"

type BubbleMessageProp = {
    message: StreamMessage<DefaultStreamChatGenerics>
}

const BubbleMessage: React.FC<BubbleMessageProp> = (props) => {
    return (
        <>
        <MessageText message={props.message}/>
            {/* <span className="pinned-message p-2" data-message-id={props.message.id}>{props.message.text}</span> */}
        </>
    )
}

export { BubbleMessage }