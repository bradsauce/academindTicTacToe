import {useState} from 'react';

export default function Player({initialName, playerSymbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);

    let playerNameBlock = (<span className="player-name">{playerName}</span>);
    //let buttonState = 'Edit';
    
    function handleEditButtonClick(){
        setIsEditing(wasEditing => !wasEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    
    if (isEditing){
        playerNameBlock = <input type="text" required value={playerName} onChange={handleChange}></input>;
        //buttonState = 'Save';
    } else {
        playerNameBlock = <span className="player-name">{playerName}</span>;
        //buttonState = 'Edit';
    }

    return(
        <li>
            <span className="player">
              {playerNameBlock}
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditButtonClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    );
}