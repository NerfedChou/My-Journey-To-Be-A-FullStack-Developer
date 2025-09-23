import { Application } from "https://unpkg.com/@splinetool/runtime@latest/build/runtime.js";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('scene.splinecode');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
