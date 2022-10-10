import React, { useState } from 'react';
import './cell.css';

function Cell({ coords, boardValue }) {
    function getColor(coords, boardValue) {
        if (boardValue == 0) {
            return (coords[0] + coords[1] * 15) % 2 == 0 ? "cell even"
                : "cell odd"
        }else if(boardValue == 1){
            return "cell body"
        }else if(boardValue == 2){
            return "cell head"
        }else if(boardValue == 3){
            return "cell apple"
        }
    }
    return (
        <div className={ getColor(coords, boardValue) }>

        </div>
    );
}

export default Cell;
