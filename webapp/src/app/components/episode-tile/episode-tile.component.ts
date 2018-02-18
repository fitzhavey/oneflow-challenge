import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import Episode from '../../models/Episode';
import { EpisodeDialogComponent } from '../episode-dialog/episode-dialog.component';

@Component({
  selector: 'app-episode-tile',
  templateUrl: './episode-tile.component.html',
  styleUrls: ['./episode-tile.component.scss']
})
export class EpisodeTileComponent{

  // allows an episode to be passed to this tile as a property
  @Input() episode: Episode;

  // include the injectable matdialog to let this component open a dialog
  constructor(
    private dialog: MatDialog
  ) { }

  // open the dialog
  openDetailDialog(){
    this.dialog.open(EpisodeDialogComponent, { width: '450px', data: this.episode });
  }

}
