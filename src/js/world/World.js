import Input from './Input'

const VELOCITY = 200

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    if (!this.music) {
      this.music = this.game.add.audio('Rhinoceros')
      this.music.loop = true
      this.music.play()
    }

    this.input = new Input(this)
  }

  update () {
    this.players.forEach(player => {
      player.body.velocity.x = 0
    })

    this.input.update()
  }

  pause () {
  }

  resume () {
  }

  on_left_down () {
    this.players.forEach(player => {
      player.body.velocity.x = player.active ? -VELOCITY : 0
    })
  }

  on_right_down () {
    this.players.forEach(player => {
      player.body.velocity.x = player.active ? VELOCITY : 0
    })
  }

  on_spacebar_down () {
    this.main = (this.main + 1) % 2

    this.players.forEach(player => {
      player.swap()
    })

    this.rails.forEach(rail => {
      rail.swap()
    })

    this.maze.swap()
  }
}
