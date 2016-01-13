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

    super(context.game, x, y, shape)

    this.context = context

    this.circumference = circumference

    this.anchor.set(0.5, 0.5)

    this.builder = builder

    group.add(this)
  }

  recolorShape (color) {
    this.loadTexture(new Shape(this.context.game, this.circumference,
      this.circumference, color, this.builder))
  }
}
