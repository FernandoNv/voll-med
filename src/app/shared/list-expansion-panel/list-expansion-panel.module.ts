import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExpansionPanelComponent } from './list-expansion-panel.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemExpansionPanelComponent } from './item-expansion-panel/item-expansion-panel.component';
import { MatButtonModule } from '@angular/material/button';

const matModules = [MatListModule, MatExpansionModule, MatButtonModule];
const ngModules = [CommonModule];

@NgModule({
  declarations: [ListExpansionPanelComponent, ItemExpansionPanelComponent],
  imports: [...ngModules, ...matModules],
  exports: [ListExpansionPanelComponent],
})
export class ListExpansionPanelModule {}
