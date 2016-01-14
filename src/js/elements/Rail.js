import Rectangle from '../objects/Rectangle'

const GAME = require('../../json/game.json')

const MAIN = {
  border: GAME.active.border,
  trail: GAME.active.trails
}

const DEACTIVATED = {
  border: GAME.deactivated.border,
  trail: GAME.deactivated.trails
}

export default class Rail {
  constructor (context, main = true) {
    this.context = context

    const color = main ? MAIN : DEACTIVATED

    this.active = main

    const pos = this._computePosition()

    this.LB = new Rectangle(context, color.border, ...pos.LB)
    this.RB = new Rectangle(context, color.border, ...pos.RB)
    this.T = new Rectangle(context, color.trail, ...pos.T)

    context.game.physics.arcade.enable([
      this.LB,
      this.RB,
      this.T
    ])

    this.LB.body.immovable = true
    this.RB.body.immovable = true
    this.T.body.immovable = true
  }

  get basis () {
    return {
      x: Math.floor(this.T.body.center.x - this.T.body.width / 2),
      y: this.T.body.height
    }
  }

  swap () {
    this.active = !this.active

    const color = this.active ? MAIN : DEACTIVATED

    this.LB.recolorShape(color.border)
    this.RB.recolorShape(color.border)
    this.T.recolorShape(color.trail)
  }

  _computePosition () {
    const MARGIN = Math.floor(GAME.width * 0.2)

    const TOTAL_W = Math.floor(GAME.width * 0.2)

    const BORDER_W = Math.floor((TOTAL_W * 0.05) / 2)
    const TRAIL_W = Math.floor(TOTAL_W - BORDER_W)

    const H = this.context.game.height
    const HH = Math.floor(H / 2)

    const ADJ = this.active ? 0 : MARGIN + 1.5 * BORDER_W + TRAIL_W

    return {
      LB: [BORDER_W, H, ADJ + MARGIN, HH],
      RB: [BORDER_W, H, ADJ + MARGIN + BORDER_W + TRAIL_W, HH],
      T: [TRAIL_W, H, ADJ + MARGIN + BORDER_W / 2 + TRAIL_W / 2, HH]
    }
  }
}
