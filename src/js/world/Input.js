const KEYS = [
  'LEFT',
  'RIGHT',
  'SPACEBAR'
]

export default class Input {
  constructor (context) {
    this.context = context

    this.cursors = context.game.input.keyboard.createCursorKeys()

    KEYS.forEach(name => {
      const key = context.game.input.keyboard.addKey(Phaser.Keyboard[name])
      key.onDown.add(this.compute.bind(this, name))
    })

    context.game.input.keyboard.addKeyCapture(KEYS.map(name => {
      Phaser.Keyboard[name.toUpperCase()]
    }))
  }

  compute (name) {
    if (this.context.paused) {
      return
    }

    name = name.toLowerCase()

    this.context[`on_${name}_down`]()
  }
}
