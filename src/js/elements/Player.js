import Circle from '../objects/Circle'

const DEACTIVATED = '#f2f2f2'
const MAIN = '#FDD55A'

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

  hit () {
    if (this.active) {
      const TIME = (this.context.game.time.now - this.context.START) / 1000

      this.context.state.start('gameover', true, false, parseInt(TIME))
    }
  }
}
