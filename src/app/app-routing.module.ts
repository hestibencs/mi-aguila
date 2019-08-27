import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequireEagleComponent} from './require-eagle/require-eagle.component';


const routes: Routes = [
  {path: '', component: RequireEagleComponent},
  {path: 'route/:route', component: RequireEagleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
