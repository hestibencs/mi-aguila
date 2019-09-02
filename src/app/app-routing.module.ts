import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectionCenterComponent} from './direction-center/direction-center.component';
import {DirectionComponent} from './direction/direction.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'direction',
    pathMatch: 'full'
  },
  {
    path: 'direction',
    component: DirectionCenterComponent,
    children: [
      {
        path: ':origin/:destination', component: DirectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
