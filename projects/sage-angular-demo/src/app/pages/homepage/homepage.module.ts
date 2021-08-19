import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AvatarModule } from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { FooterModule } from '@sage-bionetworks/sage-angular/src/lib/footer';

import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AvatarModule,
    FooterModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
