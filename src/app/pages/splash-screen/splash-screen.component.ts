import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  public showSplash: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1500);
  }
}
