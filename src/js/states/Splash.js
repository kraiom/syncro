const COLOR = require('../../json/game.json').active.player

const styling = {
  font: 'Lato',
  fontSize: '72px',
  fontWeight: 100,
  fill: '#ffffff'
}

const button_style = {
  font: 'Lato',
  fontSize: '30px',
  fontWeight: 100,
  fill: '#ffffff'
}

const button_style_over = {
  font: 'Lato',
  fontSize: '30px',
  fontWeight: 100,
  fill: COLOR
}

export default class Splash {
  create () {
    this.title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 100,
      'S   Y   N   C   R   O',
      styling
    )

    this.start = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 80,
      'S t a r t',
      button_style
    )

    // this.sound = this.add.sprite(
    //   this.game.world.width - 40,
    //   40,
    //   this.data.music.mute ? 'off' : 'on'
    // )

    // this.sound.scale.setTo(0.4)

    // this.sound.inputEnabled = true
    // this.sound.input.useHandCursor = true

    // this.sound.events.onInputDown.add(() => {
    //   this.data.music.mute = !this.data.music.mute
    //
    //   this.sound.loadTexture(this.data.music.mute ? 'off' : 'on')
    // })

    this.start.inputEnabled = true
    this.start.input.useHandCursor = true

    this.start.events.onInputDown.add(() => {
      this.state.start('game', true, false, this.data)
    })

    this.start.events.onInputOver.add(() => {
      this.start.setStyle(button_style_over)
    })

    this.start.events.onInputOut.add(() => {
      this.start.setStyle(button_style)
    })

    const SYNCRO = this.game.add.audio('syncro')
    SYNCRO.play()

    this.title.anchor.setTo(0.5)
    this.start.anchor.setTo(0.5)
    // this.sound.anchor.setTo(0.5)
  }

  init (data) {
    this.data = data
  }
}
