import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeaturesProviderService } from 'src/app/services/features-provider.service';
import { FeatureInfo } from '../feature-info/feature-info.component';
import { FeatureTileComponentInfo } from '../feature-tile/feature-tile.component';


export type NewFeature =
  {
    name: string,
    description: string;
  }

@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.component.html',
  styleUrls: ['./new-feature.component.scss']
})
export class NewFeatureComponent {
  featureForm = new FormGroup({
    featureName: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
  })
  @Output() closeNewFeatureCreator = new EventEmitter();
  @Output() newFeatureCreated = new EventEmitter<NewFeature>();
  onClose() {
    this.closeNewFeatureCreator.emit();
  }
  onSubmit() {
    let newFeature: NewFeature = { name: this.featureForm.get('featureName')?.value!, description: this.featureForm.get('description')?.value! }
    this.newFeatureCreated.emit(newFeature);
  }

}
