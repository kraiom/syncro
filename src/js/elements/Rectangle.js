import GeometrySprite from '../objects/GeometrySprite'

export default class Rectangle extends GeometrySprite {
  constructor (context, color, W, H) {
    H = H ? H : W

    const builder = function () {
      this.rect(0, 0, W, H)
    }

    super(context.game, W, H, color, builder)
  }
}
