import Game from './Game'
import Splash from './Splash'
import Preload from './Preload'
import Boot from './Boot'

const GAME_DATA = require('../../json/game')

window.GAME = function (handler) {
  Phaser.Game.prototype.GAME_DATA = GAME_DATA

  let game = new Phaser.Game(
    GAME_DATA.width,
    GAME_DATA.height,
    Phaser.AUTO,
    handler.target
  )

  game.state.add('boot', Boot)
  game.state.add('preload', Preload)
  game.state.add('splash', Splash)
  game.state.add('game', Game)

  game.state.start('boot', true, false, handler)
}
