import Circle from '../objects/Circle'

const GAME = require('../../json/game.json')

const DEACTIVATED = GAME.deactivated.player
const MAIN = GAME.active.player

const SIZE = 20

const MARGIN = 40

export default class Player extends Circle {
  constructor (context, center, main = true) {
    const color = main ? MAIN : DEACTIVATED

    super(context, color, 20, center.x, center.y - SIZE - MARGIN)

    this.active = main

    this.context = context

    context.game.physics.arcade.enable(this)
  }

  swap () {
    this.active = !this.active

    this.recolorShape(this.active ? MAIN : DEACTIVATED)
  }
}
