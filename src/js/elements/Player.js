import Circle from '../objects/Circle'

const DEACTIVATED = '#f2f2f2'
const MAIN = '#FDD55A'

export default class Player extends Circle {
  constructor (context, main = true) {
    const bottom = context.game.height - 20

    let color = MAIN
    let x = 200

    if (!main) {
      color = DEACTIVATED
      x = 600
    }

    super(context, color, 20, x, bottom)

    this.context = context

    context.game.physics.arcade.enable(this)
  }
}
