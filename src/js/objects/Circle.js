import Shape from './Shape'

export default class Circle extends Shape {
  constructor (context, color, circumference, x, y, group) {
    const radius = circumference / 2

    const builder = function () {
      this.arc(radius, radius, radius, 0, 2 * Math.PI)
    }

    super(context, color, circumference, circumference, x, y, builder, group)
  }
}
