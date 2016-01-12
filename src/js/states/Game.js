import World from '../world/World'
import UI from '../ui/UI'

export default class Game extends World {
  create () {
    super.create()

    this.ui = new UI(this)

    this.paused = false
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
