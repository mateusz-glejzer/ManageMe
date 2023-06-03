import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NewProject } from './models/newProject';
import { NewProjectForm } from './models/newProjectForrm';
import { ProjectInfoData } from '../models/projectInfoData';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  projectForm = new FormGroup({
    projectName: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
  })
  @Output() newProjectCreated = new EventEmitter<ProjectInfoData>();
  @Output() closeNewProjectCreator = new EventEmitter();

  getId(): number {
    return Math.floor(Math.random() * 100);
  }

  onClose() {
    this.closeNewProjectCreator.emit();
  }

  onSubmit() {
    const newProject: ProjectInfoData = {
      id: this.getId(),
      name: this.projectForm.value.projectName!,
      description: this.projectForm.value.description!
    };
    this.newProjectCreated.emit(newProject);
  }
}
