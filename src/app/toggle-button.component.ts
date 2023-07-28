import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-toggle-button',
  template: `
    <button (click)="toggleTheme()">
      Toggle Theme
    </button>
  `,
})
export class ToggleButtonComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
