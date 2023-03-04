import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

const matModules = [MatProgressSpinnerModule, MatCardModule];
const appModules = [];
const ngModules = [CommonModule, UserRoutingModule];
const appComponents = [PersonComponent];
@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules],
})
export class PersonModule {}
