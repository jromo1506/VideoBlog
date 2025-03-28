import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"videoList",component:VideoListComponent},
    {path:"blog",component:BlogComponent},
    {path:"login",component:LoginComponent},
    {path:"", redirectTo:"home",pathMatch:"full"}
];
