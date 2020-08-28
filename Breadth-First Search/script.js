let data;
let graph;

function preload() {
  data = loadJSON("kevin.json");
}

function setup() {
  graph = new Graph();
  noCanvas();
  const movies = data.movies;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i].title;
    const cast = movies[i].cast;
    const movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (let j = 0; j < cast.length; j++) {
      const actor = cast[j];
      let actorNode = graph.getNode(actor);

      if (actorNode == void 0) {
        actorNode = new Node(actor);
      }

      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }

  const start = graph.setStart("Kevin Bacon");
  const end = graph.setEnd("Kevin Bacon");

  console.log(graph);

  const queue = [];
  start.searched = true;
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (current == end) {
      console.log("Found!", current.value);
    }
  }
}