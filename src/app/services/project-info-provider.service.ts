import { Injectable } from '@angular/core';
import { ProjectInfoData } from '../project/models/projectInfoData';
import { ProjectInfo } from '../project/models/projectInfo';

@Injectable({
  providedIn: 'root'
})
//all of it is just fake backend
export class ProjectInfoProviderService {

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
    }]

  getAllProjects(): Array<ProjectInfoData> {
    return this.projects;
  }
  addProject(project: ProjectInfoData) {
    this.projects.push(project);
  }

  getProjectInfoById(id: number): ProjectInfo | null {
    switch (id) {
      case 1: {
        return {
          id: 1,
          name: 'manageMe',
          description: 'kanban board app kanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board appkanban board app',
          hoursSpent: 20,
          hoursToSpend: 20,
        };
      }
      case 2: {
        return {
          id: 2,
          name: 'manageMe2',
          description: 'kanban board app',
          hoursSpent: 10,
          hoursToSpend: 60,
        };
      }
    }
    return null;

  }
}
