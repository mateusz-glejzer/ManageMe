import { Injectable } from '@angular/core';
import { itemState } from '../board/models/itemState';
import { Subject } from 'rxjs';
import { itemActionType } from './itemActionType';
import { FeaturesProviderService } from './features-provider.service';

export type Task =
  {
    id: number;
    name: string;
    featureId: number;
    description: string;
    state: itemState;
  }
export type NewTask =
  {
    name: string;
    featureId: number;
    description: string;
  }
export type TaskProviderAction =
  {
    action: itemActionType;
    item: Task;
  }

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {


  constructor(private featuresService: FeaturesProviderService) { }
  tasks: Task[] = [{
    id: 1,
    name: "task1",
    featureId: 1,
    description: "task task task",
    state: itemState.todo,
  }, {
    id: 2,
    name: "task2",
    featureId: 1,
    description: "task task task",
    state: itemState.todo,
  }, {
    id: 3,
    name: "task3",
    featureId: 1,
    description: "task task task",
    state: itemState.doing,
  }, {
    id: 10,
    name: "task10",
    featureId: 2,
    description: "task task task",
    state: itemState.todo,
  }, {
    id: 21,
    name: "task20",
    featureId: 2,
    description: "task task task",
    state: itemState.todo,
  }, {
    id: 22,
    name: "task22",
    featureId: 2,
    description: "task task task",
    state: itemState.doing,
  }];

  tasksSource = new Subject<TaskProviderAction>();

  createTask(task: NewTask) {
    let newId: number = Math.max(...this.tasks.map(a => a.id)) + 1;
    let newTaskInfo: Task = { id: newId, featureId: task.featureId, name: task.name, description: task.description, state: itemState.todo };
    this.tasks.push(newTaskInfo)
    this.tasksSource.next({ action: itemActionType.Added, item: newTaskInfo });
  }
  getTasks() {
    return this.tasks;
  }
  getTask(taskId: number): Task {
    return this.tasks.find(a => a.id === taskId)!;
  }
  getFeatureTasks(id: number): Task[] {
    return this.tasks.filter(a => a.featureId === id)
  }
  changeTask(changedTask: Task) {
    let taskToChange = this.tasks.find(a => a.id === changedTask.id);
    if (taskToChange) {
      let index = this.tasks.indexOf(taskToChange);
      this.tasks[index] = changedTask;
      this.tasksSource.next({ action: itemActionType.Changed, item: changedTask });
      if (taskToChange.state === itemState.todo && changedTask.state !== itemState.todo) {
        let feature = this.featuresService.getFeature(changedTask.featureId);
        if (feature?.state === itemState.todo) {
          feature.state = itemState.doing;
          this.featuresService.changeFeature(feature);
        }
      }
    }
  }

}
