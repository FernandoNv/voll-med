import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IOptions {
  icon: IconProp;
  description: string;
  path: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public options: IOptions[] = [
    {
      icon: ['fas', 'user-doctor'],
      description: 'Médicos(as)',
      path: 'doctors',
    },
    {
      icon: ['fas', 'user'],
      description: 'Pacientes',
      path: 'patients',
    },
    {
      icon: ['fas', 'calendar-days'],
      description: 'Consultas',
      path: 'appointments',
    },
  ];

  constructor(private router: Router) {}

  optionClicked(option: IOptions): void {
    this.router.navigate([option.path]);
  }
}
