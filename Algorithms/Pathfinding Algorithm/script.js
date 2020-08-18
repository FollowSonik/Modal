const cols = 25;
const rows = 25;
const grid = new Array(cols);

const openSet = [];
const closedSet = [];

let start;
let end;
let v, h;

function removeFromArray(array, element) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == element) {
      array.splice(i, 1);
    }
  }
}

function heuristic(a, b) {
  return dist(a.i, a.j, b.i, b.j);
}

function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];

  this.show = function (color) {
    fill(color);
    noStroke();
    rect(this.i * w, this.j * h, w - 1, h - 1);
  }

  this.addNeighbors = function (grid) {
    let i = this.i;
    let j = this.j;

    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }

    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }

    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }

    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  console.log('A*');

  w = width / cols;
  h = height / rows;

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows - 1];

  openSet.push(start);

  console.log(grid);
}

function draw() {
  if (openSet.length > 0) {
    let winner = 0;

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }

    const current = openSet[winner];

    if (current === end) {
      console.log('Done!');
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    const neighbors = current.neighbors;

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      if (!closedSet.includes(neighbor)) {
        const tempG = current.g + 1;

        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
          }
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor);
        }

        neighbor.h = heuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
      }
    }
  } else {

  }

  background(111);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].show(color(255));
    }
  }

  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }

  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }
}