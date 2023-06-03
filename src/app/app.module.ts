import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskBoardComponent } from './tasks/task-board/task-board.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskInfoComponent } from './tasks/task-info/task-info.component';
import { ProjectInfoComponent } from './project/project-info/project-info.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsBoardComponent } from './project/projects-board/projects-board.component';
import { ProjectTileComponent } from './project/project-tile/project-tile.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { FeaturesBoardComponent } from './features/features-board/features-board.component';
import { BoardComponent } from './board/board.component';
import { FeatureInfoComponent } from './features/feature-info/feature-info.component';
import { FeatureTileComponent } from './features/feature-tile/feature-tile.component';
import { NewFeatureComponent } from './features/new-feature/new-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskBoardComponent,
    TaskComponent,
    TaskInfoComponent,
    ProjectInfoComponent,
    ProjectEditComponent,
    NavigationComponent,
    ProjectsBoardComponent,
    ProjectTileComponent,
    NewProjectComponent,
    FeaturesBoardComponent,
    BoardComponent,
    FeatureInfoComponent,
    FeatureTileComponent,
    NewFeatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
