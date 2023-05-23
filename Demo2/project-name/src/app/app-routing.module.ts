import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BreedComponent } from './breed/breed.component';

const routes: Routes = 
[
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register',  component:RegisterComponent},
{path:'admin', canActivate:[AuthGuard],   component:AdminComponent},
{path:'home', canActivate:[AuthGuard],  component:HomeComponent},
{path:'breed', canActivate:[AuthGuard],  component:BreedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
