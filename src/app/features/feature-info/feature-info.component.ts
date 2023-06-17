import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, filter } from 'rxjs';
import { FeaturesProviderService } from 'src/app/services/features-provider.service';
import { Task, TaskProviderService } from 'src/app/services/task-provider.service';
import { FeatureTileComponentInfo } from '../feature-tile/feature-tile.component';
import { itemState } from 'src/app/board/models/itemState';
import { itemActionType } from 'src/app/services/itemActionType';

export type FeatureInfo =
  {
    id: number;
    name: string;
    description: string;
    tasks: Array<string>;
  }
@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent {

  constructor(private featuresProviderService: FeaturesProviderService, private tasksProviderService: TaskProviderService) {
    this.editFeatureForm = new FormGroup({
      featureName: new FormControl(),
      description: new FormControl(),
      state: new FormControl()
    });
  }
  feature!: FeatureTileComponentInfo;
  featureInfo!: FeatureInfo;
  @Input() featureId!: number;
  sub!: Subscription;
  states = Object.values(itemState).filter(value => typeof value === 'number') as number[];
  enumType = itemState;
  editFeatureForm!: FormGroup;
  @Output() closeFeatureInfo = new EventEmitter();
  ngOnChanges() {
    if (this.featureId) {
      this.feature = this.featuresProviderService.getFeature(this.featureId)!;
      let tasks = this.tasksProviderService.getFeatureTasks(this.featureId);
      let featureInfo: FeatureInfo = { id: this.feature!.id, name: this.feature!.name, description: this.feature!.description, tasks: tasks.map(a => a.name) };
      this.featureInfo = featureInfo;
      this.sub = this.tasksProviderService.tasksSource.pipe(filter(a => a.action === itemActionType.Added && a.item.featureId === this.featureId)).subscribe(a => featureInfo.tasks.push(a.item.name));
      this.editFeatureForm = new FormGroup({
        featureName: new FormControl<string>(this.featureInfo.name, { nonNullable: true, }),
        description: new FormControl<string>(this.featureInfo.description, { nonNullable: true }),
        state: new FormControl<itemState>(this.feature.state),
      });
    }
  }

  onSubmit() {
    let feature: FeatureTileComponentInfo = {
      id: this.featureId,
      name: this.editFeatureForm.controls['featureName'].value,
      description: this.editFeatureForm.controls['description'].value,
      state: this.editFeatureForm.controls['state'].value,
      projectId: this.feature.projectId,
    }
    this.featuresProviderService.changeFeature(feature);
  }
  onClose() {
    this.closeFeatureInfo.emit();
  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe;
  // }

}
