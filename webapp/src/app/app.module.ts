import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { EpisodeService } from './services/EpisodeService';
import { EpisodeTileComponent } from './components/episode-tile/episode-tile.component';
import { EpisodeDialogComponent } from './components/episode-dialog/episode-dialog.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: ':season', component: LandingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EpisodeTileComponent,
    EpisodeDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [EpisodeService],
  bootstrap: [AppComponent],
  entryComponents: [
    EpisodeDialogComponent
  ]
})
export class AppModule { }
