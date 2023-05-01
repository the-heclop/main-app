import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'scheduler', component: SchedulerComponent },
{ path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
