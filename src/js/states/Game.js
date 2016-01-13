import World from '../world/World'
import UI from '../ui/UI'
import Player from '../elements/Player'

export default class Game extends World {
  create () {
    super.create()

    this.ui = new UI(this)

    this.paused = false

    this.players = [
      new Player(this),
      new Player(this, false)
    ]

    this.main = 0
  }

  update () {
    super.update()
  }

  lost () {
  }

  won () {
  }

  pause () {
    this.paused = true
    super.pause()
  }

  resume () {
    this.paused = false
    super.resume()
  }
}
