import World from '../world/World'
import UI from '../ui/UI'
import Player from '../elements/Player'
import Rail from '../elements/Rail'
import Maze from '../elements/Maze'

const BASE_VELOCITY = 100

export default class Game extends World {
  create () {
    super.create()

    this.ui = new UI(this)

    this.paused = false

    this.main = 0

    this.VELOCITY = 100

    this.START = this.game.time.now

    this.rails = [
      new Rail(this),
      new Rail(this, false)
    ]

    this.players = [
      new Player(this, this.rails[0].basis),
      new Player(this, this.rails[1].basis, false)
    ]

    this.maze = new Maze(this)
  }

  update () {
    const VEL_UP = parseInt((this.game.time.now - this.START) / 1000)

    this.VELOCITY = BASE_VELOCITY + VEL_UP * 5
    
    super.update()
    this.maze.update()

    this.game.physics.arcade.collide(this.players[0], this.rails[0].RB)
    this.game.physics.arcade.collide(this.players[0], this.rails[0].LB)
    this.game.physics.arcade.collide(this.players[1], this.rails[1].RB)
    this.game.physics.arcade.collide(this.players[1], this.rails[1].LB)
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
