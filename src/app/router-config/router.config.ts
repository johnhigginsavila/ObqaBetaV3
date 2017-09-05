import { HomeComponent } from '../pages/home/home.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ClassComponent } from '../pages/class/class.component';


export const routerConfig = [
    { path: 'home', component: HomeComponent},
    { path: 'admin', component: AdminComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'class', component: ClassComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];