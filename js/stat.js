'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGTH = 150;

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
    return 'hsl(240, 100%, 50% )'; // ' + (Math.random() * 100) +'
  }
};

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
    var rectY = CLOUD_Y + GAP;
    var rectHeight = (HISTOGRAM_HEIGTH * times[i]) / maxTime;

    ctx.fillStyle = getPlayerColor(names[i]);
    ctx.fillText(names[i], rectX, rectY);
    ctx.fillRect(rectX, rectY, BAR_WIDTH, rectHeight);
  }
};
