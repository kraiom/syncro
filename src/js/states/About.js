const COLOR = require('../../json/game.json').active.player

const styling = {
  font: 'Lato',
  fontSize: '72px',
  fontWeight: 100,
  fill: '#ffffff'
}

const button_style = {
  font: 'Lato',
  fontSize: '28px',
  fontWeight: 100,
  fill: '#ffffff'
}

const text_style = {
  font: 'Lato',
  fontSize: '18px',
  fontWeight: 100,
  fill: '#ffffff',
  wordWrap: true,
  wordWrapWidth: 430
}

const button_style_over = {
  font: 'Lato',
  fontSize: '28px',
  fontWeight: 100,
  fill: COLOR
}

export default class About {
  preload () {
    this.tic = this.game.add.audio('tic')
    this.tic.volume = 0.2
  }

  create () {
    const title = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 100,
      'S   Y   N   C   R   O',
      styling
    )

    const back = this.add.text(
      this.game.world.width - 100,
      40,
      'b a c k',
      button_style
    )

    const cc = this.add.text(
      30,
      250,
      `Assets licensed under Creative Commons:
      By Attribution 3.0 License (creativecommons.org/licenses/by/3.0/)

      - "Rhinoceros" Kevin MacLeod (incompetech.com)
      - "korgpoly800bs C6" patchen (freesound.org)
      - "Mute Icon" Visual Pharm (icons8.com)
      - "Medium, volume icon" Visual Pharm (icons8.com)`,
      text_style
    )

    this.add.text(
      500,
      250,
      `Copyright © 2016

      Breno Freitas (breno.io)
      Eduardo Rocha (@romaoneles)`,
      button_style
    )

    back.inputEnabled = true
    back.input.useHandCursor = true

    back.events.onInputDown.add(() => {
      this.state.start('splash', true, false)
    })

    back.events.onInputOver.add(() => {
      back.setStyle(button_style_over)
      this.tic.play()
    })

    back.events.onInputOut.add(() => {
      back.setStyle(button_style)
    })

    title.anchor.setTo(0.5)
    back.anchor.setTo(0.5)
  }
}
