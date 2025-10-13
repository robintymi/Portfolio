
import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'', component: HeroSectionComponent},
    {path:'app-navbar', component:NavbarComponent}
];
