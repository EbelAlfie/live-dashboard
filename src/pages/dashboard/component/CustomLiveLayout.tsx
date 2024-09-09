import { LivestreamLayout, useCall, useCallStateHooks } from "@stream-io/video-react-sdk"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    let callState = useCallStateHooks()

    let remoteParticipants = callState.useRemoteParticipants()

    return (
        <>
            <div className="container">
                <LivestreamLayout />
            </div>
        </>
    )
}

export { CustomLiveLayout }