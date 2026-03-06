"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("fractal");


    const color_even = "white";
    const color_odd = "black";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    let height = canvas.height;
    let width = canvas.width;
    let center = Math.round(width / 2);

    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;

    let pascals_triange = [];
    for(let i = 1; i < height; i++) {
        let step = [];
        for(let n = 0; n < i; n++) {
            if (n == 0) {
                step.push(1);
                context.fillStyle = color_odd;
                context.fillRect(center - Math.round(i / 2) + n, i, 1, 1);
            } else if (n == i - 1) {
                step.push(1);
                context.fillStyle = color_odd;
                context.fillRect(center - Math.round(i / 2) + n, i, 1, 1);
            } else {
                step.push((pascals_triange[i - 2][n - 1] + pascals_triange[i - 2][n]) % 2);
                if(step[n] === 1) {
                    context.fillStyle = color_odd;
                    context.fillRect(center - Math.round(i / 2) + n, i, 1, 1);
                } else {
                    context.fillStyle = color_even;
                    context.fillRect(center - Math.round(i / 2) + n, i, 1, 1);
                }
            }
        }
        pascals_triange.push(step);
    }
})
