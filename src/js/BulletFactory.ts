import {Bullet} from "@/js/bullet";
import {calcMovingDirection, IElemWithCoords} from "@/js/helpers";
import {NPC_with_bullets} from "@/js/abstract_classes/npc_with_bullets";
import {NPC} from "@/js/abstract_classes/npc";

export class BulletFactory {
    private _factoried_bullets: Bullet[];

    constructor() {
        this._factoried_bullets = [];
    }

    get CreatedBulletsList() {
        return this._factoried_bullets;
    }

    set CreatedBulletsList(newArray: Bullet[]) {
        this._factoried_bullets = newArray;
    }

    make_bullets_step(targets_array: NPC[]) {
        this.CreatedBulletsList.forEach(bullet => {
            bullet.make_move(targets_array);
        });
        this.CreatedBulletsList = this.CreatedBulletsList.filter((bullet: Bullet) => !bullet.should_be_destroyed);
    }

    drawBullets(ctx:CanvasRenderingContext2D) {
        this.CreatedBulletsList.forEach(bullet => {
            bullet.drawBullet(ctx);
        });
    }

    createBullet(from: NPC_with_bullets, to: IElemWithCoords, constraint_x: number, constraint_y: number, margin = 0, speed = 0.007) {
        let coords = [to.x, to.y];
        //margin
        if (margin !== 0) {
            for (let i = 0; i < 2; i++) {
                if (Math.random() > 0.5) {
                    coords[i] -= Math.round(Math.random() * margin);
                } else {
                    coords[i] += Math.round(Math.random() * margin);
                }
            }
        }

        let multipliers = calcMovingDirection(from,
            {
                ...to,
                x: coords[0],
                y: coords[1]
            });
        let inst = new Bullet(from, from.x, from.y, multipliers, constraint_x, constraint_y, speed);
        this.CreatedBulletsList.push(inst);
        return inst;
    }
}