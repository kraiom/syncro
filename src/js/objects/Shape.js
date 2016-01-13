import Drawing from './Drawing'

export default class Shape extends Phaser.Sprite {
  constructor (context, color, W, H, x, y, builder, group) {
    const drawing = new Drawing(context.game, W, H, color, builder)
    
    group = group || context.game.world

    super(context.game, x, y, drawing)

    this.anchor.set(0.5, 0.5)
    group.add(this)

    this.context = context
    this.builder = builder
    this.color = color
    this.W = W
    this.H = H
    this.x = x
    this.y = y
  }

  recolorShape (color) {
    return this.loadTexture(
      new Drawing(this.context.game, this.W, this.H, color, this.builder)
    )
  }
}
