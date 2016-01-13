import Rectangle from '../objects/Rectangle'

export default class Maze {
  constructor (context) {
    this.context = context

    this.paddles = context.game.add.group()
  }
}
