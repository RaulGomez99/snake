import React, { useState } from 'react';
import './cell.css';

function Cell({ coords, boardValue }) {
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
    return (
        <div className={getColor(coords, boardValue)}>

        </div>
    );
}

export default Cell;
