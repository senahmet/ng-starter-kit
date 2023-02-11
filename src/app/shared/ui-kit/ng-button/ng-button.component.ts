import { Component, EventEmitter, Input, Output } from '@angular/core';
import { buttonTypes } from './ng-button.model';

@Component({
  selector: 'ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss'],
})
export class NgButtonComponent {
  @Input() type: buttonTypes = 'standard';
  @Input() disabled: boolean = false;
  @Input() small: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  public buttonOnClick(): void {
    this.onClick.emit();
  }
}
