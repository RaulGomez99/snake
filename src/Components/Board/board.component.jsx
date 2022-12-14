import React, { useState, useEffect } from 'react';
import Cell from '../Cell/cell.component'
import Dash from '../Dash/dash.component'
import Loose from '../Loose/loose.component'
import './board.css';
let movement
let move
let lastDir
let isInGame
let initing
function Board({ close, epilepsia }) {

    function init() {
        initing = true
        move = [0, 0]
        lastDir = [0, 1]
        isInGame = false
        setLoose(false)
        setApples(0)
        setTable(
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        )
    }

    // 1 snake body, 2 snake head, 3 apple
    const updateMoves = () => {
        console.log("Creating movement")
        movement = movement ? movement : setInterval(() => {
            if (!isInGame) return
            console.log("Moving..." + move[0] + ":" + move[1])
            console.log(getHeadCoords(table, 1))
            moveDirection(getHeadCoords(table, 1), move)
        }, 150)
    }

    useEffect(() => {
        init()

        return () => {
            clearInterval(movement)
            movement = null
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", changeMovement)

        return () => document.removeEventListener("keydown", changeMovement)
    })

    const [apples, setApples] = useState(0)
    const [loose, setLoose] = useState(false)
    const [table, setTable] = useState(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);

    useEffect(() => {
        if (initing) {
            updateMoves()
            initing = false
        }

    }, [table])

    function getHeadCoords(table, num) {
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (table[i][j] == num) return [i, j]
            }
        }
    }

    function changeMovement({ key }) {
        console.log(table)
        if (!loose) isInGame = true
        if (initing) return
        if (key == "w" && lastDir[0] != 1) {
            move = [-1, 0]
        } else if (key == "a" && lastDir[1] != 1) {
            move = [0, -1]
        } else if (key == "s" && lastDir[0] != -1) {
            move = [1, 0]
        } else if (key == "d" && lastDir[1] != -1) {
            move = [0, 1]
        }
    }

    function sumNumbers(table) {
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (table[i][j] >= 1) {
                    table[i][j] += 1
                }
            }
        }
        return table
    }

    function removeMax(table) {
        let max = 0
        let coords = []
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (table[i][j] > max) {
                    max = table[i][j]
                    coords = [i, j]
                }
            }
        }
        table[coords[0]][coords[1]] = 0
        return table
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function generateNewApple(table) {
        while (true) {
            const randomRow = getRandomInt(0, table.length)
            const randomCol = getRandomInt(0, table[0].length)
            if (table[randomRow][randomCol] == 0) {
                table[randomRow][randomCol] = -1
                return table
            }
        }
    }


    function moveDirection(coord, dir) {
        if (!isInGame) return
        if (coord[0] + dir[0] < 0 || coord[0] + dir[0] >= table.length ||
            coord[1] + dir[1] < 0 || coord[1] + dir[1] >= table[coord[0] + dir[0]].length) {
            gameLose()
        } else if (table[coord[0]][coord[1]] == 1) {
            if (table[[coord[0] + dir[0]]][[coord[1] + dir[1]]] > 1) {
                gameLose()
            } else if (table[[coord[0] + dir[0]]][[coord[1] + dir[1]]] == 0) {
                let subTable = [...table]
                subTable = sumNumbers(subTable)
                subTable[[coord[0] + dir[0]]][[coord[1] + dir[1]]] = 1
                subTable = removeMax(subTable)
                lastDir = dir
                setTable(subTable)
            } else if (table[[coord[0] + dir[0]]][[coord[1] + dir[1]]] == -1) {
                let subTable = [...table]
                setApples(apples => apples + 1)
                subTable = sumNumbers(subTable)
                subTable[[coord[0] + dir[0]]][[coord[1] + dir[1]]] = 1
                lastDir = dir
                subTable = generateNewApple(subTable)
                setTable(subTable)
            }
        }
    }

    function pause() {
        isInGame = false
    }

    function gameLose() {
        isInGame = false
        setLoose(true)
        clearInterval(movement)
        movement = undefined
    }
    return (
        <div className='board'>
            <Dash close={close} pause={pause} num={apples} />
            <div className='game'>
                {table.map((row, i) => (
                    row.map((cell, j) => (<Cell coords={[i, j]} boardValue={cell} epilepsia={epilepsia}/>))
                ))}
                {loose ? <Loose num={apples} init={init} /> : null}
            </div>
        </div>
    );
}

export default Board;
