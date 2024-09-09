import { LivestreamPlayer } from "@stream-io/video-react-sdk"

type LiveVideoProps = {
    type: string,
    id: string
}

const LiveStream: React.FC<LiveVideoProps> = (props) => {
    return (
        <>
            <LivestreamPlayer callType={props.type} callId={props.id}/>
        </>
    )
}

export { LiveStream }