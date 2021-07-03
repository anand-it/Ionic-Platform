import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./pages/youtube/youtube.module').then( m => m.YoutubePageModule)
  },
  {
    path: 'razerpay-web',
    loadChildren: () => import('./pages/razerpay-web/razerpay-web.module').then( m => m.RazerpayWebPageModule)
  },
  {
    path: 'razerpay-mobile',
    loadChildren: () => import('./pages/razerpay-mobile/razerpay-mobile.module').then( m => m.RazerpayMobilePageModule)
  },
  {
    path: 'paypal-mobile',
    loadChildren: () => import('./pages/paypal-mobile/paypal-mobile.module').then( m => m.PaypalMobilePageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('./pages/paypal-web/paypal-web.module').then( m => m.PaypalWebPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./pages/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'googlemaps',
    loadChildren: () => import('./pages/googlemaps/googlemaps.module').then( m => m.GooglemapsPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then( m => m.ChartsPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
