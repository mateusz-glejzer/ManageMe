import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesBoardComponent } from './features/features-board/features-board.component';
import { ProjectsBoardComponent } from './project/projects-board/projects-board.component';

const routes: Routes = [
  { path: 'features', component: FeaturesBoardComponent },
  { path: 'projects', component: ProjectsBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
