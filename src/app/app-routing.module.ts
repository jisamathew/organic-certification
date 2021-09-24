import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
    // path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  // },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'farmer-homepage',
    loadChildren: () => import('./farmer-homepage/farmer-homepage.module').then( m => m.FarmerHomepagePageModule)
  },
  {
    path: 'inspector-homepage',
    loadChildren: () => import('./inspector-homepage/inspector-homepage.module').then( m => m.InspectorHomepagePageModule)
  },
  {
    path: 'farmer-application-form',
    loadChildren: () => import('./farmer-application-form/farmer-application-form.module').then( m => m.FarmerApplicationFormPageModule)
  },
  {
    path: 'certifier-homepage',
    loadChildren: () => import('./certifier-homepage/certifier-homepage.module').then( m => m.CertifierHomepagePageModule)
  },
  {
    path: 'farmer-statusview',
    loadChildren: () => import('./farmer-statusview/farmer-statusview.module').then( m => m.FarmerStatusviewPageModule)
  },
  {
    path: 'farmer-viewapplications',
    loadChildren: () => import('./farmer-viewapplications/farmer-viewapplications.module').then( m => m.FarmerViewapplicationsPageModule)
  },
  {
    path: 'inspector-approvecheck/:xyz',
    loadChildren: () => import('./inspector-approvecheck/inspector-approvecheck.module').then( m => m.InspectorApprovecheckPageModule)
  },
  {
    path: 'certifier-certification/:xyz',
    loadChildren: () => import('./certifier-certification/certifier-certification.module').then( m => m.CertifierCertificationPageModule)
  }


  // {
  //   path: 'modal',
  //   loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
