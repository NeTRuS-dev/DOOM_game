import {calcMovingDirection, isObjectsConfront} from "@/js/helpers";
import {NPC} from "@/js/abstract_classes/npc";
import {DoomGuy} from "@/js/doomguy";

export abstract class moving_NPC extends NPC {
    protected speed?: number;

    protected constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number) {
        super(start_x, start_y, constraint_x, constraint_y);
    }

    public moveTo(currentDoomguy: DoomGuy) {
        if (this.speed !== undefined) {
            let oses_speed = calcMovingDirection(this, currentDoomguy);
            let tmp = (((this.y - this.size_y / 2) - this.speed * oses_speed[1] > 0) &&
                ((this.x - this.size_x / 2) - this.speed * oses_speed[0] > 0) &&
                ((this.y + this.size_y / 2) + this.speed * oses_speed[1] < this.constraint_y) &&
                ((this.x + this.size_x / 2) + this.speed * oses_speed[0] < this.constraint_x));
            if (tmp) {
                this.x += this.speed * oses_speed[0];
                this.y += this.speed * oses_speed[1];
            }
            if (isObjectsConfront(this, currentDoomguy)) {
                currentDoomguy.gotHit();
                this.gotHit();
            }
        }
    }

}