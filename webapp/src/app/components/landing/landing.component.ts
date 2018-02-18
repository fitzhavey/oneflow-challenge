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

  private data: Observable<Episode[]>;
  private filterText: string = '';
  private episodes: Episode[];
  private shownEpisodes: Episode[];

  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.episodeService.loadAll();
    this.episodeService.episodes.subscribe(episodes => {
      this.episodes = episodes;
      this.shownEpisodes = episodes;
    });
  }

  goFilter(){
    if (this.filterText == ''){
      this.shownEpisodes = this.episodes;
      return;
    }
    this.filterText = this.filterText.toLowerCase();
    this.shownEpisodes = this.episodes.filter(episode => {
      let name = episode.name.toLowerCase();
      return name.search(this.filterText) > -1;
    });
  }

}
