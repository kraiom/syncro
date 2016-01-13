import Input from './Input'

const VELOCITY = 200

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.music = this.game.add.audio('Rhinoceros')
    this.music.loop = true
    // this.music.play()

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
      player.body.velocity.x = -VELOCITY
    })
  }

  on_right_down () {
    this.players.forEach(player => {
      player.body.velocity.x = VELOCITY
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
