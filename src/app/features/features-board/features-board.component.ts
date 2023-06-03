import { Component } from '@angular/core';
import { BoardItem } from 'src/app/board/models/boardItem';
import { FeatureTileComponentInfo } from '../feature-tile/feature-tile.component';
import { FeaturesProviderService } from 'src/app/services/features-provider.service';
import { itemState } from 'src/app/board/models/itemState';
import { NewFeature } from '../new-feature/new-feature.component';

@Component({
  selector: 'app-features-board',
  templateUrl: './features-board.component.html',
  styleUrls: ['./features-board.component.scss']
})
export class FeaturesBoardComponent {
  constructor(private service: FeaturesProviderService) {
  }
  ngOnInit() {
    let features = this.service.getProjectFeaturesTileInfo(this.currentProject);
    this.todoItems = features.filter(a => a.state === itemState.todo);
    this.doingItems = features.filter(a => a.state === itemState.doing);
    this.doneItems = features.filter(a => a.state === itemState.done);

  }

  //change later
  currentProject: number = 1;
  todoItems!: FeatureTileComponentInfo[];
  doingItems!: FeatureTileComponentInfo[];
  doneItems!: FeatureTileComponentInfo[];

  selectedFeature: number | undefined;
  craeteNewFeature: boolean | undefined;

  toogleShowCreateNewFeature() {
    this.craeteNewFeature = !this.craeteNewFeature;
  }
  newFeatureAdded(feature: NewFeature) {
    this.service.addFeature(this.currentProject, feature);

  }

}
