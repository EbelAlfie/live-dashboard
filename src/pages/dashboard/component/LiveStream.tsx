import { Call, LivestreamLayout, LivestreamLayoutProps, LivestreamPlayer, StreamCall, StreamTheme } from "@stream-io/video-react-sdk"
import { CustomLiveLayout } from "./CustomLiveLayout"

type LiveVideoProps = {
    call: Call
}

const LiveStream: React.FC<LiveVideoProps> = (props) => {
    const liveConfig: LivestreamLayoutProps = {
        showParticipantCount : true,
        showDuration : true,
        showLiveBadge: true,
        enableFullScreen: true
    }
    return (
        <>
            <StreamTheme style={{color: "white"}}>
                <StreamCall call={props.call}>
                    <CustomLiveLayout />
                </StreamCall>
            </StreamTheme>
        </>
    )
}

export { LiveStream }