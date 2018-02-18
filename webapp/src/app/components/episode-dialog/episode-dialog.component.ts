import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Episode from '../../models/Episode';


@Component({
  selector: 'app-episode-dialog',
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.scss']
})
export class EpisodeDialogComponent implements OnInit {

  // stores the data for the shown episode
  private episode: Episode;

  // include injectables MatDialogRef and MAT_DIALOG_DATA to allow episode obkject to be passed ins 
  constructor(
    private dialogRef: MatDialogRef<EpisodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  
  ngOnInit() {
    this.episode = this.data;
  }

}
