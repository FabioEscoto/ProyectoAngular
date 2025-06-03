import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { agregarTracking } from '../state/tracking.actions';

@Directive({
  selector: '[appTrackClick]',
  standalone: true
})
export class TrackClickDirective implements OnDestroy {
  @Input('appTrackClick') trackingTag = '';
  private subscription: Subscription;

  constructor(private el: ElementRef, private store: Store) {
    this.subscription = fromEvent(this.el.nativeElement, 'click').subscribe(() => {
      const tag = this.trackingTag || this.el.nativeElement.getAttribute('data-track');
      if (tag) {
        this.store.dispatch(agregarTracking({ tag }));
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

