import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBoardComponent } from './features-board.component';

describe('FeaturesBoardComponent', () => {
  let component: FeaturesBoardComponent;
  let fixture: ComponentFixture<FeaturesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
