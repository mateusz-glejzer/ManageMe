import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectInfoData } from '../models/projectInfoData';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent {
  @Input() data!: ProjectInfoData;
  @Output() showInfoEvent = new EventEmitter<number>();
  @Output() deleteProjectEvent = new EventEmitter<number>();
  @Output() editProjectEvent = new EventEmitter<number>();
  @Output() goToProjectEvent = new EventEmitter<number>();


  onClick(projectId: number) {
    this.goToProjectEvent.emit(projectId);
  }
  showInfo(projectId: number) {
    this.showInfoEvent.emit(projectId);
  }
  showEdit(projectId: number) {
    this.editProjectEvent.emit(projectId);
  }
  deleteProject(projectId: number) {
    this.deleteProjectEvent.emit(projectId);
  }
}
