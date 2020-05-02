export interface IElemWithCoords {
    x: number;
    y: number;
}

export interface IElemWithCoordsAndSize extends IElemWithCoords {
    size_x: number;
    size_y: number;
}

export interface IObjectWithConstraints extends IElemWithCoordsAndSize {
    constraint_x: number;
    constraint_y: number;
}

export function calcMovingDirection(from: IElemWithCoords, to: IElemWithCoords): number[] {
    let catX = to.x - from.x;
    let catY = to.y - from.y;
    let hypo = Math.sqrt(catX ** 2 + catY ** 2);
    return [(catX / hypo), (catY / hypo)];
}

export function isObjectsConfront(obj1: IElemWithCoordsAndSize, obj2: IElemWithCoordsAndSize): boolean {
    return !(
        (obj1.x + obj1.size_x / 2 < obj2.x - obj2.size_x / 2) ||
        (obj1.x - obj1.size_x / 2 > obj2.x + obj2.size_x / 2) ||
        (obj1.y + obj1.size_y / 2 < obj2.y - obj2.size_y / 2) ||
        (obj1.y - obj1.size_y / 2 > obj2.y + obj2.size_y / 2));
}

