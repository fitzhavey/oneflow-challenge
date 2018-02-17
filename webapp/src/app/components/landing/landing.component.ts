import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/EpisodesService';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
  }

}
