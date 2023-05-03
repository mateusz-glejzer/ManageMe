import { Component, Input } from '@angular/core';
import { ProjectTile } from '../models/projectTileData';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent {
  @Input() data!: ProjectTile;

  onClick() {

  }
}
