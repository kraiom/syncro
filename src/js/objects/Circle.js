import GeometrySprite from './GeometrySprite'

export default class Circle extends GeometrySprite {
  constructor (context, color, circumference) {
    const radius = circumference / 2

    const builder = function () {
      this.arc(radius, radius, radius, 0, 2 * Math.PI)
    }

    super(context.game, circumference, circumference, color, builder)
  }
}
