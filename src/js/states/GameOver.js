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
  preload () {
    this.gameover = this.game.add.audio('gameover')
    this.tic = this.game.add.audio('tic')
    this.tic.volume = 0.2
  }

  create () {
    this.gameover.play()

    this.title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 150,
      'G a m e  O v e r',
      styling
    )

    this.score = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 20,
      this.time + '\'',
      score_style
    )

    this.again = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 180,
      'T r y  A g a i n',
      button_style
    )

    this.again.inputEnabled = true
    this.again.input.useHandCursor = true

    this.again.events.onInputDown.add(() => {
      this.state.start('game', true, false)
    })

    this.again.events.onInputOver.add(() => {
      this.again.setStyle(button_style_over)
      this.tic.play()
    })

    this.again.events.onInputOut.add(() => {
      this.again.setStyle(button_style)
    })

    this.title.anchor.setTo(0.5)
    this.again.anchor.setTo(0.5)
    this.score.anchor.setTo(0.5)
  }

  init (time) {
    this.time = time
  }
}
