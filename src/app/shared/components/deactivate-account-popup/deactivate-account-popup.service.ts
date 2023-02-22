import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IDialogData } from '../../models/dialog-data';
import { DeactivateAccountPopupComponent } from './deactivate-account-popup.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateAccountPopupService {
  constructor(@Inject(MatDialog) private dialog: MatDialog) {}

  public open(data?: IDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(DeactivateAccountPopupComponent, {
      data,
      maxWidth: '450px',
    });

    return dialogRef.afterClosed();
  }
}
