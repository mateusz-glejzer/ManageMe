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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskBoardComponent,
    TaskComponent,
    TaskInfoComponent,
    ProjectInfoComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
