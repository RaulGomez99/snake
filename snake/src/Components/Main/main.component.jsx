import React, { useState } from 'react';
import Board from '../Board/board.component'
import './main.css'

function Main() {

    const [playBoard, setPlayboard] = useState(false)

    return (
        <div className='main'>
            {playBoard ? <div>
                <div className='back' />
                <Board key={"Board"} />
            </div> : <div>
                <button onClick={() => setPlayboard(true)}>Play</button>
            </div>}
        </div>
    );
}

export default Main;
