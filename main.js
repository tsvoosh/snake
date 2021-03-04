var grill = document.getElementById('grill');
var row = 1;
var col = 1;

for (let index = 0; index < 400; index++) {
        if (col == 21) {
                row = row + 1;
                col = 1;
        }
        if (index == 0 || index == 1 || index == 2) {
                grill.innerHTML += '<div class="block' + ' row-' + row + ' col-' + col + ' player' + '"></div>';
                col = col + 1;
        } else {
                grill.innerHTML += '<div class="block' + ' row-' + row + ' col-' + col + '"></div>';
                col = col + 1;
        }
}

var mainAxis = 'row';
var player = document.getElementsByClassName('player');
var tail = player[0];
var head = player[player.length - 1];
var go = true;
function newHead(axis, head) {
        if (axis == 'row') {
                document.getElementsByClassName('row-1 col-' + (parseInt(head.classList[2].match(/\d+/)[0]) + 1))[0].classList.add('player');
        }
}

function move() {
        if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                alert('hai perso');
                return;
        } else if (go) {
                newHead(mainAxis, head);
                player[0].classList.remove('player');
                player = document.getElementsByClassName('player');
                head = player[player.length - 1];
        }
        var timeout = setTimeout(move, 50);
}


document.getElementById('help').addEventListener('click', move);
