import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { WikiComponent } from './pages/wiki/wiki.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"videoList",component:VideoListComponent},
    {path:"blog",component:BlogComponent},
    {path:"login",component:LoginComponent},
    {path:"postPage",component:PostPageComponent},
    {path:"wiki",component:WikiComponent},
    {path:"", redirectTo:"home",pathMatch:"full"}
];
