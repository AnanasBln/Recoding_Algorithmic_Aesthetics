//press ←, ↓, ↑ or → to interact

// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Nb_points: 11,
    Size: 220,
    Download_Image: () => save(),
}
gui.add(params, "Nb_points", 0, 50, 1)
gui.add(params, "Size", 20, 220, 10)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


function draw() {
    translate(width / 2, height / 2)

    //press ← to see copied the artwork (places by hand)
    if (keyCode === LEFT_ARROW) {
        background(250);
        fill(250, 250, 250)
        strokeWeight(1)

        // premier : 3 sommets
        push()
        translate(-121, -71)
        angleMode(DEGREES)
        rotate(30)
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; j++) {
                const pi = p5.Vector.fromAngle((i / 3) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 3) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 5 sommets
        push()
        translate(-121, +71)
        angleMode(DEGREES);
        rotate(-18)
        for (let i = 0; i < 5; ++i) {
            for (let j = 0; j < 5; j++) {
                const pi = p5.Vector.fromAngle((i / 5) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 5) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 7 sommets
        push()
        translate(0, 142)
        angleMode(DEGREES);
        rotate(15)
        for (let i = 0; i < 7; ++i) {
            for (let j = 0; j < 7; j++) {
                const pi = p5.Vector.fromAngle((i / 7) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 7) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 11 sommets
        push()
        translate(+121, +71)
        angleMode(DEGREES);
        rotate(5)
        for (let i = 0; i < 11; ++i) {
            for (let j = 0; j < 11; j++) {
                const pi = p5.Vector.fromAngle((i / 11) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 11) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 13 sommets
        push()
        translate(+121, -71)
        angleMode(DEGREES);
        rotate(-7)
        for (let i = 0; i < 13; ++i) {
            for (let j = 0; j < 13; j++) {
                const pi = p5.Vector.fromAngle((i / 13) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 13) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 17 sommets
        push()
        translate(0, -142)
        angleMode(DEGREES);
        rotate(-5)
        for (let i = 0; i < 17; ++i) {
            for (let j = 0; j < 17; j++) {
                const pi = p5.Vector.fromAngle((i / 17) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 17) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        //deuxième : 19 sommets
        push()
        translate(0, 0)
        for (let i = 0; i < 19; ++i) {
            for (let j = 0; j < 19; j++) {
                const pi = p5.Vector.fromAngle((i / 19) * TWO_PI).mult(70);
                const pj = p5.Vector.fromAngle((j / 19) * TWO_PI).mult(70);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()
    }

    //press ↓ to see the optimized code artwork
    else if (keyCode === DOWN_ARROW) {
        background(250);
        fill(250, 250, 250)
        strokeWeight(1)
        var valeurs = [19, 17, 13, 11, 7, 5, 3];
        //initialisation du centre
        push()
        translate(0, 0)
        for (let i = 0; i < valeurs[0]; ++i) {
            for (let j = 0; j < valeurs[0]; ++j) {
                const pi = p5.Vector.fromAngle((i / valeurs[0]) * TWO_PI).mult(80);
                const pj = p5.Vector.fromAngle((j / valeurs[0]) * TWO_PI).mult(80);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
        pop()

        push()
        angleMode(DEGREES)
        rotate(-180)
        translate(0, 0)
        for (let a = 1; a < valeurs.length; a++) {
            push()
            angleMode(DEGREES)
            rotate(a * 60)
            translate(120, 120)
            for (let i = 0; i < valeurs[a]; ++i) {
                for (let j = 0; j < valeurs[a]; ++j) {
                    const pi = p5.Vector.fromAngle((i / valeurs[a]) * TWO_PI).mult(80);
                    const pj = p5.Vector.fromAngle((j / valeurs[a]) * TWO_PI).mult(80);
                    line(pi.x, pi.y, pj.x, pj.y)
                }
            }
            pop()
        }
        pop()
    }

    //press ↑ to see the interactive artwork with gui params
    else if (keyCode === UP_ARROW) {
        background(250);
        randomSeed(0)
        for (let i = 0; i < params.Nb_points; ++i) {
            for (let j = 0; j < params.Nb_points; j++) {
                const pi = p5.Vector.fromAngle((i / params.Nb_points) * TWO_PI).mult(params.Size);
                const pj = p5.Vector.fromAngle((j / params.Nb_points) * TWO_PI).mult(params.Size);
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
    }

    //press → to see the interactive artwork with mouse tracking
    else if (keyCode === RIGHT_ARROW) {
        background(250);
        rotate(-PI / 2)
        randomSeed(0)
        fill(250, 250, 250)
        strokeWeight(1)

        const X = mouseX / 80
        const Y = mouseY / 70
        for (let i = 0; i < X; ++i) {
            for (let j = 0; j < X; j++) {
                const pi = p5.Vector.fromAngle((i / Y) * TWO_PI).mult(150)
                const pj = p5.Vector.fromAngle((j / Y) * TWO_PI).mult(150)
                line(pi.x, pi.y, pj.x, pj.y)
            }
        }
    }
}


// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}



