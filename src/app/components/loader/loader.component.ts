import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <mat-spinner *ngIf="isLoading | async" class="spinner"></mat-spinner>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: Observable<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
