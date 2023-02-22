import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent {
  @Input() public title: string = '';
  @Input() public content: string[] = [];
}
