export default class Preload {
  preload () {
    let styling = {
      font: 'Courier',
      fontSize: '30px',
      fill: '#ffffff'
    }

    this.loading = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 10,
      'Loading',
      styling
    )

    this.loading.anchor.setTo(0.5)

    this.loadSprites()
    this.loadAudios()
  }

  init (data) {
    this.data = data
  }

  create () {
    this.state.start('game', true, false, this.data)
  }

  loadSprites () {
  }

  loadAudios () {
    let audios = []

    audios.forEach(name => {
      this.load.audio(name, [
        `assets/audio/${name}.aac`,
        `assets/audio/${name}.ogg`
      ])
    })
  }
}
