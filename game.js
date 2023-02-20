var canvas;
var canvasContext;

var marioImages = {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
};

marioImages.up.onload = function() {
    drawGame();
};
marioImages.down.onload = function() {
    drawGame();
};
marioImages.left.onload = function() {
    drawGame();
};
marioImages.right.onload = function() {
    drawGame();
};

marioImages.up.src = "mario-up.png";
marioImages.down.src = "mario-down.png";
marioImages.left.src = "mario-left.png";
marioImages.right.src = "mario-right.png";

var marioDirection = "down";
var marioX = 50;
var marioY = 50;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
	const background = document.querySelector('#background');

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    setInterval(update, 1000/30);
}

function update() {
    moveMario();
}

function drawGame() {
    canvasContext.fillStyle = 'rgba(164, 226, 21, 0.233)';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.drawImage(marioImages[marioDirection], marioX, marioY, 50, 70);
}

function moveMario() {
    if (keys[38]) { // up arrow
        marioDirection = "up";
        marioY -= 5;
    }
    if (keys[40]) { // down arrow
        marioDirection = "down";
        marioY += 5;
    }
    if (keys[37]) { // left arrow
        marioDirection = "left";
        marioX -= 5;
    }
    if (keys[39]) { // right arrow
        marioDirection = "right";
        marioX += 5;
    }
    drawGame();
}


var keys = [];

function handleKeyDown(evt) {
    keys[evt.keyCode] = true;
}

function handleKeyUp(evt) {
    keys[evt.keyCode] = false;
}
