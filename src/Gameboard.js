import './gameboard.css'
import data from './image-info'
import React, { useState } from 'react';


function GameBoard(props){

    return(
        <div>
            <div class="three-buttons">
                <button>Easy</button>
                <button>Intermediate</button>
                <button>Dificult</button>
            </div>

            <div class="scores">
                <div class="score">Score: {props.score}</div>
                <div class="score">High Score: {props.highscore}</div>
            </div>

            <div class="game-board-container">
                <ImagePiece clicked = {props.click} img_data={data[props.array[0]]} link={data[props.array[0]].src} name={data[props.array[0]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[1]]} link={data[props.array[1]].src} name={data[props.array[1]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[2]]} link={data[props.array[2]].src} name={data[props.array[2]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[3]]} link={data[props.array[3]].src} name={data[props.array[3]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[4]]} link={data[props.array[4]].src} name={data[props.array[4]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[5]]} link={data[props.array[5]].src} name={data[props.array[5]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[6]]} link={data[props.array[6]].src} name={data[props.array[6]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[7]]} link={data[props.array[7]].src} name={data[props.array[7]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[8]]} link={data[props.array[8]].src} name={data[props.array[8]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[9]]} link={data[props.array[9]].src} name={data[props.array[9]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[10]]} link={data[props.array[10]].src} name={data[props.array[10]].name}/>
                <ImagePiece clicked = {props.click} img_data={data[props.array[11]]} link={data[props.array[11]].src} name={data[props.array[11]].name}/>
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