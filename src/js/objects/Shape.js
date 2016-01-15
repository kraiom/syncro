import Drawing from './Drawing'

export default class Shape extends Phaser.Sprite {
  constructor (context, colors, W, H, x, y, builder, group) {
    const drawing = new Drawing(context.game, W, H, colors[0], builder)
    const opposite = new Drawing(context.game, W, H, colors[1], builder)

    group = group || context.game.world

    super(context.game, x, y, drawing)

    this._textures = [drawing, opposite]
    this._current = 0

    this.anchor.set(0.5, 0.5)
    group.add(this)
  }

  swap () {
    this._current = (this._current + 1) % 2

    this.loadTexture(this._textures[this._current])
  }
}
