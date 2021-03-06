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

    this.populate()
  }

  populate () {
    this._populate()
    this._populate(false)
  }

  _populate (first = true) {
    const j = first ? 0 : 1

    const PADDLE = first ? 'L' : 'R'

    for (let i = 0; i < GAME.INIT_PADDLES; i++) {
      const GO_LEFT = Math.random() < 0.5

      const MIDDLE_BLOCK = Math.random() < 0.3

      let MOVING = false

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
              (GO_LEFT ? 0 : (this.context.rails[j].T.width - W))

      if (MIDDLE_BLOCK) {
        MOVING = Math.random() < 0.3

        W = 20 +
            Math.floor(Math.random() * 60) +
            Math.floor(Math.random() * Math.min(this.context.ELAPSED * 2, 50))

        L = this.context.rails[j].LB.x +
            this.context.rails[j].LB.width / 2 +
            this.context.rails[j].T.width / 2 -
            (MOVING ? 0 : Math.floor(W / 2))
      }

      let color = GAME.borderB

      if (this.context.players[j].active) {
        color = GAME.borderA
      }

      const data = [W, this.context.rails[j].LB.width, L, T]

      const paddle = new Rectangle(this.context, color, ...data,
        this.paddles[PADDLE])

      paddle.anchor.set(0, 0)

      this.context.game.physics.arcade.enable(paddle)

      if (MOVING) {
        paddle.body.angularVelocity = 15
        paddle.anchor.set(0.5, 0.5)
      }

      paddle.checkWorldBounds = true

      paddle.body.immovable = true

      paddle.events.onOutOfBounds.add(this.vanished, paddle)

      this.last[PADDLE] = paddle

      if (i === GAME.INIT_PADDLES - 5 && first) {
        paddle._populate = this.populate.bind(this)
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
      }

      this.kill()
      this.destroy()
    }
  }
}
