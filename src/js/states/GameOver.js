export default class GameOver {
  preload () {
    let styling = {
      font: 'Lato',
      fontSize: '72px',
      fontWeight: 100,
      fill: '#ffffff'
    }

    this.loading = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY,
      'G a m e  O v e r',
      styling
    )

    this.loading.anchor.setTo(0.5)
  }

  init (data) {
    this.data = data
  }

  create () {
    // this.state.start('game', true, false, this.data)
  }
}
