import './gameboard.css'
import data from './image-info'
import React, { useState } from 'react';
import alldata from './all-image-info'


function GameBoard(props){
    const [mode, setMode] = useState("Easy")

    return(
        <div>

            <div class="scores">
                <div class="score">Score: {props.score}</div>
                <div class="score">High Score: {props.highscore}</div>
            </div>

            <div class="game-board-container">
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[0]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[1]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[2]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[3]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[4]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[5]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[6]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[7]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[8]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[9]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[10]]} />
                <ImagePiece clicked = {props.click} img_data={alldata[props.array[11]]} />
            </div>
        </div>
    )

}

function ImagePiece(props){
    return (
        <div onClick = {() => props.clicked(props.img_data.id)} class="image-piece">
            <img class="img" src={props.img_data.src} ></img>
            <div class="name">{props.img_data.name}</div>
        </div>
    )
}

export default GameBoard