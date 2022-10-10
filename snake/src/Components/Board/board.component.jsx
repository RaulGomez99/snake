import React, { useState, useEffect } from 'react';
import Cell from '../Cell/cell.component'
import './board.css';
let movement
function Board() {
    // 1 snake body, 2 snake head, 3 apple
    const updateMoves = () => {
        console.log("Creating movement")
        movement = movement ? movement : setInterval(()=>{
            console.log("Moving...")
            moveDirection(headCoords, move, lastDirection)
        }, 1000)
      }
      
      useEffect(() => {
        updateMoves()
        
        //return () => clearInterval(movement)
      }, [])

    const [isInGame, setIsInGame] = useState(true)
    const [move, setMove] = useState([0,1])
    const [lastDirection, setLastDirection] = useState([0,0])
    const [headCoords, setHeadCoords] = useState([7,5])
    const [table, setTable] = useState(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    


    function moveDirection(coord, dir, lastDir){
        if(!isInGame) return
        const headCoords = getHeadCoords(table)
        if(table[coord[0]][coord[1]] == 2){
            if(table[[coord[0]+dir[0]]][[coord[1]+dir[1]]] == 1){
                gameLose()
            }else {
                let subTable = table
                subTable[coord[0]][coord[1]] = 1
                subTable[[coord[0]+dir[0]]][[coord[1]+dir[1]]] = 2
                setTable(subTable)
                setLastDirection(dir)
                const x = headCoords[0]+dir[0]
                const y = headCoords[1]+dir[1]
                setHeadCoords(prevCoords => {
                    return ([prevCoords[0]+dir[0],prevCoords[1]+dir[1]])
                })
                console.log(headCoords)
            }
        }else{
            console.log(table[coord[0]][coord[1]])
        }
    }

    

    function gameLose(){

    }
    return (
        <div className='board'>
            {table.map((row, i) => (
                row.map((cell, j) => (<Cell coords={[i,j]} boardValue = {cell}/>))   
            )) }
        </div>
    );
}

export default Board;
