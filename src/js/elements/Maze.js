import Rectangle from '../objects/Rectangle'

const MAIN = {
  border: '#914410',
  trail: '#D46A24'
}

const DEACTIVATED = {
  border: '#464646',
  trail: '#a29c9c'
}

export default class Maze {
  constructor (context) {
    this.context = context

    this.paddles = {
      R: context.game.add.group(),
      L: context.game.add.group()
    }

    this._populate()
    this._populate(false)

    this.paddles.R.setAll('body.velocity.y', 100)
    this.paddles.L.setAll('body.velocity.y', 100)
  }

  _populate (first = true) {
    for (let i = 0; i < 30; i++) {
      const die = Math.random()

      const j = first ? 0 : 1

      const ADJ = (die < 0.5) ? 50 : (this.context.rails[j].T.width - 50)

      const DIF = i * 100

      const PLUS = Math.floor(Math.random() * 40)

      const L = this.context.rails[j].LB.x +
                this.context.rails[j].LB.width / 2 +
                ADJ

      const color = this.context.rails[j].LB.color

      const data = [100, 10, L, 200 - DIF]

      const paddle = new Rectangle(this.context, color, ...data)

      this.context.game.physics.arcade.enable(paddle)

      paddle.checkWorldBounds = true

      paddle.body.immovable = true

      paddle._visible = (200 - PLUS - DIF) >= 0

      paddle.events.onOutOfBounds.add(this.vanished, paddle)
      paddle.events.onEnterBounds.add(this.appeared, paddle)

      this.paddles[first ? 'L' : 'R'].addChild(paddle)
    }
  }

  swap () {
    ['L', 'R'].forEach(side => {
      this.paddles[side].children.forEach(paddle => {
        let color = MAIN

        if (side === 'L' && this.context.main === 1) {
          color = DEACTIVATED
        }

        if (side === 'R' && this.context.main === 0) {
          color = DEACTIVATED
        }

        paddle.recolorShape(color.border)
      })
    })
  }

  update () {
    const side = this.context.main === 0 ? 'L' : 'R'

    this.paddles[side].children.forEach(paddle => {
      this.context.game.physics.arcade.collide(
        this.context.players[this.context.main],
        paddle,
        this.context.players[this.context.main].hit,
        null,
        this.context.players[this.context.main]
      )
    })
  }

  // paddle is the context
  appeared () {
    this._visible = true
  }

  // paddle is the context
  vanished () {
    if (!this.inCamera && this._visible) {
      this.kill()
    }
  }
}
