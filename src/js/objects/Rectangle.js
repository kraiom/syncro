import Shape from './Shape'

export default class Rectangle extends Shape {
  constructor (context, color, W, H, x, y, group) {
    const builder = function () {
      this.rect(0, 0, W, H)
    }

    super(context, color, W, H, x, y, builder, group)
  }
}
