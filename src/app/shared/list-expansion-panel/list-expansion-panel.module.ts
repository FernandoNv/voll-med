import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExpansionPanelComponent } from './list-expansion-panel.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

const matModules = [MatListModule, MatExpansionModule];
const ngModules = [CommonModule];

@NgModule({
  declarations: [ListExpansionPanelComponent],
  imports: [...ngModules, ...matModules],
  exports: [ListExpansionPanelComponent],
})
export class ListExpansionPanelModule {}
