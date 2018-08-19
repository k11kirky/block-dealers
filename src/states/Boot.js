import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#BBBBBB'
  }

  preload() {
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
    this.state.start('Splash')
  }

  render() {
  }
}
