export default function PlayerInfo({names, symbol}) {

    return (
        <>
        <li>
            <span className="player-name">{names}</span>
            <span className="player-symbol">{symbol}</span>
            <button>edit</button>
            </li>
        </>
    );
}