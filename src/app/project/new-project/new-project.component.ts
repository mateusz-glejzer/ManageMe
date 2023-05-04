import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NewProject } from './models/newProject';
import { NewProjectForm } from './models/newProjectForrm';
import { ProjectTile } from '../models/projectTileData';

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
  @Output() newProjectCreated = new EventEmitter<ProjectTile>();

  onSubmit() {
    const newProject: ProjectTile = {
      name: this.projectForm.value.projectName!,
      description: this.projectForm.value.description!
    };
    this.newProjectCreated.emit(newProject);
  }
}
