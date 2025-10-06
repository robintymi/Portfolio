import { Component } from '@angular/core';
import { OneRefComponent } from './one-ref/one-ref.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [OneRefComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
