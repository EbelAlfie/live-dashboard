import { LivestreamLayout, useCall } from "@stream-io/video-react-sdk"
import { useEffect } from "react"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    //let callState = useCallStateHooks()

    //let remoteParticipants = callState.useRemoteParticipants()

    useEffect(() => {
        call?.join({create: true})

        return () => {
            call?.leave()
        }
    })

    return (
        <>
            <div className="container">
                <LivestreamLayout />
            </div>
        </>
    )
}

export { CustomLiveLayout }