import { NgModule } from '@angular/core';

import { 
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }