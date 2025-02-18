import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-playground';
  constructor(private primeng: PrimeNG, private _router: Router) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  navigateTo() {
    this._router.navigateByUrl('currency');
  }
}
