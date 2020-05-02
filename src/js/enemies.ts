import {moving_NPC} from "@/js/abstract_classes/moving_npc";
import {NPC_with_bullets} from "@/js/abstract_classes/npc_with_bullets";
import {DoomGuy} from "@/js/doomguy";
import {BulletFactory} from "@/js/BulletFactory";
import {IElemWithCoords} from "@/js/helpers";

export class Imp extends moving_NPC {

    constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number, current_doomguy: DoomGuy) {
        super(start_x, start_y, constraint_x, constraint_y);
        this.size_x = constraint_x * 0.05;
        this.size_y = constraint_y * 0.1;
        this.speed = Math.min(constraint_x, constraint_y) * 0.0021;

        this.adjustImage(current_doomguy);
    }

}

export class LostSoul extends moving_NPC {

    constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number, current_doomguy: DoomGuy) {
        super(start_x, start_y, constraint_x, constraint_y);
        this.size_x = constraint_x * 0.05;
        this.size_y = constraint_y * 0.1;
        this.speed = Math.min(constraint_x, constraint_y) * 0.003;

        this.adjustImage(current_doomguy);

    }
}

export class FormerHuman extends NPC_with_bullets {
    private max_bullets: number;

    constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number, current_doomguy: DoomGuy) {
        super(start_x, start_y, constraint_x, constraint_y);
        this.size_x = constraint_x * 0.045;
        this.size_y = constraint_y * 0.10;
        this.max_bullets = 4;
        this.adjustImage(current_doomguy);
        this.can_shoot = false;
        setTimeout(() => {
            this.can_shoot = true;
        }, 700);
    }

    try_to_shoot(factory: BulletFactory, target: IElemWithCoords) {
        if (this.can_shoot) {
            let margin = Math.floor(Math.min(this.constraint_x, this.constraint_y) * 0.15);
            factory.createBullet(this, target, this.constraint_x, this.constraint_y, margin, 0.004);
            this.can_shoot = false;
            setTimeout(() => {
                this.can_shoot = true;
            }, 1300);
        }
    }
}