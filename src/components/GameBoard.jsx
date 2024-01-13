import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquareSelect(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedGameboard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameboard [rowIndex][colIndex] = 'X';
            return updatedGameboard;
        });
    }
    
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=> (
                            <li key={colIndex}>
                                <button onClick={()=> handleSquareSelect(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}