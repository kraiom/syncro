const KEYS = [
  'LEFT',
  'RIGHT'
]

export default class Input {
  constructor (context) {
    this.context = context

    this.cursors = context.game.input.keyboard.createCursorKeys()

    this.space = context.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    this.space.onDown.add(this.context.on_spacebar_down, context)
  }

  update () {
    if (this.context.paused) {
      return
    }

    KEYS.forEach(name => {
      if (this.context.game.input.keyboard.isDown(Phaser.Keyboard[name])) {
        this.context[`on_${name.toLowerCase()}_down`]()
      }
    })
  }
}
