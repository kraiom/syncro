import Shape from './Shape'

export default class Circle extends Phaser.Sprite {
  constructor (context, color, circumference, x, y, group) {
    const radius = circumference / 2

    const builder = function () {
      this.arc(radius, radius, radius, 0, 2 * Math.PI)
    }

    const shape = new Shape(context.game, circumference, circumference, color,
      builder)

    group = group || context.game.world

    super(context.game, x, y)

    this.anchor.set(0.5)

    group.create(x, y, shape)
  }
}
