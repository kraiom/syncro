import Circle from '../elements/Circle'
import Rectangle from '../elements/Rectangle'

const GAME = require('../../json/game.json')

export default class World {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    const rectangle = new Rectangle(this, 'white', 50)

    rectangle.draw(100, 100)

    const circle = new Circle(this, 'black', 50)

    circle.draw(100, 100)
  }

  update () {
  }

  pause () {
  }

  resume () {
  }
}
