import Input from './Input'

const VELOCITY = 250

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    if (!this.music) {
      this.music = this.game.add.audio('Rhinoceros')
      this.music.loop = true
    }

    this.input = new Input(this)

    this.PRESSED = {
      left: false,
      right: false,
      space: false
    }
  }

  init (data) {
    this.data = data
  }

  update () {
    this.players.forEach(player => player.body.velocity.x = 0)

    this.input.update()
  }

  on_left_down () {
    this.PRESSED.left = true

    this.players.forEach(player => {
      player.body.velocity.x = player.active ? -VELOCITY : 0
    })
  }

  on_right_down () {
    this.PRESSED.right = true

    this.players.forEach(player => {
      player.body.velocity.x = player.active ? VELOCITY : 0
    })
  }

  on_spacebar_down () {
    this.PRESSED.space = true

    this.main = (this.main + 1) % 2

    this.players.forEach(player => player.swap())
    this.rails.forEach(rail => rail.swap())
    this.maze.swap()
  }
}
