import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgButtonComponent } from './ng-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NgButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [MatButtonModule, NgButtonComponent],
})
export class NgButtonModule {}
