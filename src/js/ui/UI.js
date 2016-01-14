export default class UI {
  constructor (context) {
    this.sound = context.game.add.sprite(
      context.game.world.width - 40,
      40,
      context.music.mute ? 'off' : 'on'
    )

    this.sound.scale.setTo(0.4)

    this.sound.inputEnabled = true
    this.sound.input.useHandCursor = true
    this.sound.anchor.setTo(0.5)

    this.sound.events.onInputDown.add(() => {
      context.music.mute = !context.music.mute

      this.sound.loadTexture(context.music.mute ? 'off' : 'on')
    })
  }

  pause () {
  }

  resume () {
  }
}
