import { Component } from '@angular/core';
import { ProjectInfoData } from '../models/projectInfoData';
import { ProjectInfo } from '../models/projectInfo';
import { ProjectInfoProviderService } from 'src/app/services/project-info-provider.service';

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent {

  projects!: Array<ProjectInfoData>;
  //backend data mock
  constructor(private service: ProjectInfoProviderService) { }


  ngOnInit() {
    this.projects = this.service.getAllProjects();
  }

  showProjectInfo: boolean = false;
  createNewProject: boolean = false;
  projectShowInfo!: ProjectInfo;

  oncreateNewProjectClosed() {
    this.createNewProject = false;
  }
  onNewProjectCreated(newProject: ProjectInfoData) {
    this.service.addProject(newProject);
    this.createNewProject = false;
  }
  onDeleteProjectEvent(projectId: number) {
    this.projects = this.projects.filter(a => a.id != projectId);
  }
  onShowProjectInfoEvent(projectId: number) {
    const project = this.service.getProjectInfoById(projectId);
    if (project) {
      this.projectShowInfo = project;
      this.showProjectInfo = true;
      return
    }
    //do smth
  }

}
