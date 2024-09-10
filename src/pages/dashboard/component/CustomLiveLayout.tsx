import { LivestreamLayout, useCall, useCallStateHooks, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect } from "react"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    let client = useStreamVideoClient()
    
    let callState = useCallStateHooks()

    let ingress = callState.useCallIngress()

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
            call?.endCall()
        }
    }, [])

    console.log(ingress?.rtmp.address)
    console.log(client?.streamClient.tokenManager.getToken())

    return (
        <>
            <div className="col container login-page">
                <div className="row">
                    <LivestreamLayout showParticipantCount={false} showLiveBadge={false}/>
                </div>
                <div className="row">
                    <h1>{ingress && ingress.rtmp.address}</h1>
                </div>
                <div className="row">
                    <h1>{client && client.streamClient.tokenManager.getToken()}</h1>
                </div>
            </div>
        </>
    )
}

export { CustomLiveLayout }