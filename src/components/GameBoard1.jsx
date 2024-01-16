import { useState } from 'react';

const beginningGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard1(){
    const [gameBoard1, setGameBoard1] = useState(beginningGameBoard);

    function handleSquareClick(rowIndex, colIndex){
        setGameBoard1((prevGameBoard)=> {
            const updatedGameboard1 = [...prevGameBoard.map(nestedArray=> [...nestedArray])];
            updatedGameboard1[rowIndex][colIndex] = "G";
            return updatedGameboard1;
        });
    }
    
    return (
        <ol id="game-board">
            {
                //return a list with and ol containing the 3 li items above
                gameBoard1.map((row, rowIndex)=> (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) =>(
                                <li key={colIndex}>
                                    <button onClick={()=>handleSquareClick(rowIndex,colIndex)}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    )
}