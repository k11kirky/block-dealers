import Phaser from 'phaser'

class Player extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.speed = 2
  }

  update () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.y -= this.speed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.y += this.speed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.x -= this.speed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.x += this.speed;
    }
  }
}

export default Player;