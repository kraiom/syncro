export default class Preload {
  preload () {
    let styling = {
      font: 'Lato',
      fontSize: '72px',
      fontWeight: 100,
      fill: '#ffffff'
    }

    this.loading = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY + 10,
      'L o a d i n g . . .',
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
    this.state.start('splash', true, false, this.data)
  }

  /*
    "Mute Icon" and "Medium, volume icon" Visual Pharm (icons8.com)
    Licensed under Creative Commons: By Attribution 3.0 License
    http://creativecommons.org/licenses/by/3.0/
  */

  loadSprites () {
    this.load.image('on', 'assets/img/on.png')
    this.load.image('off', 'assets/img/off.png')
  }

  /*
    "Rhinoceros" Kevin MacLeod (incompetech.com)
    Licensed under Creative Commons: By Attribution 3.0 License
    http://creativecommons.org/licenses/by/3.0/
  */

  loadAudios () {
    let audios = ['Rhinoceros', 'syncro', 'gameover']

    audios.forEach(name => {
      this.load.audio(name, [
        `assets/audio/${name}.aac`,
        `assets/audio/${name}.ogg`
      ])
    })
  }
}
