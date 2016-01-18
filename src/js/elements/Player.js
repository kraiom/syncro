import Circle from '../objects/Circle'

const GAME = require('../../json/game.json')

const SIZE = 20

const MARGIN = 40

export default class Player extends Circle {
  constructor (context, center, main = true) {
    const colors = main ? GAME.playerA : GAME.playerB

    super(context, colors, 16, center.x, center.y - SIZE - MARGIN)

    this.active = main

    this.context = context

    context.game.physics.arcade.enable(this)
  }

  swap () {
    this.active = !this.active

    super.swap()
  }
}
