import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComprovarC2Component} from './comprovar-c2/comprovar-c2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComprovarC2Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjecteStreamVi2';
}
