

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {cell, player} = turn;
        const {row, col} = cell;

        gameBoard[row][col] = player;
    }


    // const [ gameBoard, setGameBoard] = useState(initialGameBoard);

    // function clickHandler(rowIndex,colIndex) {
    //     setGameBoard( (prevGameBoard)=> {
    //         const updatedBoard = [...prevGameBoard.map( (innerArray)=>  [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;

    //     });

    //     onSelectSquare();
    // }

    return (
        <>
        <ol id="game-board">
            {gameBoard.map( (row,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map( (col, colIndex) =>
                    <li key={colIndex}> <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={col !== null}>{col}</button> </li>
                    
                    )}

                </ol>
            </li>
            )}

        </ol>
        
        </>
    );

}