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
    this.syncro = this.game.add.audio('syncro')
    this.tic.volume = 0.2
  }

  create () {
    this.syncro.play()

    this.title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 100,
      'S   Y   N   C   R   O',
      styling
    )

    this.start = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 70,
      'S t a r t',
      button_style
    )

    this.tutorial = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 120,
      'T u t o r i a l',
      button_style
    )

    this.credits = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 170,
      'A b o u t',
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

    this.credits.inputEnabled = true
    this.credits.input.useHandCursor = true

    this.credits.events.onInputDown.add(() => {
      this.state.start('about', true, false)
    })

    this.credits.events.onInputOver.add(() => {
      this.credits.setStyle(button_style_over)
      this.tic.play()
    })

    this.credits.events.onInputOut.add(() => {
      this.credits.setStyle(button_style)
    })

    this.title.anchor.setTo(0.5)
    this.start.anchor.setTo(0.5)
    this.credits.anchor.setTo(0.5)
    this.tutorial.anchor.setTo(0.5)
  }
}
