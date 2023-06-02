class Title extends Phaser.Scene
{
    constructor()
    {
        super("title");
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image("ropo", "ropo.png");
        this.load.image("click", "click.png");
        this.load.image("snail", "snail.png");
    }

    create()
    {
        this.titleText = this.add.text
        (
            175,
            -100,
            "Roly Poly: To the End",
            {
                font: "65px Comic Sans",
                color: "#009c2c",
                align: "center",
            }
        );

        this.click = this.add.image
        (
            475,
            300,
            'click',
        );

        this.ropo1 = this.add.image
        (
            -100,
            300,
            'ropo',
        );

        this.ropo2 = this.add.image
        (
            -120,
            450,
            'ropo',
        );

        this.snail = this.add.image
        (
            -300,
            -300,

            'snail',
        );

        this.click.setScale(0);
        this.ropo1.setScale(0.25);
        this.ropo2.setScale(0.5);
        this.snail.setScale(0.35);

        this.snail.angle = 120;

        this.tweens.add({
            targets: this.titleText,
            y: 100,
            duration: 1000,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.click,
            scaleX: 0.4,
            scaleY: 0.4,
            duration: 4000,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.ropo1,
            x: 1300,
            duration: 3500,
            ease: 'Linear',
        })

        this.tweens.add({
            targets: this.ropo2,
            x: 1300,
            duration: 2000,
            ease: 'Linear',
        })

        this.tweens.add({
            targets: this.snail,
            x: 1060,
            y: 640,
            duration: 5000,
            ease: 'Linear',
        })

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('victory'));
        });
    }
}

class Victory extends Phaser.Scene
{
    constructor()
    {
        super("victory");
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image("medal", "medal.png");
        this.load.image("ropo", "ropo.png");
        this.load.image("click", "click.png");
    }

    create()
    {
        this.ropo = this.add.image
        (
            250,
            1000,
            "ropo",
        )

        this.medal = this.add.image
        (
            700,
            1000,
            "medal",
        )

        this.click = this.add.image
        (
            900,
            50,
            "click"
        )

        this.click.setScale(0.2);

        this.winText = this.add.text
        (
            100,
            -100,
            "You Win!",
            {
                font: "80px Comic Sans",
                color: "#009c2c",
                align: "center",
            }
        )

        this.tweens.add({
            targets: this.winText,
            y: 100,
            duration: 4000,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.ropo,
            y: 425,
            duration: 1000,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.medal,
            y: 350,
            duration: 2500,
            ease: 'Linear',
        });

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('title'));
        });
    }
}

let config = 
{
    type: Phaser.WEBGL,
    width: 960,
    height: 540,
    backgroundColor: "#63efff",
    scene: [Title, Victory],
}

let game = new Phaser.Game(config);