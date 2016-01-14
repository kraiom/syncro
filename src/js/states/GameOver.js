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

const score_style = {
  font: 'Lato',
  fontSize: '200px',
  fontWeight: 100,
  fill: COLOR
}

export default class GameOver {
  create () {
    this.title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 150,
      'G a m e  O v e r',
      styling
    )

    this.score = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 20,
      this.data.time + '\'',
      score_style
    )

    this.again = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 180,
      'T r y  A g a i n',
      button_style
    )

    this.sound = this.add.sprite(
      this.game.world.width - 40,
      40,
      this.data.music.mute ? 'off' : 'on'
    )

    this.sound.scale.setTo(0.4)

    this.sound.inputEnabled = true
    this.sound.input.useHandCursor = true

    this.again.inputEnabled = true
    this.again.input.useHandCursor = true

    this.again.events.onInputDown.add(() => {
      this.state.start('game', true, false)
    })

    this.again.events.onInputOver.add(() => {
      this.again.setStyle(button_style_over)
    })

    this.again.events.onInputOut.add(() => {
      this.again.setStyle(button_style)
    })

    this.sound.events.onInputDown.add(() => {
      this.data.music.mute = !this.data.music.mute

      this.sound.loadTexture(this.data.music.mute ? 'off' : 'on')
    })

    this.title.anchor.setTo(0.5)
    this.again.anchor.setTo(0.5)
    this.score.anchor.setTo(0.5)
    this.sound.anchor.setTo(0.5)
  }

  init (data) {
    this.data = data
  }
}
