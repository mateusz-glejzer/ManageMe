import { Component, EventEmitter, Inject, Injectable, Input, Output, inject } from '@angular/core';
import { itemState } from 'src/app/board/models/itemState';

export type FeatureTileComponentInfo = {
  id: number;
  projectId: number;
  name: string;
  description: string;
  state: itemState;
}

@Component({
  selector: 'app-feature-tile',
  templateUrl: './feature-tile.component.html',
  styleUrls: ['./feature-tile.component.scss']
})

export class FeatureTileComponent {

  @Input() info!: FeatureTileComponentInfo;
  @Output() featureSelected: EventEmitter<number> = new EventEmitter();

  openFeature() {
    this.featureSelected.emit(this.info.id);
  }

}
