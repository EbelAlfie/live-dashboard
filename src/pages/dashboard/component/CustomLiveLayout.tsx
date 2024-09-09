import { LivestreamLayout, useCall } from "@stream-io/video-react-sdk"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    return (
        <>
            <LivestreamLayout />
        </>
    )
}

export { CustomLiveLayout }