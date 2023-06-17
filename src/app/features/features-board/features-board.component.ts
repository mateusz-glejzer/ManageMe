import { Component } from '@angular/core';
import { BoardItem } from 'src/app/board/models/boardItem';
import { FeatureTileComponentInfo } from '../feature-tile/feature-tile.component';
import { FeaturesProviderAction, FeaturesProviderService } from 'src/app/services/features-provider.service';
import { itemState } from 'src/app/board/models/itemState';
import { NewFeature } from '../new-feature/new-feature.component';
import { Subscription, filter } from 'rxjs';
import { itemActionType } from 'src/app/services/itemActionType';

@Component({
  selector: 'app-features-board',
  templateUrl: './features-board.component.html',
  styleUrls: ['./features-board.component.scss']
})
export class FeaturesBoardComponent {
  constructor(private service: FeaturesProviderService) {
  }

  features!: FeatureTileComponentInfo[];
  currentProject: number = 1;
  todoItems!: FeatureTileComponentInfo[];
  doingItems!: FeatureTileComponentInfo[];
  doneItems!: FeatureTileComponentInfo[];

  selectedFeature: number | undefined;
  craeteNewFeature: boolean | undefined;
  showInfo: boolean | undefined;


  ngOnInit() {
    let features = this.service.getProjectFeaturesTileInfo(this.currentProject);
    this.features = new Array(...features);
    this.sortItems()
    this.service.todoFeaturesSource.subscribe(a => this.handleAction(a));

  }
  ngOnChanges() {
    this.sortItems()
  }

  sortItems() {
    this.todoItems = this.features.filter(a => a.state === itemState.todo);
    this.doingItems = this.features.filter(a => a.state === itemState.doing);
    this.doneItems = this.features.filter(a => a.state === itemState.done);
  }
  toogleShowCreateNewFeature() {
    this.craeteNewFeature = !this.craeteNewFeature;
  }
  newFeatureAdded(feature: NewFeature) {
    this.service.addFeature(this.currentProject, feature);
    this.sortItems()

  }

  showFeatureInfo(id: number) {
    this.selectedFeature = id;
    this.showFeatureInfoDialog();
  }
  showFeatureInfoDialog() {
    this.showInfo = true;
  }
  handleAction(featuresProviderAction: FeaturesProviderAction) {
    switch (featuresProviderAction.action) {
      case itemActionType.Added:
        {
          this.features.push(featuresProviderAction.item);
          break;
        }
      case itemActionType.Changed:
        {
          this.features = this.features.filter(a => featuresProviderAction.item.id != a.id);
          this.features.push(featuresProviderAction.item);
          this.sortItems();
          break;
        }
      case itemActionType.Deleted:
        {
          this.features = this.features.filter(a => featuresProviderAction.item.id != a.id);
          break;
        }
    }
  }

}
