import Shape from './Shape'

export default class Rectangle extends Phaser.Sprite {
  constructor (context, color, W, H, x, y, group) {
    const builder = function () {
      this.rect(0, 0, W, H)
    }

    const shape = new Shape(context.game, W, H, color, builder)

    group = group || context.game.world

    super(context.game, x, y, shape)

    this.anchor.set(0.5)

    group.add(this)
  }
}
