import { Injectable } from '@angular/core';
import Episode from '../models/Episode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'q';

@Injectable()
export class EpisodeService {

    private API_ENDPOINT = 'http://localhost:8080/episodes';

    private _episodes: BehaviorSubject<Episode[]>;
    private dataStore: {
        episodes: Episode[]
    }

    constructor(private http: HttpClient) {
        this.dataStore = { episodes: [] };
        this._episodes = new BehaviorSubject<Episode[]>([]);
        this.loadAll();
        console.log('flag');
    }

    get episodes(): Observable<Episode[]> {
        return this._episodes.asObservable();
    }

    addepisode(episode: Episode): Promise<Episode> {
        return new Promise((resolver, reject) => {
            episode.id = this.dataStore.episodes.length + 1;
            this.dataStore.episodes.push(episode);
            this._episodes.next(Object.assign({}, this.dataStore).episodes);
            resolver(episode);
        });
    }

    episodeById(id: number) {
        return this.dataStore.episodes.find(x => x.id == id);
    }

    loadAll() {

        return this.http.get<Episode[]>(this.API_ENDPOINT)
            .subscribe(data => {
                console.log(data);
                this.dataStore.episodes = data;
                this._episodes.next(Object.assign({}, this.dataStore).episodes);
            }, error => {
                console.log("Failed to fetch episodes");
            });
    }

}
