import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IDialogData } from '../../models/dialog-data';

@Component({
  selector: 'app-deactivate-account-popup',
  templateUrl: './deactivate-account-popup.component.html',
  styleUrls: ['./deactivate-account-popup.component.scss'],
})
export class DeactivateAccountPopupComponent {
  public userIcon: IconProp = ['fas', 'user'];
  public userName!: string;
  public userInformation!: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    private dialogRef: MatDialogRef<DeactivateAccountPopupComponent>
  ) {
    if (data) {
      this.userName = this.data.informationName;
      this.userInformation = this.data.informationText;
    }
  }

  public deactivateAccount(): void {
    this.dialogRef.close(true);
  }
}
