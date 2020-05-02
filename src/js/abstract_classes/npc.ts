// @ts-ignore
import guyBack from "@/resourses/doomguy/guy-back.png";
// @ts-ignore
import guyLeft from "@/resourses/doomguy/guy-left.png";
// @ts-ignore
import guyRight from "@/resourses/doomguy/guy-right.png";
// @ts-ignore
import guyForward from "@/resourses/doomguy/guy-forward.png";

// @ts-ignore
import impBack from "@/resourses/enemies/imp/imp-back.png";
// @ts-ignore
import impLeft from "@/resourses/enemies/imp/imp-left.png";
// @ts-ignore
import impRight from "@/resourses/enemies/imp/imp-right.png";
// @ts-ignore
import impForward from "@/resourses/enemies/imp/imp-forward.png";
// @ts-ignore

import soulBack from "@/resourses/enemies/lost_soul/soul-back.png";
// @ts-ignore
import soulLeft from "@/resourses/enemies/lost_soul/soul-left.png";
// @ts-ignore
import soulRight from "@/resourses/enemies/lost_soul/soul-right.png";
// @ts-ignore
import soulForward from "@/resourses/enemies/lost_soul/soul-forward.png";

// @ts-ignore
import humanBack from "@/resourses/enemies/former_human/human-back.png";
// @ts-ignore
import humanLeft from "@/resourses/enemies/former_human/human-left.png";
// @ts-ignore
import humanRight from "@/resourses/enemies/former_human/human-right.png";
// @ts-ignore
import humanForward from "@/resourses/enemies/former_human/human-forward.png";

import {IElemWithCoords, IObjectWithConstraints} from "@/js/helpers";

let createImage = (src: string) => {
    let tmp = new Image();
    tmp.src = src;
    return tmp;
};


const ALL_IMAGES: { [key: string]: any } = Object.freeze({
    'DoomGuy': {
        'top': createImage(guyBack),
        'left': createImage(guyLeft),
        'right': createImage(guyRight),
        'bottom': createImage(guyForward)
    },
    'Imp': {
        'top': createImage(impBack),
        'left': createImage(impLeft),
        'right': createImage(impRight),
        'bottom': createImage(impForward)
    },
    'LostSoul': {
        'top': createImage(soulBack),
        'left': createImage(soulLeft),
        'right': createImage(soulRight),
        'bottom': createImage(soulForward)
    },
    'FormerHuman': {
        'top': createImage(humanBack),
        'left': createImage(humanLeft),
        'right': createImage(humanRight),
        'bottom': createImage(humanForward)
    }
});


export abstract class NPC implements IObjectWithConstraints {

    public killed: boolean;
    protected image: HTMLImageElement | undefined;
    public constraint_x: number;
    public constraint_y: number;
    public size_x: number = NaN;
    public size_y: number = NaN;
    public x: number;
    public y: number;

    protected constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number) {
        this.image = undefined;
        this.x = start_x;
        this.y = start_y;
        this.constraint_x = constraint_x;
        this.constraint_y = constraint_y;
        this.killed = false;
    }


    setImage(which: string) {
        this.image = ALL_IMAGES[Object.getPrototypeOf(this).constructor.name][which];
    }

    gotHit() {
        this.killed = true;
    }

    drawSelf(ctx: CanvasRenderingContext2D) {
        if (this.image !== undefined) {
            ctx.drawImage(this.image, (this.x) - (this.size_x / 2), (this.y) - (this.size_y / 2));
        }
    }

    adjustImage(target_coords: IElemWithCoords) {
        const squares = Object.freeze({
            'left_top': 1,
            'right_top': 2,
            'right_bottom': 3,
            'left_bottom': 4
        });
        const Oses = Object.freeze({
            'X': 1,
            'Y': 2
        });

        function getSquare(current_object: IElemWithCoords) {
            let ret;
            if (current_object.y < target_coords.y) {
                if (current_object.x < target_coords.x) {
                    ret = squares['right_bottom'];
                } else {
                    ret = squares['left_bottom'];
                }
            } else {
                if (current_object.x < target_coords.x) {
                    ret = squares['right_top'];

                } else {
                    ret = squares['left_top'];
                }
            }
            return ret;
        }

        function getClosestO(current_object: IElemWithCoords) {
            let catX = Math.abs(current_object.x - target_coords.x);
            let catY = Math.abs(current_object.y - target_coords.y);
            let hypo = Math.sqrt(catX ** 2 + catY ** 2);
            let for_x = Math.acos(catX / hypo) * 180 / Math.PI;
            let for_y = Math.acos(catY / hypo) * 180 / Math.PI;
            if (for_x <= for_y) {
                return Oses['X'];
            } else {
                return Oses['Y'];
            }
        }

        let square = getSquare(this);
        let os = getClosestO(this);
        if ((square === squares['left_bottom'] || square === squares['left_top']) && os === Oses['X']) {
            this.setImage('left');
        } else if ((square === squares['right_top'] || square === squares['left_top']) && os === Oses['Y']) {
            this.setImage('top');
        } else if ((square === squares['right_top'] || square === squares['right_bottom']) && os === Oses['X']) {
            this.setImage('right');
        } else {
            this.setImage('bottom');
        }
    }
}