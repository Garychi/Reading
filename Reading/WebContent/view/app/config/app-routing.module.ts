/**
 * Created by Mos on 2016/11/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {SettingComponent} from './setting.component';



const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'fintech',  component: FinTechComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
