var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGTH = 150;

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGTH);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGTH);

  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', 120, 40);
  ctx.strokeText('Список результатов:', 120, 60);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP);
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP, BAR_WIDTH, HISTOGRAM_HEIGTH);
  }
};
