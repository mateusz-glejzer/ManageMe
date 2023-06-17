import { BoardItemType } from "./boardItemType";

export interface BoardItem {
    id: number;
    name: string;
    type: BoardItemType
}