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
    this.players[0].body.velocity.x = 0
    this.players[1].body.velocity.x = 0

    this.input.update()
  }

  on_left_down () {
    this.PRESSED.left = true

    const i = this.players[0].active ? 0 : 1

    this.players[i].body.velocity.x = -VELOCITY
  }

  on_right_down () {
    this.PRESSED.right = true

    const i = this.players[0].active ? 0 : 1

    this.players[i].body.velocity.x = VELOCITY
  }

  on_spacebar_down () {
    this.PRESSED.space = true

    this.main = (this.main + 1) % 2

    this.players[0].swap()
    this.players[1].swap()

    this.rails[0].swap()
    this.rails[1].swap()

    this.maze.swap()
  }
}
