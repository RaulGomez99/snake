import React, { useState } from 'react';
import Board from '../Board/board.component'

function Main() {

    const [playBoard, setPlayboard] = useState(false)

    return (
        <div>
            <h1>Prueba</h1>
            <button onClick={()=>setPlayboard(true)}>Play</button>
            {playBoard ? <Board key = {"Board"}/> : null}
        </div>
    );
}

export default Main;
