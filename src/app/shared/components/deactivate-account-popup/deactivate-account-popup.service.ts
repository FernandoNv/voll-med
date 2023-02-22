import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDialogData } from '../../models/dialog-data';
import { DeactivateAccountPopupComponent } from './deactivate-account-popup.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateAccountPopupService {
  constructor(@Inject(MatDialog) private dialog: MatDialog) {}

  public open(data: IDialogData): void {
    const dialogRef = this.dialog.open(DeactivateAccountPopupComponent, {
      data,
      maxWidth: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
