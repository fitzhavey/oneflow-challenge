import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import Episode from '../../models/Episode';
import { EpisodeDialogComponent } from '../episode-dialog/episode-dialog.component';

@Component({
  selector: 'app-episode-tile',
  templateUrl: './episode-tile.component.html',
  styleUrls: ['./episode-tile.component.scss']
})
export class EpisodeTileComponent implements OnInit {

  @Input() episode: Episode;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() { 
    this.episode = Object.assign(this.episode, Episode);
  }

  openDetailDialog(){
    let dialogRef = this.dialog.open(EpisodeDialogComponent, { width: '450px', data: this.episode });
  }

}
