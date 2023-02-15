import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IItem {
  id: number;
  title: string;
  description: string;
  content: string[];
}

interface IItemsExpansionPanel {
  title: string;
  items: IItem[];
}

@Component({
  selector: 'app-list-expansion-panel',
  templateUrl: './list-expansion-panel.component.html',
  styleUrls: ['./list-expansion-panel.component.scss'],
})
export class ListExpansionPanelComponent implements OnInit {
  @Input() public items!: IItem[];

  @Output('edit-button-clicked')
  public editButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  // prettier-ignore
  @Output('deactivate-button-clicked') 
  public deactivateButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  public listItemsExpansionPanel!: IItemsExpansionPanel[];

  constructor() {}

  ngOnInit(): void {
    this.formatData(this.items);
  }

  public formatData(items: IItem[]) {
    const setLetters = new Set<string>(
      items.map((item) => item.title.charAt(0).toUpperCase())
    );

    // prettier-ignore
    const newData = Array.from(setLetters).map((letter) =>({
      title: letter,
      items: items.filter((item) => item.title.charAt(0).toUpperCase() === letter)
    } as IItemsExpansionPanel));

    this.listItemsExpansionPanel = newData;
  }

  public onEditButtonClicked(idItemClicked: number): void {
    this.editButtonClicked.emit(idItemClicked);
  }

  public onDeactivateButtonClicked(idItemClicked: number): void {
    this.deactivateButtonClicked.emit(idItemClicked);
  }
}
