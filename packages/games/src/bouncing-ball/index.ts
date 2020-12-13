const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
const ctx = canvas.getContext('2d')

function draw() {
  // Include here the game loop
  requestAnimationFrame(draw)
}

draw()
