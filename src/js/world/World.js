import Input from './Input'

import Rail from '../elements/Rail'
import Player from '../elements/Player'

const GAME = require('../../json/game.json')

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.input = new Input(this)

    let rail = new Rail(this)

    this.players = {
      main: new Player(this),
      shadow: new Player(this, false)
    }

    console.log(this.game.input.keyboard)
  }

  update () {
    this.players.main.body.velocity.x = 0
    this.players.shadow.body.velocity.x = 0

    this.input.update()
  }

  pause () {
  }

  resume () {
  }

  on_left_down () {
    this.players.main.body.velocity.x = -100
    this.players.shadow.body.velocity.x = -100
  }

  on_right_down () {
    this.players.main.body.velocity.x = 100
    this.players.shadow.body.velocity.x = 100
  }

  on_spacebar_down () {
    console.log('space')
  }
}
