var grill = document.getElementById('grill');

function makeGrill() {
        document.getElementById('points').innerHTML = 0;
        noFood = true;
        col = 1;
        row = 1;
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
        player = document.getElementsByClassName('player');
        player = [...player];
        x = true;
        firstMotion = true;
        running = false;
        left = false;
        right = false;
        down = false;
        up = false;
        activeOne = 0;
        activeTwo = 0;
        activeThree = 0;
        activeFour = 0;
}

function start() {

        if (!running) {
                running = true;
        }
        if (firstMotion && running && x) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                        var tail = player[0];
                        nextCol = 1;
                        var nextHead = 'row-1' + ' col-' + nextCol;
                        document.getElementsByClassName(nextHead)[0].classList.add('player');
                        player.push(document.getElementsByClassName(nextHead)[0]);
                        tail.classList.remove('player');
                        player.shift();
                } else {
                        var tail = player[0];
                        nextCol = parseInt(head.classList[2].match(/\d+/)[0]) + 1;
                        var nextHead = 'row-1' + ' col-' + nextCol;
                        document.getElementsByClassName(nextHead)[0].classList.add('player');
                        player.push(document.getElementsByClassName(nextHead)[0]);
                        tail.classList.remove('player');
                        player.shift();
                }
        } else {
                firstMotion = false;
                clearTimeout(timeout);
                return;
        }
        var timeout = setTimeout(start, 50);
}

function goDown() {

        if (y && running) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[1].match(/\d+/)[0]) + 1) == 21) {
                        var tail = player[0];
                        var currentCol = head.classList[2].match(/\d+/)[0];
                        var nextRow = 1;
                        var check = document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0]);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0]);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                } else {
                        right = false;
                        var tail = player[0];
                        var rowDown = parseInt(head.classList[1].match(/\d+/)[0]) + 1;
                        var currentCol = head.classList[2].match(/\d+/)[0];
                        var check = document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0]);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + rowDown + ' col-' + currentCol)[0]);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                }
        } else {
                down = false;
                clearTimeout(timeoutOne);
                return;
        }
        timeoutOne = setTimeout(goDown, 50);
}

function goUp() {

        if (y && running) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[1].match(/\d+/)[0]) - 1) == 0) {
                        var tail = player[0];
                        var nextRow = 20;
                        var currentCol = head.classList[2].match(/\d+/)[0];
                        var check = document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0]);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + nextRow + ' col-' + currentCol)[0]);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                } else {
                        var tail = player[0];
                        var rowUp = parseInt(head.classList[1].match(/\d+/)[0]) - 1;
                        var currentCol = head.classList[2].match(/\d+/)[0];
                        var check = document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0]);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0].classList.add('player');
                                        player.push(document.getElementsByClassName('row-' + rowUp + ' col-' + currentCol)[0]);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                }
        } else {
                up = false;
                clearTimeout(timeoutTwo);
                return;
        }
        timeoutTwo = setTimeout(goUp, 50);
}

function goLeft() {
        if (running && x && !firstMotion) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) - 1) == 0) {
                        var tail = player[0];
                        var currentRow = head.classList[1].match(/\d+/)[0];
                        var nextCol = 20;
                        var check = document.getElementsByClassName('row-' + currentRow + ' col-' + nextCol)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + nextCol)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + nextCol)[0];
                                        player.push(newHead);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + nextCol)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + nextCol)[0];
                                        player.push(newHead);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                } else {
                        var tail = player[0];
                        var currentRow = head.classList[1].match(/\d+/)[0];
                        var col = parseInt(head.classList[2].match(/\d+/)[0]) - 1;
                        var check = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        tail = player[0];
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                }
        } else {
                left = false;
                clearTimeout(timeoutThree);
                return;
        }
        timeoutThree = setTimeout(goLeft, 50);
};

