import { Component, Inject, Input } from '@angular/core';

export type FeatureInfo =
  {
    id: number;
    name: string;
    tasks: Array<number>;
  }
export type FeatureInfoViewModel =
  {
    id: number;
    name: string;
    tasks: Array<string>;
  }
@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent {
  @Input() featureInfo!: FeatureInfo;
}
