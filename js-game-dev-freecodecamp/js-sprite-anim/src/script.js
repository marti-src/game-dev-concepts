let playerState = "idle"
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', (e) => {
  playerState = e.target.value
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = '../public/images/shadow_dog.png'
let
  sWidth = 575, sHeight = 523,
  gameFrame = 0

const staggerFrames = 4
const spriteAnimations = []
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 9,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
]
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],

  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * sWidth
    let positionY = index * sHeight
    frames.loc.push({ x: positionX, y: positionY })
  }
  spriteAnimations[state.name] = frames
})
let maxFrame = 6

function animate() {
  const
    dx = 0, dy = 0, dWidth = sWidth, dHeight = sHeight

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
  let frameX = sWidth * position
  let frameY = spriteAnimations[playerState].loc[position].y
  ctx.drawImage(playerImage, frameX, frameY, sWidth, sHeight, dx, dy, dWidth, dHeight)

  gameFrame++
  requestAnimationFrame(animate)
}

animate()