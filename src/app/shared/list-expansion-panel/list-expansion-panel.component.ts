import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IItem {
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
  public editButtonClicked: EventEmitter<IItem> = new EventEmitter<IItem>();

  // prettier-ignore
  @Output('deactivate-button-clicked') 
  public deactivateButtonClicked: EventEmitter<IItem> = new EventEmitter<IItem>();

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

  public onEditButtonClicked(item: IItem): void {
    this.editButtonClicked.emit(item);
  }

  public onDeactivateButtonClicked(item: IItem): void {
    this.deactivateButtonClicked.emit(item);
  }
}