function goRight() {
        if (running && x && !firstMotion && right) {
                var head = player[player.length - 1];
                if ((parseInt(head.classList[2].match(/\d+/)[0]) + 1) == 21) {
                        var tail = player[0];
                        var currentRow = head.classList[1].match(/\d+/)[0];
                        var col = 1;
                        var check = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                } else {
                        var tail = player[0];
                        var currentRow = head.classList[1].match(/\d+/)[0];
                        var col = parseInt(head.classList[2].match(/\d+/)[0]) + 1;
                        var check = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                        if (check.classList.contains('player')) {
                                running = false;
                                $('#grill').empty();
                                $('#grill').hide();
                                $('#start').slideDown();
                                $('#help').slideDown();
                                $('.dead_wrap').slideDown();
                        } else {
                                if (check.classList.contains('eat')) {
                                        var points = parseInt(document.getElementById('points').innerHTML);
                                        points = points + 50;
                                        document.getElementById('points').innerHTML = points;
                                        var nextTail = player[0];
                                        $(nextTail).addClass('player');
                                        player.unshift(nextTail);
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        document.getElementsByClassName('eat')[0].innerHTML = '';
                                        document.getElementsByClassName('eat')[0].classList.remove('eat');
                                        noFood = true;
                                        genGhost();
                                } else {
                                        document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0].classList.add('player');
                                        var newHead = document.getElementsByClassName('row-' + currentRow + ' col-' + col)[0];
                                        player.push(newHead);
                                        tail.classList.remove('player');
                                        player.shift();
                                }
                        }
                }
        } else {
                right = false;
                clearTimeout(timeoutFour);
                return;
        }
        timeoutFour = setTimeout(goRight, 50);
};

function scrollTo($element) {
        $('html, body').animate({
                scrollTop: $element.offset().top
        }, 1000);
}

function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
}

var noFood = true;

function genGhost() {
        if (noFood) {
                if (firstMotion) {
                        var grill = $('#grill').children();
                        var cell = grill[getRndInteger(20, 400)];
                        $(cell).addClass('eat');
                        $(cell).html('<i class="fas fa-ghost food"></i>');
                        noFood = false;
                } else {
                        var grill = $('#grill').children();
                        var cell = grill[getRndInteger(0, 400)];
                        if ($(cell).hasClass('player')) {
                                genGhost();
                        } else {
                                $(cell).addClass('eat');
                                $(cell).html('<i class="fas fa-ghost food"></i>');
                                noFood = false;
                        }
                }
        }
};

var control;
document.getElementById('start').addEventListener('click', function () {
        $('.dead_wrap').hide(1000);
        $('#start').hide(1000);
        $('#help').hide(1000);
        $('.how_to').hide();
        $('#ghost').slideUp(1000);
        $('.points').show();
        $('#grill').addClass('grill').slideDown(2000, function () {
                makeGrill();
                genGhost();
                start();
        });
        scrollTo($('#grill'));
});
document.getElementById('help').addEventListener('click', function () {
        $('.points').hide();
        $('.dead_wrap').slideUp();
        $('#ghost').slideUp();
        $('.how_to').slideDown('slow');
});

document.addEventListener("keydown", event => {
        var now = new Date().getTime();
        if (control == undefined) {
                control = now;
        } else {
                difference = now - control;
                if (difference < 40) {
                        return;
                } else {
                        control = now;
                }
        }
        if ((event.key == 's' || event.key == 'S') && running) {
                downing = true;
                if (up) {
                        return;
                }
                activeTwo = 0;
                activeThree = 0;
                activeFour = 0;
                ++activeOne;
                if (activeOne > 1) {
                        return;
                }
                if (event.repeat) {
                        return;
                }
                down = true;
                x = false;
                y = true;
                goDown();
        };
        if ((event.key == 'a' || event.key == 'A') && running) {
                if (right) {
                        return;
                }
                activeOne = 0;
                activeThree = 0;
                activeFour = 0;
                ++activeTwo;
                if (activeTwo > 1) {
                        return;
                }
                if (event.repeat) {
                        return;
                }
                left = true;
                y = false;
                x = true;
                goLeft();
        };
        if ((event.key == 'd' || event.key == 'D') && running) {
                if (left) {
                        return;
                }
                activeOne = 0;
                activeTwo = 0;
                activeFour = 0;
                ++activeThree;
                if (activeThree > 1) {
                        return;
                }
                if (event.repeat) {
                        return;
                }
                right = true;
                y = false;
                x = true;
                goRight();
        };
        if ((event.key == 'w' || event.key == 'W') && running) {
                if (down) {
                        return;
                }
                activeOne = 0;
                activeThree = 0;
                activeTwo = 0;
                ++activeFour;
                if (activeFour > 1) {
                        return;
                }
                if (event.repeat) {
                        return;
                }
                up = true;
                x = false;
                y = true;
                goUp();
        };
});