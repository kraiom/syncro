const GAME = require('../../json/game.json')

export default class UI {
  constructor (context) {
    this.context = context
  }

  pause () {
    this.context.pause()
  }

  resume () {
    this.context.resume()
  }
}