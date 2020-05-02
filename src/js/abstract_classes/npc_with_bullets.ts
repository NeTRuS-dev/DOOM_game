"use strict";

import {NPC} from "@/js/abstract_classes/npc";

export abstract class NPC_with_bullets extends NPC {
    private _target_hits: number;
    protected can_shoot?: boolean;

    get target_hits(): number {
        return this._target_hits;
    }

    set target_hits(value: number) {
        this._target_hits = value;
    }

    protected constructor(start_x: number, start_y: number, constraint_x: number, constraint_y: number) {
        super(start_x, start_y, constraint_x, constraint_y);
        this._target_hits = 0;
    }
}