import { Component } from '@angular/core';

export interface ProjectInfo
{
  title:string;
  description:string;
  members:string[],
  

}

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {

}
