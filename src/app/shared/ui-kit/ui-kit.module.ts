import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgButtonModule } from './ng-button/ng-button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgButtonModule],
  exports: [NgButtonModule],
})
export class UiKitModule {}
