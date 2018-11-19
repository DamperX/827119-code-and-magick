'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGTH = 150;
var lineHeight = 20;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getPlayerColor = function (player) {
  if (player === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    var random = Math.floor(Math.random() * 100) + '%';
    return 'hsl(240, ' + random + ', 50%)';
  }
};


var renderColumn = function (ctx, name, time, x, y, height, finalYPoint) {
    ctx.fillStyle = getPlayerColor(name);
    ctx.fillRect(x, y, BAR_WIDTH, height);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';
    ctx.fillText(name, x, finalYPoint);
    ctx.textBaseline = 'bottom';
    ctx.fillText(Math.round(time), x, y);
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGTH);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGTH);

  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', 120, 40);
  ctx.strokeText('Список результатов:', 120, 60);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var rectX = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var rectHeight = (HISTOGRAM_HEIGTH * times[i]) / maxTime;
    var finalYPoint = CLOUD_Y + lineHeight * 3 + HISTOGRAM_HEIGTH;
    var rectY = finalYPoint - rectHeight;

    renderColumn(ctx, names[i], times[i], rectX, rectY, rectHeight, finalYPoint);
  }
};
