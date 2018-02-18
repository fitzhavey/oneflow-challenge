import { NgModule } from '@angular/core';

import { 
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }