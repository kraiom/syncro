export default class GeometrySprite extends Phaser.BitmapData {
  constructor (game, width, height, color, builder) {
    super(game, null, width, height)

    this.game = game

    this.ctx.beginPath()

    builder.apply(this.ctx)

    this.ctx.fillStyle = color
    this.ctx.fill()
  }
}
