import { Component, OnInit, Input } from '@angular/core';
import Episode from '../../models/Episode';

@Component({
  selector: 'app-episode-tile',
  templateUrl: './episode-tile.component.html',
  styleUrls: ['./episode-tile.component.scss']
})
export class EpisodeTileComponent implements OnInit {

  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
