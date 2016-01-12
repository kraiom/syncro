export default class GeometrySprite extends Phaser.BitmapData {
  constructor (game, width, height, color, builder) {
    super(game, null, width, height)

    this.ctx.beginPath()

    builder.apply(this.ctx)

    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  draw (x = 0, y = 0) {
    this.addToWorld(x, y, 0.5, 0.5, 1, 1)
  }
}
