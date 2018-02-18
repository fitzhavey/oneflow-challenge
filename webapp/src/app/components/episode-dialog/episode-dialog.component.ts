import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Episode from '../../models/Episode';


@Component({
  selector: 'app-episode-dialog',
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.scss']
})
export class EpisodeDialogComponent implements OnInit {

  private episode: Episode;  

  constructor(
    private dialogRef: MatDialogRef<EpisodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
    this.episode = this.data;
    console.log(this.episode);
  }

}
