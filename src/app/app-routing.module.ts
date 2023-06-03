import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/admin/products/products.component';
import { AdminModule } from './components/admin/admin.module';
import { UserModule } from './components/user/user.module';
import { UserProductsComponent } from './components/user/products/products.component';
import { mainGuard } from './guard/main.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'admin',
    canActivate:[mainGuard],
    component: ProductsComponent,
    data:{routeRole:['admin']},
    loadChildren: () => import('./components/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'user',
     canActivate:[mainGuard],
    data: { routeRole: ['user'] },
    component: UserProductsComponent,

    loadChildren: () => import('./components/user/user.module').then(m=>m.UserModule)
  },
  {
    path: '**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
