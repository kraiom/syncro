const COLOR = require('../../json/game.json').bg

export default class Boot {
  preload () {
  }

  create () {
    this.game.stage.backgroundColor = COLOR
    this.state.start('preload', true, false, this.data)
  }
}
