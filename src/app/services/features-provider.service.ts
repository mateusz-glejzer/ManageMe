import { Injectable } from '@angular/core';
import { FeatureTileComponentInfo } from '../features/feature-tile/feature-tile.component';
import { itemState } from '../board/models/itemState';
import { NewFeature } from '../features/new-feature/new-feature.component';
import { ReplaySubject, Subject, filter, from } from 'rxjs';
import { itemActionType } from './itemActionType';

export type FeaturesProviderAction = {
  action: itemActionType;
  item: FeatureTileComponentInfo;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturesProviderService {

  features: FeatureTileComponentInfo[] = [
    { id: 1, projectId: 1, name: 'feature', description: "featuredescription", state: itemState.doing },
    { id: 2, projectId: 1, name: 'tasfeature2', description: "tasfeature2description", state: itemState.done },
    { id: 4, projectId: 1, name: 'featurefeature', description: "feature3description", state: itemState.todo },
    { id: 5, projectId: 1, name: 'featurefeaturefeature', description: "mkjhgsacfhbjdescription", state: itemState.doing }];

  todoFeaturesSource = new Subject<FeaturesProviderAction>();
  getProjectFeaturesTileInfo(id: number): FeatureTileComponentInfo[] {
    return this.features;
  }
  getFeature(id: number): FeatureTileComponentInfo | undefined {
    let features = this.features.find(a => a.id === id);
    return features;
  }

  addFeature(projectId: number, feature: NewFeature) {

    let highestId: number = Math.max(...this.features.map(a => a.id));
    let newFeature: FeatureTileComponentInfo = { id: highestId + 1, name: feature.name, description: feature.description, state: itemState.todo, projectId: projectId }
    this.features.push(newFeature);
    this.todoFeaturesSource.next({ action: itemActionType.Added, item: newFeature });

  }
  changeFeature(changedFeature: FeatureTileComponentInfo) {
    let featureToChange = this.features.find(a => a.id === changedFeature.id);
    if (featureToChange) {
      let index = this.features.indexOf(featureToChange);
      this.features[index] = changedFeature
      this.todoFeaturesSource.next({ action: itemActionType.Changed, item: changedFeature });
    }

  }

}
