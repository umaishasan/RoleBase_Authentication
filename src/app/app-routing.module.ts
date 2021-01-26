import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'menu/first',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'first-modal',
    loadChildren: () => import('./first-modal/first-modal.module').then( m => m.FirstModalPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
  },
  {
    path: 'forth',
    loadChildren: () => import('./forth/forth.module').then( m => m.ForthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
