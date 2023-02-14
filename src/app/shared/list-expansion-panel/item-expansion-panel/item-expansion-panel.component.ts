import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../list-expansion-panel.component';

@Component({
  selector: 'app-item-expansion-panel',
  templateUrl: './item-expansion-panel.component.html',
  styleUrls: ['./item-expansion-panel.component.scss'],
})
export class ItemExpansionPanelComponent {
  @Input()
  public items!: IItem[];

  @Output('edit-button-clicked')
  public editButtonClicked: EventEmitter<IItem> = new EventEmitter<IItem>();

  // prettier-ignore
  @Output('deactivate-button-clicked') 
  public deactivateButtonClicked: EventEmitter<IItem> = new EventEmitter<IItem>();

  public panelOpenState = false;

  public onEditButtonClicked(item: IItem): void {
    this.editButtonClicked.emit(item);
  }

  public onDeactivateButtonClicked(item: IItem): void {
    this.deactivateButtonClicked.emit(item);
  }
}
