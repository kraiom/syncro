export default class Boot {
  preload () {
  }

  create () {
    this.game.stage.backgroundColor = '#10101C'
    this.state.start('preload', true, false, this.data)
  }
}
