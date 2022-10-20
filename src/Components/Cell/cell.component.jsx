import React, { useState } from 'react';
import './cell.css';

function Cell({ coords, boardValue, epilepsia }) {
    function getColor(coords, boardValue) {
        let text = (coords[0] + coords[1] * 15) % 2 == 0 ? "cell even"
            : "cell odd"
        if (boardValue > 1) {
            text += " body"
        } else if (boardValue == 1) {
            text += " head"
        } else if (boardValue == -1) {
            text += " apple"
        }
        return text
    }

    function getRandomColor(boardValue) {
        let text = "cell"
        const colors = [" red", " yellow", " orange", " purple", " pink"]
        const color = Math.floor(Math.random() * 5);
        text += colors[color]
        if (boardValue > 1) {
            text += " body"
        } else if (boardValue == 1) {
            text += " head"
        } else if (boardValue == -1) {
            text += " apple"
        }
        return text
    }

    return (
        <div>
            {epilepsia ? <div className={getRandomColor(boardValue)} /> : <div className={getColor(coords, boardValue)} />}
            
        </div>
    );
}

export default Cell;
