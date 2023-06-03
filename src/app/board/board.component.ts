import { Component } from '@angular/core';
import { BoardItem } from './models/boardItem';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  todoItems!: Array<BoardItem>;
  doingItems!: Array<BoardItem>;
  doneItems!: Array<BoardItem>;

}
