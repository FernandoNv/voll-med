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
  public editButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  // prettier-ignore
  @Output('deactivate-button-clicked') 
  public deactivateButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  public panelOpenState = false;

  public onEditButtonClicked(idItemClicked: number): void {
    this.editButtonClicked.emit(idItemClicked);
  }

  public onDeactivateButtonClicked(idItemClicked: number): void {
    this.deactivateButtonClicked.emit(idItemClicked);
  }
}
