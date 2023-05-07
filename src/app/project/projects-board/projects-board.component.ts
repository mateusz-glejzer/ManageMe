import { Component } from '@angular/core';
import { ProjectInfoData } from '../models/projectInfoData';

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent {

  //backend data mock
  projects: Array<ProjectInfoData> = [
    {
      id: 1,
      name: 'manageMe',
      description: 'kanban board app kanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board app'
    },
    {
      id: 2,
      name: 'manageMe2',
      description: 'kanban board app'
    }];
  createNewProject: boolean = false;
  onNewProjectCreated(newProject: ProjectInfoData) {
    this.projects.push(newProject);
    this.createNewProject = false;
  }
  onDeleteProjectEvent(projectId: number) {
    console.log('on project delete')
    this.projects = this.projects.filter(a => a.id != projectId);
  }

}
