import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureInfo } from 'src/app/features/feature-info/feature-info.component';
import { FeatureTileComponentInfo } from 'src/app/features/feature-tile/feature-tile.component';
import { NewTask } from 'src/app/services/task-provider.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  ngOnInit() {

  }
  taskForm = new FormGroup({
    taskName: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    feature: new FormControl<FeatureTileComponentInfo | null>(null, Validators.required),
  })
  @Input() features!: FeatureTileComponentInfo[];
  @Output() closeNewTaskCreator = new EventEmitter();
  @Output() newtaskCreated = new EventEmitter<NewTask>();
  onClose() {
    this.closeNewTaskCreator.emit();
  }
  onSubmit() {
    let newTask: NewTask = {
      name: this.taskForm.get('taskName')?.value!,
      description: this.taskForm.get('description')?.value!,
      featureId: this.taskForm.get('feature')?.value!.id!,
    }
    this.newtaskCreated.emit(newTask);
  }
}
