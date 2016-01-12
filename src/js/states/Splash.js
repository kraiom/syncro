export default class Splash {
  create () {
    let style = {
      fill: '#ffffff'
    }

    let text = this.game.add.text(
      this.game.camera.width / 2,
      this.game.camera.height / 2,
      'This is the splash screen (click to game)',
      style
    )

    text.anchor.setTo(0.5)

    text.inputEnabled = true

    text.events.onInputDown.add(this.start, this)
  }

  start () {
    this.game.state.start('game', true, false, this.data)
  }
}
