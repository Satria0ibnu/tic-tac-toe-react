



export default function GameBoard({onSelectSquare, board}){
    


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
            {board.map( (row,rowIndex)=>
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