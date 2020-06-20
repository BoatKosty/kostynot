var i = 0;

var j = 0;

var player = 'игрок';

var money = 1000;

var score1 = Math.round(Math.random()*12);

var score2 = Math.round(Math.random()*12);

var score3 = Math.round(Math.random()*12);

var conc = [score1, score2, score3];

document.write(money + '<br>' + '<br>');

for (i = 1; i < 4; i++) {
  document.write(i + ' ' + player + ' ' + ' ' + '-' + ' ' + conc[j] + '<br>' + '<br>');
  j++;
}

document.write('вы 1 игрок!');
