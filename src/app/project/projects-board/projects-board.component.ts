import { Component } from '@angular/core';
import { ProjectTile } from '../models/projectTileData';

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent {
  projects: Array<ProjectTile> = [
    {
      name: 'manageMe',
      description: 'kanban board app kanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board app'
    },
    {
      name: 'manageMe2',
      description: 'kanban board app'
    }];
  createNewProject: boolean = false;

  onNewProjectCreated(newProject: ProjectTile) {
    this.projects.push(newProject);
  }

}
