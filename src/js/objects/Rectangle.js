import Shape from './Shape'

export default class Rectangle extends Phaser.Sprite {
  constructor (context, color, W, H, x, y, group) {
    const builder = function () {
      this.rect(0, 0, W, H)
    }

    const shape = new Shape(context.game, W, H, color, builder)

    group = group || context.game.world

    super(context.game, x, y, shape)

    this.anchor.set(0.5, 0.5)

    this.context = context

    this.builder = builder

    this.W = W

    this.H = H

    group.add(this)
  }

  recolorShape (color) {
    this.loadTexture(new Shape(this.context.game, this.W,
      this.H, color, this.builder))
  }
}
