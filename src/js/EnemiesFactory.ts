import {IObjectWithConstraints, isObjectsConfront} from "@/js/helpers";
import {FormerHuman, Imp, LostSoul} from "@/js/enemies";
import {NPC} from "@/js/abstract_classes/npc";
import {DoomGuy} from "@/js/doomguy";

export class EnemiesFactory {
    private _factoried_enemies: NPC[];
    private _max_enemy_count: number;

    constructor(max_enemy_count: number) {
        this._factoried_enemies = [];
        this._max_enemy_count = max_enemy_count;
    }

    get CreatedEnemiesList() {
        return this._factoried_enemies;
    }

    set CreatedEnemiesList(newArray) {
        this._factoried_enemies = newArray;
    }

    get maxEnemyCount() {
        return this._max_enemy_count;
    }

    set maxEnemyCount(newVal) {
        this._max_enemy_count = newVal;
    }

    generateNewEnemy(max_x: number, max_y: number, doomGuy: DoomGuy) {
        if (this.CreatedEnemiesList.length < this._max_enemy_count) {

            let type = Math.round(Math.random() * 2);
            //generate coords
            let size_x = max_x * 0.05, size_y = max_y * 0.11,
                position = this.generateCoords(max_x, max_y, doomGuy, size_x, size_y);

            if (type === 0) {
                this.CreatedEnemiesList.push(new Imp(position[0], position[1], max_x, max_y, doomGuy));
            } else if (type === 1) {
                this.CreatedEnemiesList.push(new LostSoul(position[0], position[1], max_x, max_y, doomGuy));
            } else {
                this.CreatedEnemiesList.push(new FormerHuman(position[0], position[1], max_x, max_y, doomGuy));
            }
        }
    }

    generateCoords(max_x: number, max_y: number, doomGuy: DoomGuy, size_x: number, size_y: number): number[] {
        let x: number | undefined, y: number | undefined, done = false;
        let check_arr: IObjectWithConstraints[] = [...this.CreatedEnemiesList, doomGuy];

        while (!done) {
            x = Math.floor(Math.random() * (max_x - size_x) + size_x / 2);
            y = Math.floor(Math.random() * (max_y - size_y) + size_y / 2);
            done = true;
            for (let obj of check_arr) {
                if (isObjectsConfront({x, y, size_x: (size_x * 4), size_y: (size_y * 4)}, obj)) {
                    done = false;
                    break;
                }
            }
        }
        if (x === undefined || y === undefined) {
            throw "Cannot generate new coords";
        } else {
            return [x, y];
        }
    }

    removeDeadEnemies() {
        this.CreatedEnemiesList = this.CreatedEnemiesList.filter((enemy) => !enemy.killed);
    }
}