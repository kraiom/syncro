import Rectangle from '../objects/Rectangle'

const GAME = require('../../json/game.json')

export default class Maze {
  constructor (context) {
    this.context = context

    this.paddles = {
      R: context.game.add.physicsGroup(),
      L: context.game.add.physicsGroup()
    }

    this.last = {
      R: null,
      L: null
    }

    this._populate()
    this._populate(false)
  }

  _populate (first = true) {
    const j = first ? 0 : 1

    const PADDLE = first ? 'L' : 'R'

    for (let i = 0; i < 30; i++) {
      const GO_LEFT = Math.random() < 0.5

      const STICK_TO_WALL = Math.random() < 0.3

      const MIDDLE_BLOCK = Math.random() < 0.2

      const PLUS = Math.floor(Math.random() * 170) + 100

      const BASE = (this.last[PADDLE] === null) ? 0 : this.last[PADDLE].y

      const T = BASE -
                PLUS +
                Math.floor(Math.random() * Math.min(this.context.ELAPSED, 30))

      let W = 50 +
                Math.floor(Math.random() * 50) +
                Math.floor(Math.random() * Math.min(this.context.ELAPSED, 30))

      let L = this.context.rails[j].LB.x +
              this.context.rails[j].LB.width / 2 +
              (GO_LEFT ? 50 : (this.context.rails[j].T.width - 50)) +
              (STICK_TO_WALL ? Math.abs(Math.floor((W - 100) / 2)) : 0)

      if (MIDDLE_BLOCK) {
        W = 20 +
            Math.floor(Math.random() * 60) +
            Math.floor(Math.random() * Math.min(this.context.ELAPSED * 2, 50))

        L = this.context.rails[j].LB.x +
            this.context.rails[j].T.width / 2
      }

      const color = first ? GAME.borderA : GAME.borderB

      const data = [W, 10, L, T]

      const paddle = new Rectangle(this.context, color, ...data,
        this.paddles[PADDLE])

      this.context.game.physics.arcade.enable(paddle)

      paddle.checkWorldBounds = true

      paddle.body.immovable = true

      paddle.events.onOutOfBounds.add(this.vanished, paddle)

      this.last[PADDLE] = paddle

      if (i === 28 && first) {
        paddle._populate = this._populate
      }
    }
  }

  accelerate () {
    this.paddles.L.setAll('body.velocity.y', this.context.VELOCITY)
    this.paddles.R.setAll('body.velocity.y', this.context.VELOCITY)
  }

  swap () {
    this.paddles.L.callAll('swap')
    this.paddles.R.callAll('swap')
  }

  update () {
    this.context.game.physics.arcade.collide(
      this.context.players[0],
      this.paddles.L,
      this.context.lose,
      null,
      this.context
    )

    this.context.game.physics.arcade.collide(
      this.context.players[1],
      this.paddles.R,
      this.context.lose,
      null,
      this.context
    )
  }

  // paddle is the context
  vanished () {
    if (this.y >= 0) {
      if (this._populate) {
        this._populate()
        this._populate(false)
      }

      this.kill()
      this.destroy()
    }
  }
}
