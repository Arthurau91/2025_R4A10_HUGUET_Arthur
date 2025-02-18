import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
      path: 'home',
      redirectTo: '',
    },
    {
        path: 'detail/:id',
        component: DetailpageComponent,
    },
    {
        path: '404',
        component: NotfoundpageComponent,
    },
    {
      path: '**',
      redirectTo: '404',
    }
];
