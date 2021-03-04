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
var currentAxisX = player[0].classList[1];
var running = false;
function newHead(axis, head) {
        if (axis == 'row') {
                document.getElementsByClassName(currentAxisX + ' col-' + (parseInt(head.classList[2].match(/\d+/)[0]) + 1))[0].classList.add('player');
        }
}

function moveX() {
        if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                alert('hai perso');
                running = false;
                return;
        } else if (running) {
                newHead(mainAxis, head);
                player[0].classList.remove('player');
                player = document.getElementsByClassName('player');
                head = player[player.length - 1];
        } else {
                return;
        }
        var timeout = setTimeout(moveX, 50);
}

function goDown() {
        var rowDown = parseInt(head.classList[1].match(/\d+/)[0]) + 1;
        var currentCol = head.classList[2].match(/\d+/)[0];
        head.classList.remove('player');
        document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0].classList.add('player');
}

document.getElementById('help').addEventListener('click', function() {
        running = true;
});
document.getElementById('help').addEventListener('click', moveX);

document.addEventListener("keydown", event => {
        if((event.key == 's' || event.key == 'S') && running && mainAxis == 'row'){
                running = false;
                goDown();
        };
      });


