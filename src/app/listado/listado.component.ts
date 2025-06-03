import { Component, HostBinding, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectTracking } from '../state/tracking.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  imports: [CommonModule]
})
export class ListadoComponent {
  @HostBinding('class') class = 'd-block mt-4';

  tracking$: Observable<Record<string, number>> = inject(Store).select(selectTracking);
}

