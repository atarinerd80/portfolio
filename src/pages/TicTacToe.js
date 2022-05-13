import React from "react";
import TicTacToeGame from "../components/TicTacToeGame"

export class TicTacToe extends React.Component {
    render() {
        return (
            <>
            <section id="tictactoe">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 text-center">
                        <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">Tic-Tac-Toe Game</h3>
                        <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <TicTacToeGame />
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default TicTacToe;