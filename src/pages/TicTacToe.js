import React from "react";
import TicTacToeGame from "../components/TicTacToeGame"

export class TicTacToe extends React.Component {
    render() {
        return (
            <>
            <section id="tictactoe">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-7 text-center">
                            <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">Tic-Tac-Toe Game</h3>
                            <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <TicTacToeGame />
                        </div>
                        <div className="col-md-6">
                            <p>This simple Tic-Tac-Toe game was created to show the capabilities of pure HTML, CSS, and JavaScript. The game is created using an HTML5 canvas, and set to render horizontal and vertical lines to create the game board.</p>
                            <p>A handler for click events on the canvas grabs the coordinates of the mouse click within the canvas, and is able to determine which square was clicked. An existing JSON object that contains coordinates needed to draw each 'X' and 'O' is used for both player input and an automatic opponent.</p>
                            <p>No advanced AIs are used for computer logic, as any moves made by the opponent are purely random. The opponent is also delayed by 1.5 seconds, in order to give a small amount of realism to playing the game.</p>
                            <p>After every move, a comparison is made between an array containing all current moves and an object of arrays containing all winning solutions. The game is finished by determining the winner of each round and giving the player a reset button, clearing all saved data and returning the canvas to it's initial configuration.</p>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default TicTacToe;