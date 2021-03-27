var gui = new dat.GUI();
var params = {
    Nb_points: 11,
    Size: 220,
    Download_Image: function () { return save(); },
};
gui.add(params, "Nb_points", 0, 50, 1);
gui.add(params, "Size", 20, 220, 10);
gui.add(params, "Download_Image");
function draw() {
    translate(width / 2, height / 2);
    if (keyCode === LEFT_ARROW) {
        background(250);
        fill(250, 250, 250);
        strokeWeight(1);
        push();
        translate(-121, -71);
        angleMode(DEGREES);
        rotate(30);
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; j++) {
                var pi = p5.Vector.fromAngle((i / 3) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 3) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(-121, +71);
        angleMode(DEGREES);
        rotate(-18);
        for (var i = 0; i < 5; ++i) {
            for (var j = 0; j < 5; j++) {
                var pi = p5.Vector.fromAngle((i / 5) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 5) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(0, 142);
        angleMode(DEGREES);
        rotate(15);
        for (var i = 0; i < 7; ++i) {
            for (var j = 0; j < 7; j++) {
                var pi = p5.Vector.fromAngle((i / 7) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 7) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(+121, +71);
        angleMode(DEGREES);
        rotate(5);
        for (var i = 0; i < 11; ++i) {
            for (var j = 0; j < 11; j++) {
                var pi = p5.Vector.fromAngle((i / 11) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 11) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(+121, -71);
        angleMode(DEGREES);
        rotate(-7);
        for (var i = 0; i < 13; ++i) {
            for (var j = 0; j < 13; j++) {
                var pi = p5.Vector.fromAngle((i / 13) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 13) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(0, -142);
        angleMode(DEGREES);
        rotate(-5);
        for (var i = 0; i < 17; ++i) {
            for (var j = 0; j < 17; j++) {
                var pi = p5.Vector.fromAngle((i / 17) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 17) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        translate(0, 0);
        for (var i = 0; i < 19; ++i) {
            for (var j = 0; j < 19; j++) {
                var pi = p5.Vector.fromAngle((i / 19) * TWO_PI).mult(70);
                var pj = p5.Vector.fromAngle((j / 19) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
    }
    else if (keyCode === DOWN_ARROW) {
        background(250);
        fill(250, 250, 250);
        strokeWeight(1);
        var valeurs = [19, 17, 13, 11, 7, 5, 3];
        push();
        translate(0, 0);
        for (var i = 0; i < valeurs[0]; ++i) {
            for (var j = 0; j < valeurs[0]; ++j) {
                var pi = p5.Vector.fromAngle((i / valeurs[0]) * TWO_PI).mult(80);
                var pj = p5.Vector.fromAngle((j / valeurs[0]) * TWO_PI).mult(80);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
        pop();
        push();
        angleMode(DEGREES);
        rotate(-180);
        translate(0, 0);
        for (var a = 1; a < valeurs.length; a++) {
            push();
            angleMode(DEGREES);
            rotate(a * 60);
            translate(120, 120);
            for (var i = 0; i < valeurs[a]; ++i) {
                for (var j = 0; j < valeurs[a]; ++j) {
                    var pi = p5.Vector.fromAngle((i / valeurs[a]) * TWO_PI).mult(80);
                    var pj = p5.Vector.fromAngle((j / valeurs[a]) * TWO_PI).mult(80);
                    line(pi.x, pi.y, pj.x, pj.y);
                }
            }
            pop();
        }
        pop();
    }
    else if (keyCode === UP_ARROW) {
        background(250);
        randomSeed(0);
        for (var i = 0; i < params.Nb_points; ++i) {
            for (var j = 0; j < params.Nb_points; j++) {
                var pi = p5.Vector.fromAngle((i / params.Nb_points) * TWO_PI).mult(params.Size);
                var pj = p5.Vector.fromAngle((j / params.Nb_points) * TWO_PI).mult(params.Size);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
    }
    else if (keyCode === RIGHT_ARROW) {
        background(250);
        rotate(-PI / 2);
        randomSeed(0);
        fill(250, 250, 250);
        strokeWeight(1);
        var X = mouseX / 80;
        var Y = mouseY / 70;
        for (var i = 0; i < X; ++i) {
            for (var j = 0; j < X; j++) {
                var pi = p5.Vector.fromAngle((i / Y) * TWO_PI).mult(150);
                var pj = p5.Vector.fromAngle((j / Y) * TWO_PI).mult(150);
                line(pi.x, pi.y, pj.x, pj.y);
            }
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map