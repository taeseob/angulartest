import {LoginComponent} from './main/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoComponent} from './main/todo/todo.component';
import {AuthGuard} from './shared/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'todo', component: TodoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
