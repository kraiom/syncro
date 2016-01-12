import Rail from '../elements/Rail'

const GAME = require('../../json/game.json')

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    let rail = new Rail(this)
  }

  update () {
  }

  pause () {
  }

  resume () {
  }
}
