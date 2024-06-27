import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        title: 'HOME',
        path: 'home',
        component: HomeComponent
    },
    {
        title: 'SKILLS',
        path: 'skills',
        component: SkillsComponent 
    },
    {
        title: 'PROJECTS',
        path: 'projects',
        component: ProjectsComponent
    },
    {
        title: 'ABOUT',
        path: 'about',
        component: AboutComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },{
        path: '**',
        title:'PAGE NOT FOUND',
        component: NotFoundComponent
    }
];
