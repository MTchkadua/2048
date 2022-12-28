import React from 'react';
import Hexagon from './Hexagon';

const ROW_COUNT = 5;
const COL_COUNT = 5;

class Hexagonal2048 extends React.Component {
    constructor (props){
        super(props)
    this.state = {
    grid: this.initializeGrid(),
    score: 0,
  };
    }
  initializeGrid = () => {
    const grid = [];
    for (let row = 0; row < ROW_COUNT; row++) {
      const currentRow = [];
      for (let col = 0; col < COL_COUNT; col++) {
        currentRow.push(null);
      }
      grid.push(currentRow);
    }
    return grid;
  };

  addRandomTile = () => {
    const { grid } = this.state;
    const emptyCells = [];
    for (let row = 0; row < ROW_COUNT; row++) {
      for (let col = 0; col < COL_COUNT; col++) {
        if (grid[row][col] === null) {
          emptyCells.push({ row, col });
        }
      }
    }
    if (emptyCells.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    grid[cell.row][cell.col] = 2;
    this.setState({ grid });
  };

  moveLeft = () => {
    const { grid, score } = this.state;
    let hasChanged = false;

    for (let row = 0; row < ROW_COUNT; row++) {
      const currentRow = grid[row];
      const newRow = this.moveRow(currentRow);
      if (!hasChanged) {
        hasChanged = !this.arraysEqual(newRow, currentRow);
      }
      grid[row] = newRow;
    }

    if (hasChanged) {
      this.addRandomTile();
      this.setState({ grid, score });
      this.checkGameOver();
    }
  };

  moveRight = () => {
    // ...
  };

  moveUp = () => {
    // ...
  };

  moveDown = () => {
    // ...
  };

  moveRow = (row) => {
    // ...
  };

  arraysEqual = (a, b) => {
    // ...
  };

  checkGameOver = () => {
    // ...
  };

  handleKeyDown = (event) => {
    // ...
  };

  render() {
    const { grid, score } = this.state;

    return (
      <div className="hexagonal-2048" onKeyDown={this.handleKeyDown} tabIndex="0">
        <div className="hexagonal-2048-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="hexagonal-2048-row">
              {row.map((cell, cellIndex) => (
                <Hexagon key={cellIndex} value={cell} />
              ))}
            </div>
          ))}
        </div>
        <div className="hexagonal-2048-score">{score}</div>
      </div>
    );
  }
}

export default Hexagonal2048;