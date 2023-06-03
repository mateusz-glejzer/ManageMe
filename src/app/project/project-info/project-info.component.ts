import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../models/projectInfo';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {

  @Input() info!: ProjectInfo;

}
