// @ts-ignore
import heart_src from '@/resourses/heart.svg';

import {NPC_with_bullets} from "@/js/abstract_classes/npc_with_bullets";
import {BulletFactory} from "@/js/BulletFactory";
import {IElemWithCoords} from "@/js/helpers";


enum KEYS {
    W = 'KeyW',
    A = 'KeyA',
    S = 'KeyS',
    D = 'KeyD'
}

export class DoomGuy extends NPC_with_bullets {
    private readonly speed: number;
    private lives: number;
    private bullet_factory: BulletFactory;
    private readonly heartImage: HTMLImageElement;

    constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number) {
        super(start_x, start_y, constraint_x, constraint_y);
        this.speed = Math.min(constraint_x, constraint_y) * 0.005;
        this.size_x = constraint_x * 0.05;
        this.size_y = constraint_y * 0.10;
        this.lives = 3;
        this.setImage('bottom');
        this.can_shoot = true;
        this.bullet_factory = new BulletFactory();

        this.heartImage = new Image();
        this.heartImage.src = heart_src;

    }

    try_to_shoot(target: IElemWithCoords) {
        if (this.can_shoot) {
            this.bullet_factory.createBullet(this, target, this.constraint_x, this.constraint_y);
            this.can_shoot = false;
            setTimeout(() => {
                this.can_shoot = true;
            }, 500);
        }
    }

    gotHit() {
        this.lives--;
        if (this.lives <= 0) {
            //end
            this.killed = true;
        }
    }

    drawLifes(ctx: CanvasRenderingContext2D) {
        const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, constraint_x: number, constraint_y: number) => {
            ctx.drawImage(this.heartImage, x, y + constraint_y * 0.02, constraint_x * 0.03, constraint_y * 0.05);

        };
        let x = this.constraint_x * 0.06;
        let y = this.constraint_y * 0.05;
        let increment_x = this.constraint_x * 0.05;

        for (let i = 0; i < this.lives; i++) {
            drawHeart(ctx, x, y, this.constraint_x, this.constraint_y);
            x += increment_x;
        }
    }

    makeMoves(pressed_keys: string[]) {
        pressed_keys.forEach((elem) => {

            switch (elem) {
                case KEYS.W:
                    if ((this.y - this.size_y / 2) - this.speed > 0) {
                        this.y -= this.speed;
                    }
                    break;
                case KEYS.A:
                    if ((this.x - this.size_x / 2) - this.speed > 0) {
                        this.x -= this.speed;
                    }
                    break;
                case KEYS.S:
                    if ((this.y + this.size_y / 2) + this.speed < this.constraint_y) {
                        this.y += this.speed;
                    }
                    break;
                case KEYS.D:
                    if ((this.x + this.size_x / 2) + this.speed < this.constraint_x) {
                        this.x += this.speed;
                    }
                    break;
            }
        });

    }

}