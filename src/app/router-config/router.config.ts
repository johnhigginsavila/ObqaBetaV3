import { HomeComponent } from '../pages/home/home.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ClassComponent } from '../pages/class/class.component';

import { LoginGuard } from '../guards/login.guard';
import { AuthGuard } from '../guards/auth.guard';


export const routerConfig = [
    { path: 'home', component: HomeComponent},
    { path: 'admin', component: AdminComponent, canActivate: [LoginGuard, AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard, AuthGuard]},
    { path: 'class', component: ClassComponent, canActivate: [LoginGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];