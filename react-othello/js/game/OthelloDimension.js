var Immutable = require('immutable');

var Dimension = Immutable.Map({
  'gameWidth': 1200,
  'gameHeight': 800,
  'gridWidth': 650,
  'gridHeight': 650,
  'rows': 8,
  'cols': 8,
  'cellWidth': 80,
  'cellHeight': 80,
  'circleWidth': 72,   // 640 / 8 * 0.9
  'circleHeight': 72,
  'chartWidth': 200,
  'chartHeight': 200,
  'panelWidth': 200,
  'panelHeight': 640
});

module.exports = Dimension;
