import { HomeComponent } from '../pages/home/home.component';
import { ClassComponent } from '../pages/class/class.component';


export const routerConfig = [
    { path: 'home', component: HomeComponent},
    { path: 'class', component: ClassComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];