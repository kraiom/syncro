import Input from './Input'

import Rail from '../elements/Rail'
import Player from '../elements/Player'

const GAME = require('../../json/game.json')

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.input = new Input(this)

    let rail = new Rail(this)
    let playerA = new Player(this)
    let playerD = new Player(this, false)
  }

  update () {
  }

  pause () {
  }

  resume () {
  }

  on_left_down () {
    console.log('left')
  }

  on_right_down () {
    console.log('right')
  }

  on_spacebar_down () {
    console.log('space')
  }
}
