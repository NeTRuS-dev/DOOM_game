<template>
    <div>
        <canvas ref="gamecanvas"
                @mousemove="canvas_mouse_move"
                @click="canvas_click">
        </canvas>
    </div>
</template>

<script lang="js">
    import game_sound from '@/resourses/sound.mp3';
    import game_field_bg from '@/resourses/game_field_bg.jpg';
    import {DoomGuy} from "@/js/doomguy.ts";
    import {BulletFactory} from "@/js/BulletFactory.ts";
    import {EnemiesFactory} from "@/js/EnemiesFactory.ts";

    export default {
        name: "main-game",
        props: {
            player_name: String,
        },
        data() {
            return {
                doomGuy: undefined,
                player_mouse_coords: {
                    x: this.max_x * 0.5,
                    y: this.max_y * 0.7
                },
                game_field_bg: new Image(),
            }
        },
        watch: {
            "doomGuy.killed": function (val) {
                if (val === true) {
                    //end
                    this.sound.pause();
                    this.sendScores();
                }
            }
        },
        created() {
            this.canv = undefined;
            this.ctx = undefined;
            this.max_x = 0;
            this.max_y = 0;
            this.in_focus = true;
            this.sound = new Audio();
            this.timer = new Date(0);
            this.timer_interval = undefined;
            this.moving_interval = undefined;
            this.pressed_keys = [];
            this.enemies_factory = new EnemiesFactory(3);
            this.enemies_bullet_factory = new BulletFactory();

            this.timer.setHours(0);
            this.timer.setMinutes(0);
            this.timer.setSeconds(0);
        },
        mounted() {
            this.sound.src = game_sound;
            this.setup_canvas();
            this.sound.volume = 0.0;
            this.sound.loop = true;
            this.game_field_bg.src = game_field_bg;
            document.addEventListener('keydown', this.keydown_method);
            document.addEventListener('keyup', this.keyup_method);
            window.addEventListener('focus', this.focus_in);
            window.addEventListener('blur', this.focus_out);
            window.addEventListener('resize', this.setup_canvas);
            this.init_game();
            this.play();
        },
        beforeDestroy() {
            clearInterval(this.moving_interval);
            clearInterval(this.timer_interval);
            document.removeEventListener('keydown', this.keydown_method);
            document.removeEventListener('keyup', this.keyup_method);
            window.removeEventListener('focus', this.focus_in);
            window.removeEventListener('blur', this.focus_out);
            window.removeEventListener('resize', this.setup_canvas);

        },
        methods: {
            setup_canvas() {
                let app = document.body;
                this.canv = this.$refs.gamecanvas;
                this.ctx = this.canv.getContext('2d');
                let bodyCoords = app.getBoundingClientRect();
                this.canv.height = bodyCoords.height * 0.84;
                this.canv.width = bodyCoords.width * 0.8;
                this.max_x = this.canv.width;
                this.max_y = this.canv.height;
            },
            keydown_method(e) {
                if (this.in_focus) {
                    if (this.pressed_keys.indexOf(e.code) === -1) {
                        this.pressed_keys.push(e.code);
                    }
                }
            },
            keyup_method(e) {
                if (this.in_focus) {
                    let index = this.pressed_keys.indexOf(e.code);
                    if (index !== -1) {
                        this.pressed_keys.splice(index, 1);
                    }
                }
            },
            focus_in() {
                this.in_focus = true;
            },
            focus_out() {
                this.in_focus = false;
                this.pressed_keys.splice(0);
            },
            canvas_mouse_move(e) {
                this.player_mouse_coords = {
                    x: Math.round(e.clientX - this.canv.getBoundingClientRect().left),
                    y: Math.round((e.clientY - this.canv.getBoundingClientRect().top))
                }
            },
            canvas_click() {
                this.doomGuy.try_to_shoot(this.player_mouse_coords);
            },
            timer_interval_func() {
                if (this.in_focus) {
                    let tmp = this.timer.getSeconds() + 1;
                    if (tmp >= 60) {
                        this.enemies_factory.maxEnemyCount++;
                    }
                    this.timer.setSeconds(tmp);
                    //place enemy
                    this.enemies_factory.generateNewEnemy(this.max_x, this.max_y, this.doomGuy);
                }
            },
            moving_interval_func() {
                if (this.in_focus) {
                    this.doomGuy.makeMoves(this.pressed_keys);
                    this.doomGuy.bullet_factory.make_bullets_step(this.enemies_factory.CreatedEnemiesList);
                    //enemies
                    for (let enemy of this.enemies_factory.CreatedEnemiesList) {
                        if (Object.getPrototypeOf(Object.getPrototypeOf(enemy)).constructor.name === 'NPC_with_bullets') {
                            enemy.try_to_shoot(this.enemies_bullet_factory, this.doomGuy);
                        } else {
                            enemy.moveTo(this.max_x, this.max_y, this.doomGuy);
                        }
                    }
                    this.enemies_bullet_factory.make_bullets_step([this.doomGuy]);
                    this.enemies_factory.removeDeadEnemies();
                }
            },
            init_game() {
                this.sound.play();
                this.doomGuy = new DoomGuy(this.max_x / 2, this.max_y / 2, this.max_x, this.max_y);
                this.timer_interval = setInterval(this.timer_interval_func, 1000);
                this.moving_interval = setInterval(this.moving_interval_func, 1000 / 60);
            },
            sendScores() {
                fetch('/server_add_score.php',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'player_name': this.player_name,
                            'demons_killed': this.doomGuy.target_hits,
                            'time_alive': this.timer.toTimeString().slice(0, 8)
                        })
                    })
                    .then(response => response.json())
                    .then(player_id => {
                        this.$emit('player-game-id', Number.parseInt(player_id));
                        this.$emit('set-stage', 2);
                    });
            },
            play() {
                if (this.in_focus) {
                    this.ctx.clearRect(0, 0, this.max_x, this.max_y);
                    //bg
                    this.ctx.drawImage(this.game_field_bg, 0, 0, this.max_x, this.max_y);

                    this.doomGuy.adjustImage(this.player_mouse_coords);
                    this.doomGuy.drawSelf(this.ctx);
                    this.doomGuy.bullet_factory.drawBullets(this.ctx);

                    //enemies
                    for (let enemy of this.enemies_factory.CreatedEnemiesList) {
                        //draw
                        enemy.adjustImage(this.doomGuy);
                        enemy.drawSelf(this.ctx);
                    }
                    this.enemies_bullet_factory.drawBullets(this.ctx);
                    //lifes
                    this.doomGuy.drawLifes(this.ctx);
                    //timer
                    this.ctx.fillStyle = 'rgba(255,255,255,255)';
                    this.ctx.font = '22px serif';
                    this.ctx.fillText(`${this.timer.getHours() !== 0 ? `${this.timer.getHours()}:` : ''}${this.timer.getMinutes()}:${this.timer.getSeconds()}`, this.max_x * 0.9, this.max_y * 0.1);
                    //kills
                    this.ctx.font = '24px serif';
                    this.ctx.fillText(`Убито: ${this.doomGuy.target_hits}`, this.max_x * 0.87, this.max_y * 0.2);
                }
                window.requestAnimationFrame(this.play);
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        background-image: url("../../resourses/game_bg.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    canvas {
        cursor: crosshair;
    }
</style>