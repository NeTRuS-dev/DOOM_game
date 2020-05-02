import {isObjectsConfront, IObjectWithConstraints} from "@/js/helpers";
import {NPC_with_bullets} from "@/js/abstract_classes/npc_with_bullets";
import {NPC} from "@/js/abstract_classes/npc";

const COLORS = [
    '#c9ac42',
    '#bc4b3a',
    '#6ce814',
    '#1f8a9b'
];

export class Bullet implements IObjectWithConstraints {

    private _should_be_destroyed: boolean;
    public constraint_x: number;
    public constraint_y: number;
    public size_x: number;
    public size_y: number;
    public x: number;
    public y: number;
    private readonly color: string;
    private readonly speed_x: number;
    private readonly speed_y: number;
    private creator: NPC_with_bullets;

    constructor(creator: NPC_with_bullets, start_x: number, start_y: number, multipliers: number[], constraint_x: number, constraint_y: number, speed: number) {
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.creator = creator;
        this.x = start_x;
        this.y = start_y;
        let minSide = Math.min(constraint_x, constraint_y);
        this.speed_x = multipliers[0] * minSide * speed;
        this.speed_y = multipliers[1] * minSide * speed;
        this.size_x = minSide * 0.012;
        this.size_y = minSide * 0.012;
        this.constraint_x = constraint_x;
        this.constraint_y = constraint_y;
        this._should_be_destroyed = false;
    }

    get should_be_destroyed(): boolean {
        return this._should_be_destroyed;
    }

    set should_be_destroyed(value: boolean) {
        this._should_be_destroyed = value;
    }

    make_move(targets_array: NPC[]) {
        this.x += this.speed_x;
        this.y += this.speed_y;
        targets_array.forEach((target, index) => {
            if (isObjectsConfront(this, target)) {
                targets_array[index].gotHit();
                this.should_be_destroyed = true;
                this.creator.target_hits++;
            }
        });
        if (this.x < 0 || this.x > this.constraint_x || this.y < 0 || this.y > this.constraint_y) {
            this.should_be_destroyed = true;
        }
    }

    drawBullet(ctx: CanvasRenderingContext2D) {
        if (!this.should_be_destroyed) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size_x, 0, 2 * Math.PI);
            ctx.fill();
        }
    }


}