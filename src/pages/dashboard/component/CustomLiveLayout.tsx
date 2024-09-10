import { LivestreamLayout, LivestreamLayoutProps, useCall } from "@stream-io/video-react-sdk"
import { useEffect } from "react"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    //let callState = useCallStateHooks()

    //let remoteParticipants = callState.useRemoteParticipants()

    useEffect(() => {
        call?.join({create: true})
        .then(result => {
            call?.camera.enable()
        })
        .catch(error => {
            console.log(`error ${error}`)
        })

        return () => {
            call?.leave()
        }
    })

    return (
        <>
            <div className="container">
                <LivestreamLayout showParticipantCount={false} showLiveBadge={false}/>
            </div>
        </>
    )
}

export { CustomLiveLayout }