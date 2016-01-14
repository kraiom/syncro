const TUT = require('../../json/game.json').tutorial

// context should be "this.context"
const CHALLENGES = [
  function () {
    return this.PRESSED.left && this.PRESSED.right
  },

  function () {
    return this.PRESSED.space
  },

  function () {
    return this.game.time.now - this.START >= 3000
  }
]

const style = {
  font: 'Lato',
  fontSize: '30px',
  fontWeight: 100,
  fill: '#ffffff',
  wordWrap: true,
  wordWrapWidth: 150,
  textAlign: 'center'
}

export default class UI {
  constructor (context) {
    this.context = context

    this.sound = context.game.add.sprite(
      context.game.world.width - 40,
      40,
      context.music.mute ? 'off' : 'on'
    )

    this.sound.scale.setTo(0.4)

    this.sound.inputEnabled = true
    this.sound.input.useHandCursor = true
    this.sound.anchor.setTo(0.5)

    this.sound.events.onInputDown.add(() => {
      context.music.mute = !context.music.mute

      this.sound.loadTexture(context.music.mute ? 'off' : 'on')
    })

    this.CURRENT = 0
  }

  tutorial () {
    this.text = this.context.add.text(
      this.context.rails[0].T.x,
      50,
      TUT[this.CURRENT],
      style
    )

    this.sound.visible = false

    this.text.anchor.setTo(0.5, 0)
  }

  update () {
    if (!CHALLENGES[this.CURRENT].call(this.context)) {
      return
    }

    if (++this.CURRENT === TUT.length) {
      return this._start()
    }

    this.text.x = this.context.rails[1].T.x
    this.text.setText(TUT[this.CURRENT])

    this.context.START = this.context.game.time.now
  }

  _start () {
    this.text.visible = false
    this.sound.visible = true
    this.context.TUTORIAL = false
    this.context.start()
  }
}
