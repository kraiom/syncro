import Rail from '../elements/Rail'
import Rectangle from '../objects/Rectangle'
import Circle from '../objects/Circle'

const GAME = require('../../json/game.json')

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    let rail = new Rail(this)

    new Rectangle(this, 'white', 50, 50, 200, 200)
    new Circle(this, 'red', 50, 200, 200)
    new Circle(this, 'orange', 50, 400, 400)
  }

  update () {
  }

  pause () {
  }

  resume () {
  }
}
