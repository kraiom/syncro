export default class GameOver {
  preload () {
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

    const score_style = {
      font: 'Lato',
      fontSize: '200px',
      fontWeight: 100,
      fill: '#d4d224'
    }

    this.loading = this.add.text(
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

    this.loading.anchor.setTo(0.5)
    this.again.anchor.setTo(0.5)
    this.score.anchor.setTo(0.5)
  }

  init (time) {
    this.time = time
  }

  create () {
    // this.state.start('game', true, false, this.data)
  }
}
