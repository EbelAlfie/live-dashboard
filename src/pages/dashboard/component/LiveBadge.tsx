
type BadgeProps = {
    isLive: boolean,
    participants: number
}

const LiveBadge: React.FC<BadgeProps> = (props) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h4>Live</h4>
                </div>
                <div className="col">
                    <p>{props.participants}</p>
                </div>
            </div>
        </>
    )
}

export { LiveBadge }