import React, { useState } from 'react';
import Board from '../Board/board.component'
import './main.css'

function Main() {

    const [playBoard, setPlayboard] = useState(false)

    function close() {
        setPlayboard(false)
    }

    return (
        <div className='main'>
            {playBoard ? <div>
                <div className='back' />
                <Board key={"Board"} close={close} />
            </div> : <div>
                <div class="btn-box">
                    <div className='box-flex'>
                        <a href='#' className='btn btn-white btn-animate'
                            onClick={() => setPlayboard(true)}>
                            <div><span className='textButton'>Play</span></div>
                        </a>
                        <a href='#' className='btn btn-white btn-animate'
                            onClick={() => setPlayboard(true)}>
                            <span className='textButton'>Records</span>
                        </a>
                        <a href='#' className='btn btn-white btn-animate'
                            onClick={() => setPlayboard(true)}>
                            <span className='textButton'>Settings</span>
                        </a>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Main;
