/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.game.add.tilemap('tilemap');
    this.map.addTilesetImage('roguelikeCity_magenta', 'tiles');

    this.worldLayer = this.map.createLayer('world');
    this.worldLayer.setScale(1.5, 1.5)

    this.collisionLayer = this.map.createLayer('collisions');
    this.collisionLayer.setScale(1.5, 1.5)
    this.collisionLayer.debug = true;
    this.game.physics.enable(this.collisionLayer, Phaser.Physics.ARCADE);
    this.map.setCollision(1,true,this.collisionLayer)

    this.map.setCollision(1, 1, 1, 1);

    this.player = new Player({
      game: this.game,
      x: 70,
      y: 90,
      asset: 'player'
    })

    this.player = this.game.add.existing(this.player),
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    // this.game.physics.arcade.gravity.y = 250;
    this.player.body.bounce.y = 0.2;
    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;

    // this.extraLayer = this.map.createLayer('extras');
    // this.extraLayer.scale = {x:1.5, y:1.5};
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.collisionLayer, () => {
      console.log('hit')
    });
  }

  render() {
    game.debug.bodyInfo(this.player, 16, 24);
  }
}
