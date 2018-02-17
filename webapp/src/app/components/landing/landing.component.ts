import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/EpisodeService';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import Episode from '../../models/Episode';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private episodes: Observable<Episode[]>;


  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.episodes = this.episodeService.episodes;
    this.episodeService.loadAll();
  }

}
