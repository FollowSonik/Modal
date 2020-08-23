let cols, rows;
let w = 40;
let current;

const grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  frameRate(5);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  const next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    removeWalls(current, next);
    current = next;
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }

  return i + j * cols;
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  this.checkNeighbors = function () {
    const neigbors = [];

    const top = grid[index(i, j - 1)];
    const right = grid[index(i + 1, j)];
    const bottom = grid[index(i, j + 1)];
    const left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neigbors.push(top);
    }

    if (right && !right.visited) {
      neigbors.push(right);
    }

    if (bottom && !bottom.visited) {
      neigbors.push(bottom);
    }

    if (left && !left.visited) {
      neigbors.push(left);
    }

    if (neigbors.length > 0) {
      const rand = floor(random(0, neigbors.length));
      return neigbors[rand];
    } else return void 0;
  }

  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;

    stroke(255);

    if (this.walls[0]) {
      line(x, y, x + w, y);
    }

    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }

    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }

    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
}

function removeWalls(a, b) {
  const x = a.i - b.i;

  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  const y = a.j - b.j;

  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}