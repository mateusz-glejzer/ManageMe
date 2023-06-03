import { Injectable } from '@angular/core';
import { FeatureTileComponentInfo } from '../features/feature-tile/feature-tile.component';
import { itemState } from '../board/models/itemState';
import { NewFeature } from '../features/new-feature/new-feature.component';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesProviderService {

  features: Map<number, FeatureTileComponentInfo[]> = new Map<number, FeatureTileComponentInfo[]>();
  constructor() {
    this.features.set(1, [
      { id: 1, projectId: 1, name: 'feature', description: "mkjhgsacfhbj", state: itemState.doing },
      { id: 2, projectId: 1, name: 'tasfeature2', description: "mkjhgsacfhbj", state: itemState.done },
      { id: 4, projectId: 1, name: 'featurefeature', description: "mkjhgsacfhbj", state: itemState.todo },
      { id: 5, projectId: 1, name: 'featurefeaturefeature', description: "mkjhgsacfhbj", state: itemState.doing }]);
  }

  todoFeaturesSource = from(this.features);

  getProjectFeaturesTileInfo(id: number): FeatureTileComponentInfo[] {
    let projectFeatures = this.features.get(id);
    if (projectFeatures) {
      return projectFeatures;

    }
    return [];
  }
  addFeature(projectId: number, feature: NewFeature) {
    if (this.features.has(projectId)) {
      let temp = this.features.get(projectId);
      if (temp) {
        let highestId: number = Math.max(...temp.map(a => a.id));
        let newFeature: FeatureTileComponentInfo = { id: highestId + 1, name: feature.name, description: feature.description, state: itemState.todo, projectId: projectId }
        temp.push(newFeature)
        this.features.set(projectId, temp)
        return
      }
      //do smth instead

    };

  }
}
