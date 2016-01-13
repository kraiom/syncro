import Rectangle from '../objects/Rectangle'

export default class Maze {
  constructor (context) {
    this.context = context

    this.paddles = {
      R: context.game.add.group(),
      L: context.game.add.group()
    }

    this._populate()
    this._populate(false)

    context.game.physics.arcade.enable([
      this.paddles.R,
      this.paddles.L
    ])

    this.paddles.R.setAll('body.velocity.y', 100)
    this.paddles.L.setAll('body.velocity.y', 100)

    // this.paddles.R.body.velocity.y = 100
    // this.paddles.L.body.velocity.y = 100
  }

  _populate (first = true) {
    for (let i = 0; i < 30; i++) {
      const die = Math.random()

      const j = first ? 0 : 1

      const ADJ = (die < 0.5) ? 50 : (this.context.rails[j].T.width - 50)

      const DIF = i * 100

      const L = this.context.rails[j].LB.x +
                this.context.rails[j].LB.width / 2 +
                ADJ

      const color = this.context.rails[j].LB.color

      const data = [100, 10, L, 200 - DIF]

      const paddle = new Rectangle(this.context, color, ...data)

      paddle.checkWorldBounds = true

      paddle._visible = (200 - DIF) >= 0

      paddle.events.onOutOfBounds.add(this.vanished, paddle);
      paddle.events.onEnterBounds.add(this.appeared, paddle);

      this.context.game.physics.arcade.enable(paddle)

      this.paddles.R.addChild(paddle)
    }
  }

  appeared () {
    this._visible = true
  }

  vanished () {
    if (!this.inCamera && this._visible) {
      this.kill()
    }
  }
}
