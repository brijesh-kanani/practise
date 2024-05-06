import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Demo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
