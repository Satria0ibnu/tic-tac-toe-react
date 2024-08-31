import { useState } from "react";

export default function PlayerInfo({names, symbol, isActive}) {
    const [ isEditing, setIsEditing] = useState(false);
    const [ inputName, setInputName] = useState(names);

    function editClickHandler() {
        setIsEditing((isEditing) => !isEditing);
    }

    function changeHandler(event) {
        console.log(event);
        setInputName(event.target.value);
    }

    let playerName = <span className="player-name">{inputName}</span>;
    let buttonText = 'Edit';

    if (isEditing) {
        playerName = <input type="text" value={inputName} required onChange={changeHandler}/>;
        buttonText = 'Save';
    }


    return (
        <>
        <li className={isActive? 'active' : null}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editClickHandler}>{buttonText}</button>
            </li>
        </>
    );
}