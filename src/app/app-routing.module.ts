import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'menu',component: MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'payments',component:PaymentComponent},
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
