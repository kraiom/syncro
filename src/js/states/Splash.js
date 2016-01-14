const COLOR = require('../../json/game.json').active.player

const styling = {
  font: 'Lato',
  fontSize: '72px',
  fontWeight: 100,
  fill: '#ffffff'
}

const button_style = {
  font: 'Lato',
  fontSize: '28px',
  fontWeight: 100,
  fill: '#ffffff'
}

const button_style_over = {
  font: 'Lato',
  fontSize: '28px',
  fontWeight: 100,
  fill: COLOR
}

export default class Splash {
  preload () {
    this.tic = this.game.add.audio('tic')
    this.tic.volume = 0.2
  }

  create () {
    this.title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 100,
      'S   Y   N   C   R   O',
      styling
    )

    this.start = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 90,
      'S t a r t',
      button_style
    )

    this.tutorial = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 150,
      'T u t o r i a l',
      button_style
    )

    this.start.inputEnabled = true
    this.start.input.useHandCursor = true

    this.start.events.onInputDown.add(() => {
      this.state.start('game', true, false)
    })

    this.start.events.onInputOver.add(() => {
      this.start.setStyle(button_style_over)
      this.tic.play()
    })

    this.start.events.onInputOut.add(() => {
      this.start.setStyle(button_style)
    })

    this.tutorial.inputEnabled = true
    this.tutorial.input.useHandCursor = true

    this.tutorial.events.onInputDown.add(() => {
      this.state.start('game', true, false, {
        tutorial: true
      })
    })

    this.tutorial.events.onInputOver.add(() => {
      this.tutorial.setStyle(button_style_over)
      this.tic.play()
    })

    this.tutorial.events.onInputOut.add(() => {
      this.tutorial.setStyle(button_style)
    })

    const SYNCRO = this.game.add.audio('syncro')
    SYNCRO.play()

    this.title.anchor.setTo(0.5)
    this.start.anchor.setTo(0.5)
    this.tutorial.anchor.setTo(0.5)
  }
}
