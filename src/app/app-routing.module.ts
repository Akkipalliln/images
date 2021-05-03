import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'contactus', component:ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,AboutComponent,LoginComponent,ContactusComponent]
