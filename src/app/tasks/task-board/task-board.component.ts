import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { itemState } from 'src/app/board/models/itemState';
import { FeatureInfo } from 'src/app/features/feature-info/feature-info.component';
import { FeatureTileComponentInfo } from 'src/app/features/feature-tile/feature-tile.component';
import { FeaturesProviderService } from 'src/app/services/features-provider.service';
import { itemActionType } from 'src/app/services/itemActionType';
import { NewTask, Task, TaskProviderAction, TaskProviderService } from 'src/app/services/task-provider.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  constructor(private taskProviderService: TaskProviderService, private featureService: FeaturesProviderService) { }
  todoItems!: Task[];
  doingItems!: Task[];
  doneItems!: Task[];
  features!: FeatureTileComponentInfo[];
  tasks!: Task[];
  selectedTask: number | undefined;
  showCreateNewTask: boolean | undefined;
  showTaskInfoDialog: boolean | undefined;
  ngOnInit() {
    let tasks = this.taskProviderService.getTasks();
    this.tasks = new Array(...tasks);
    this.sortItems();
    this.features = this.featureService.getProjectFeaturesTileInfo(1);
    this.taskProviderService.tasksSource.subscribe(a => this.handleAction(a));
  }
  ngOnChange() {
    this.sortItems();
  }
  sortItems() {
    this.todoItems = this.tasks.filter(a => a.state === itemState.todo);
    this.doingItems = this.tasks.filter(a => a.state === itemState.doing);
    this.doneItems = this.tasks.filter(a => a.state === itemState.done);
  }
  handleAction(taskProviderAction: TaskProviderAction) {
    switch (taskProviderAction.action) {
      case itemActionType.Added:
        {
          this.tasks.push(taskProviderAction.item);
          this.sortItems();
          break;
        }
      case itemActionType.Changed:
        {
          this.tasks = this.tasks.filter(a => taskProviderAction.item.id != a.id);
          this.tasks.push(taskProviderAction.item);
          this.sortItems();
          break;
        }
      case itemActionType.Deleted:
        {
          this.tasks = this.tasks.filter(a => taskProviderAction.item.id != a.id);
          break;
        }
    }
  }
  showSelectedTask(taskId: number) {
    this.selectedTask = taskId;
    this.showTaskInfoDialog = true;
  }
  onCreateNewTask(task: NewTask) {
    this.taskProviderService.createTask(task);
  }
  showCreateNewTaskDialog() {
    this.showCreateNewTask = true;
  }
}
