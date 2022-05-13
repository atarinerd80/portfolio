import React from "react";
import TicTacToePlotPoints from '../data/TicTacToePlotPoints';

const plotsCross = TicTacToePlotPoints.plotPoints.cross;
const plotsCircle = TicTacToePlotPoints.plotPoints.circle;

export class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usedQuadrants: [],
            ctx: null
        };
    }

    componentDidMount() {
        const canvas = document.getElementById('tictactoeCanvas');
        const ctx = canvas.getContext('2d');
        this.setState({ctx});

        //Build game board
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
        const ctx = this.state.ctx;
        ctx.moveTo(pointC, pointA);
        ctx.lineTo(pointD, pointB);
        ctx.stroke();
        ctx.moveTo(pointC, pointB);
        ctx.lineTo(pointD, pointA);
        ctx.stroke();
    }

    drawCircle(pointA, pointB) {
        const ctx = this.state.ctx;
        ctx.beginPath();
        ctx.arc(pointA, pointB, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    getRandomThree() {
        return Math.floor(Math.random() * 3) + 1;
    }

    computerTurn = () => {
        let xQuadrant, yQuadrant, currentQuadrant, pointA, pointB;
        do {
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
        this.setState({usedQuadrants: [...this.state.usedQuadrants, currentQuadrant]});
        console.log(this.state.usedQuadrants);
    }

    handleClick = (e) => {
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

        const currentQuadrant = xQuadrant + yQuadrant;

        if (!this.state.usedQuadrants.includes(currentQuadrant)) {
            let firstPoint, secondPoint, thirdPoint, fourthPoint;
            switch(xQuadrant) {
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
            switch(yQuadrant) {
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
            this.setState({usedQuadrants: [...this.state.usedQuadrants, currentQuadrant]}, function() {
                if (this.state.usedQuadrants.length < 9) {
                    this.computerTurn();
                }
            });
        }
    }

    render() {
        return <canvas id="tictactoeCanvas" width="300" height="300" onClick={this.handleClick}></canvas>;
    }
}
export default TicTacToeGame;