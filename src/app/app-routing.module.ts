import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsComponent } from './products/products.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ServicesComponent } from './services/services.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registeration',component:RegisterationComponent},
  {path:'Shopping-Cart',component:ShoopingCartComponent},
  {path:'**',component:NotFoundPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
