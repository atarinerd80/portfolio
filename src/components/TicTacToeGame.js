import React from "react";
import TicTacToePlotPoints from '../data/TicTacToePlotPoints';
import TicTacToeWins from '../data/TicTacToeWins';

const plotsCross = TicTacToePlotPoints.plotPoints.cross;
const plotsCircle = TicTacToePlotPoints.plotPoints.circle;

export class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usedQuadrants: [],
            usedShapes: [],
            ctx: null,
            turnIdentifier: 'It is now your turn',
            gameText: '',
            playerTurn: true,
            winnerExists: false,
            textColor: 'black'
        };
    }

    componentDidMount() {
        //Create initial canvas
        const canvas = document.getElementById('tictactoeCanvas');
        const ctx = canvas.getContext('2d');
        this.setState({ctx}, this.buildGameBoard);
    }

    buildGameBoard() {
        //Plots horizontal and vertical lines on canvas
        const ctx = this.state.ctx;
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 300);
        ctx.stroke();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 300);
        ctx.stroke();
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);
        ctx.stroke();
        ctx.moveTo(0, 200);
        ctx.lineTo(300, 200);
        ctx.stroke();
    }

    drawCross(pointA, pointB, pointC, pointD) {
        //Draws diagonal lines that form cross in square
        const ctx = this.state.ctx;
        ctx.moveTo(pointC, pointA);
        ctx.lineTo(pointD, pointB);
        ctx.stroke();
        ctx.moveTo(pointC, pointB);
        ctx.lineTo(pointD, pointA);
        ctx.stroke();
    }

    drawCircle(pointA, pointB) {
        //Draws circle in square
        const ctx = this.state.ctx;
        ctx.beginPath();
        ctx.arc(pointA, pointB, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    getRandomThree() {
        //Generates a random number between 1 and 3
        return Math.floor(Math.random() * 3) + 1;
    }

    computerTurn = () => {
        let xQuadrant, yQuadrant, currentQuadrant, pointA, pointB;
        //Function to pick a random quadrant that hasn't been used
        do {
            //Get random numbers to choose a quadrant
            let randomA = this.getRandomThree();
            let randomB = this.getRandomThree();
            
            switch (randomA) {
                case 1:
                    xQuadrant = 'Left';
                    pointA = plotsCircle.leftTop;
                    break;
                case 2:
                    xQuadrant = 'Center';
                    pointA = plotsCircle.center;
                    break;
                case 3:
                    xQuadrant = 'Right';
                    pointA = plotsCircle.rightBottom;
                    break;
            }
            switch (randomB) {
                case 1:
                    yQuadrant = 'Top';
                    pointB = plotsCircle.leftTop;
                    break;
                case 2:
                    yQuadrant = 'Center';
                    pointB = plotsCircle.center;
                    break;
                case 3:
                    yQuadrant = 'Bottom';
                    pointB = plotsCircle.rightBottom;
                    break;
            }
            currentQuadrant =  xQuadrant + yQuadrant;
        } while (this.state.usedQuadrants.includes(currentQuadrant));

        this.drawCircle(pointA, pointB);
        //Adds circle to list of used quadrants and changes turn to player
        this.setState({usedQuadrants: [...this.state.usedQuadrants, currentQuadrant], usedShapes: [...this.state.usedShapes, currentQuadrant + 'Circle'], turnIdentifier: 'It is now your turn'},function() { 
            let winner = this.checkForWinner();
            if (winner) {
                this.setState({playerTurn: false});
            } else {
                this.setState({playerTurn: true});
            }
        });
    }

    checkForWinner() {
        const currentPlays = this.state.usedShapes;
        const winningPlays = TicTacToeWins.winningCombos;
        let winnerExists = false;
        let currentWinner;

        //Loops through array of winning circle combinations to compare to plays that have been made
        for (const play of winningPlays.circle) {
            if (winnerExists) {
                break;
            }
            winnerExists = play.every(i => currentPlays.includes(i));
            if (winnerExists) {
                currentWinner = 'Circle';
            }
        }
        //Loops through array of winning cross combinations to compare to plays that have been made
        if (!winnerExists) {
            for (const play of winningPlays.cross) {
                if (winnerExists) {
                    break;
                }
                winnerExists = play.every(i => currentPlays.includes(i));
                if (winnerExists) {
                    currentWinner = 'Cross';
                }
            }
        }

        //Checks to see if computer or player has won
        if (winnerExists && currentWinner == 'Circle') {
            this.setState({gameText: 'Sorry, your opponent has won!', playerTurn: false, turnIdentifier: 'Game Over', textColor: 'red'});
        } else if (winnerExists && currentWinner == 'Cross'){
            this.setState({gameText: 'Congratulations! You won!', playerTurn: false, turnIdentifier: 'Game Over', textColor: 'green'})
        } 

        //Check to see if game ended in a tie
        if (!winnerExists && this.state.usedQuadrants.length === 9) {
            this.setState({gameText: 'Whoops! Looks like it\'s a tie!', playerTurn: false, turnIdentifier: 'Game Over', textColor: 'black'})
        }
        if (winnerExists) {
            this.setState({winnerExists, currentWinner});
            return true;
        }
        return false;
    }

    playerTurn(x, y) {
        if (!this.state.playerTurn) return;
        const currentQuadrant = x + y;

        //Uses click coordinates to set points used for drawing cross
        if (!this.state.usedQuadrants.includes(currentQuadrant)) {
            let firstPoint, secondPoint, thirdPoint, fourthPoint;
            switch(x) {
                case 'Left':
                    thirdPoint = plotsCross.leftTop.xStart;
                    fourthPoint = plotsCross.leftTop.xEnd;
                    break;
                case 'Center':
                    thirdPoint = plotsCross.center.xStart;
                    fourthPoint = plotsCross.center.xEnd;
                    break;
                case 'Right':
                    thirdPoint = plotsCross.rightBottom.xStart;
                    fourthPoint = plotsCross.rightBottom.xEnd;
                    break;
            }
            switch(y) {
                case 'Top':
                    firstPoint = plotsCross.leftTop.xStart;
                    secondPoint = plotsCross.leftTop.xEnd;
                    break;
                case 'Center':
                    firstPoint = plotsCross.center.xStart;
                    secondPoint = plotsCross.center.xEnd;
                    break;
                case 'Bottom':
                    firstPoint = plotsCross.rightBottom.xStart;
                    secondPoint = plotsCross.rightBottom.xEnd;
                    break;
            }
            this.drawCross(firstPoint, secondPoint, thirdPoint, fourthPoint);
            //Adds cross to list of used quadrants. Directly checks for winner if the current turn is the final play
            if (this.state.usedQuadrants.length === 8) {
                this.setState({usedQuadrants: [...this.state.usedQuadrants, currentQuadrant], usedShapes: [...this.state.usedShapes, currentQuadrant + 'Cross'], turnIdentifier: 'Game Over', playerTurn: false}, function() {
                    this.checkForWinner();
                });
                return;
            }
            //Adds cross to list of used quadrants. Checks for winner before handing play over to computer
            this.setState({usedQuadrants: [...this.state.usedQuadrants, currentQuadrant], usedShapes: [...this.state.usedShapes, currentQuadrant + 'Cross'], playerTurn: false}, function() {
                let winner = this.checkForWinner();
                if (this.state.usedQuadrants.length < 9 && !winner) {
                    //Adds delay to computer response of 1.5 seconds to simulate thinking
                    this.setState({turnIdentifier: 'It is now your opponent\'s turn',}, function() {
                        setTimeout(() => {this.computerTurn()}, 1500);
                    })
                }
            });
            
        }
    }

    handleClick = (e) => {
        //Determines which quadrant mouse click was in
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        let xQuadrant = '';
        let yQuadrant = '';
        
        if (x <= 100) {
            xQuadrant = 'Left';
        } else if (x <= 200) {
            xQuadrant = 'Center';
        } else {
            xQuadrant = 'Right';
        }

        if (y <= 100) {
            yQuadrant = 'Top';
        } else if (y <= 200) {
            yQuadrant = 'Center';
        } else {
            yQuadrant = 'Bottom';
        }

        this.playerTurn(xQuadrant, yQuadrant);
    }

    resetCanvas = () => {
        //Removes all plays from canvas and resets all states to inital state
        const ctx = this.state.ctx;
        ctx.clearRect(0, 0, 300, 300);
        ctx.beginPath();
        this.buildGameBoard();
        this.setState({
            usedQuadrants: [],
            usedShapes: [],
            turnIdentifier: 'It is now your turn',
            gameText: '',
            playerTurn: true,
            winnerExists: false,
            textcolor: 'black'
        });
    }

    render() {
        return (
            <>
                <p>{this.state.turnIdentifier}</p>
                <p style={{color: this.state.textColor}}>{this.state.gameText}</p>
                <canvas id="tictactoeCanvas" width="300" height="300" onClick={this.handleClick}></canvas>
                <br />
                <button onClick={this.resetCanvas}>Reset Game</button>
            </>
        );
    }
}
export default TicTacToeGame;