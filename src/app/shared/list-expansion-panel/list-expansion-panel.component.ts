import { Component, Input } from '@angular/core';

export interface IItem {
  title: string;
  description: string;
  content: string[];
}

@Component({
  selector: 'app-list-expansion-panel',
  templateUrl: './list-expansion-panel.component.html',
  styleUrls: ['./list-expansion-panel.component.scss'],
})
export class ListExpansionPanelComponent {
  @Input() public items!: IItem[];

  public panelOpenState = false;

  constructor() {}
}
