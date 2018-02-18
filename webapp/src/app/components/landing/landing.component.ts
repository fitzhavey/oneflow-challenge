import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/EpisodeService';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import Episode from '../../models/Episode';
import { MatSnackBarRef, MatSnackBar } from '@angular/material';

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

  // inlcude injectables for data access, handling route parameters, and opening a snackbar
  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    
    // subscribe to the value provided by episodeService
    this.episodeService.episodes.subscribe(episodes => {
      this.episodes = episodes;
      this.shownEpisodes = episodes;
    });

    // use route parameters to work out which parameters to send to the API
    this.route.params.subscribe(params => {
      let season = params['season'];
      let path = '/';
      if (season){
        season = season.slice(-1);
        path += '?season=' + season;
      }
      this.episodeService.loadAllAt(path);
      // alert the user a request has been made (this line throws a strange bug in dev mode)
      let ref = this.snackbar.open('Loaded data at ' + path);
      setTimeout(this.snackbar.dismiss.bind(this.snackbar), 2500);
      console.warn('Please disregard the following error!');
    });

  }


  goFilter(){
    // if blank don't bother searching
    if (this.filterText == ''){
      this.shownEpisodes = this.episodes;
      return;
    }
    // otherwise filter to lowercase matches on the episode name
    this.shownEpisodes = this.episodes.filter(episode => {
      return episode.name.toLowerCase().search(this.filterText.toLowerCase()) > -1;
    });
  }

}
