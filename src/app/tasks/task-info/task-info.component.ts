import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { itemState } from 'src/app/board/models/itemState';
import { FeatureTileComponentInfo } from 'src/app/features/feature-tile/feature-tile.component';
import { FeaturesProviderService } from 'src/app/services/features-provider.service';
import { Task, TaskProviderService } from 'src/app/services/task-provider.service';


@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent {
  constructor(private featureProvider: FeaturesProviderService, private taskProvider: TaskProviderService) { }
  ngOnChanges() {
    this.currentTask = this.taskProvider.getTask(this.taskId);
    this.currentFeature = this.featureProvider.getFeature(this.currentTask.featureId)!;
    this.taskInfo = this.currentTask;
    this.features = this.featureProvider.getProjectFeaturesTileInfo(1);
    this.editTaskForm = new FormGroup({
      taskName: new FormControl<string>(this.currentTask.name, { nonNullable: true, }),
      description: new FormControl<string>(this.currentTask.description, { nonNullable: true }),
      feature: new FormControl<FeatureTileComponentInfo>(this.currentFeature),
      state: new FormControl<itemState>(this.currentTask.state),
    });
  }
  @Input() taskId!: number;
  @Output() closeTaskInfo = new EventEmitter();

  currentFeature!: FeatureTileComponentInfo;
  currentTask!: Task;
  features!: FeatureTileComponentInfo[];
  editTaskForm!: FormGroup;
  states = Object.values(itemState).filter(value => typeof value === 'number') as number[];
  enumType = itemState;
  taskInfo!: Task;
  onTaskEdit() {
    let changedTask: Task = {
      id: this.currentTask.id,
      description: this.editTaskForm.controls['description'].value,
      name: this.editTaskForm.controls['taskName'].value,
      state: this.editTaskForm.controls['state'].value,
      featureId: this.editTaskForm.controls['feature'].value.id
    }
    this.taskProvider.changeTask(changedTask);
  }
  onClose() {
    this.closeTaskInfo.emit();
  }
}
