import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/services/task-provider.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() info!: Task;
  @Output() taskSelected = new EventEmitter<number>();

  showTaskInfo() {
    this.taskSelected.emit(this.info.id);
  }
}
