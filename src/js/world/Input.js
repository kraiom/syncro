const KEYS = [
  'LEFT',
  'RIGHT',
  'SPACEBAR'
]

export default class Input {
  constructor (context) {
    this.context = context

    this.cursors = context.game.input.keyboard.createCursorKeys()

    context.game.input.keyboard.addKeyCapture(KEYS.map(name => {
      Phaser.Keyboard[name]
    }))
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
