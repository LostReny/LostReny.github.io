function Square(props) {
  return React.createElement("button", { className: "square" },
  props.value);

}


class Board extends React.Component {
  renderSquare(i) {
    return React.createElement(Square, { value: i });
  }

  render() {
    return React.createElement("div", null,
    React.createElement("div", { className: "board-row" },
    this.renderSquare(0),
    this.renderSquare(1),
    this.renderSquare(2)),

    React.createElement("div", { className: "board-row" },
    this.renderSquare(3),
    this.renderSquare(4),
    this.renderSquare(5)),

    React.createElement("div", { className: "board-row" },
    this.renderSquare(6),
    this.renderSquare(7),
    this.renderSquare(8)));



  }}


class Game extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "game" },
      React.createElement("div", { className: "game-board" },
      React.createElement(Board, null)),


      React.createElement("div", { className: "game-info" }, "Informa\xE7\xF5es do Jogo")));




  }}


ReactDOM.render(
// Componente -> Elemento a ser renderizado
React.createElement(Game, null),
// Em um elemento -> Container em que será renderizado
document.getElementById('root'));