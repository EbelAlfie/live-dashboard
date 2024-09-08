import { LivestreamPlayer } from "@stream-io/video-react-sdk"

const LiveStream: React.FC = () => {
    return (
        <>
            <LivestreamPlayer callType="livestream" callId="call-id"/>
        </>
    )
}

export { LiveStream }