var grill = document.getElementById('grill');
col = 1;
row = 1;

function makeGrill() {
        for (let index = 0; index < 400; index++) {
                if (col == 21) {
                        row = row + 1;
                        col = 1;
                }
                if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10) {
                        grill.innerHTML += '<div class="block' + ' row-' + row + ' col-' + col + ' player' + '"></div>';
                        col = col + 1;
                } else {
                        grill.innerHTML += '<div class="block' + ' row-' + row + ' col-' + col + '"></div>';
                        col = col + 1;
                }
        }
}

makeGrill();

var player = document.getElementsByClassName('player');
var player = [...player];
var x = true;
var firstMotion = true;
var running = false;
var left = false;
var right = false;
var down = false;
var up = false;
var active = 0;

function start() {
        if(!running) {
                running = true;
        }
        if (firstMotion && running && x) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                        running = false;
                        firstMotion = false;
                        alert('hai perso');
                        clearInterval(timeout);
                        return;
                }
                var tail = player[0];
                nextCol = parseInt(head.classList[2].match(/\d+/)[0]) + 1;
                var nextHead = 'row-1' + ' col-' + nextCol;
                document.getElementsByClassName(nextHead)[0].classList.add('player');
                player.push(document.getElementsByClassName(nextHead)[0]);
                tail.classList.remove('player');
                player.shift();
        } else {
                firstMotion = false;
                clearInterval(timeout);
                return;
        }
        var timeout = setTimeout(start, 50);
}

function goDown() {

        if(y && running) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[1].match(/\d+/)[0]) + 1) == 21) {
                        running = false;
                        down = false;
                        alert('hai perso');
                        clearInterval(timeout);
                        return;
                }
                var tail = player[0];
                var rowDown = parseInt(head.classList[1].match(/\d+/)[0]) + 1;
                var currentCol = head.classList[2].match(/\d+/)[0];
                document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0].classList.add('player');
                player.push(document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0]);
                tail.classList.remove('player');
                player.shift();
        }  else {
                down = false;
                clearInterval(timeout);
                return;
        }
        var timeout = setTimeout(goDown, 50);
}

function goUp() {

        if(y && running) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[1].match(/\d+/)[0]) - 1) == 0) {
                        running = false;
                        up = false;
                        alert('hai perso');
                        clearInterval(timeout);
                        return;
                }
                var tail = player[0];
                var rowUp = parseInt(head.classList[1].match(/\d+/)[0]) - 1;
                var currentCol = head.classList[2].match(/\d+/)[0];
                document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0].classList.add('player');
                player.push(document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0]);
                tail.classList.remove('player');
                player.shift();
        }  else {
                up = false;
                clearInterval(timeout);
                return;
        }
        var timeout = setTimeout(goUp, 50);
}

function goLeft() {
        if (running && x && !firstMotion) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) - 1) == 0) {
                        running = false;
                        left = false;
                        alert('hai perso');
                        clearInterval(timeout);
                        return;
                }
                var tail = player[0];
                var currentRow = head.classList[1].match(/\d+/)[0];
                var col = parseInt(head.classList[2].match(/\d+/)[0]) - 1;
                document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                player.push(newHead);
                tail.classList.remove('player');
                player.shift();
        } else {
                left = false;
                clearInterval(timeout);
                return;
        }
        var timeout = setTimeout(goLeft, 50);
};

function goRight() {
        if (running && x && !firstMotion) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                        running = false;
                        right = false;
                        alert('hai perso');
                        clearInterval(timeout);
                        return;
                }
                var tail = player[0];
                var currentRow = head.classList[1].match(/\d+/)[0];
                var col = parseInt(head.classList[2].match(/\d+/)[0]) + 1;
                document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                player.push(newHead);
                tail.classList.remove('player');
                player.shift();
        } else {
                right = false;
                clearInterval(timeout);
                return;
        }
        var timeout = setTimeout(goRight, 50);
};

document.getElementById('start').addEventListener('click', start);
document.addEventListener("keydown", event => {
        if ((event.key == 's' || event.key == 'S') && running) {
                if(event.repeat) {
                        return;
                }
                if(up) {
                        return;
                }
                down = true;
                x = false;
                y = true;
                goDown();
        };
        if ((event.key == 'a' || event.key == 'A') && running) {
                if(event.repeat) {
                        return;
                }
                if(right) {
                        return;
                }
                left = true;
                y = false;
                x = true;
                goLeft();
        };
        if ((event.key == 'd' || event.key == 'D') && running) {
                if(event.repeat) {
                        return;
                }
                if (left) {
                        return;
                }
                right = true;
                y = false;
                x = true;
                goRight();
        };
        if ((event.key == 'w' || event.key == 'W') && running) {
                if(event.repeat) {
                        return;
                }
                if(down) {
                        return;
                }
                up = true;
                x = false;
                y = true;
                goUp();
        };
});