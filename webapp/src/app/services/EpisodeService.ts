import { Injectable } from '@angular/core';
import Episode from '../models/Episode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'q';

@Injectable()
export class EpisodeService {

    private episodesResourse = 'http://localhost:8080/episodes';

    private _episodes: BehaviorSubject<Episode[]>;
    private dataStore: {
        episodes: Episode[]
    }

    constructor(private http: HttpClient) {
        this.dataStore = { episodes: [] };
        this._episodes = new BehaviorSubject<Episode[]>([]);
    }

    get episodes(): Observable<Episode[]> {
        return this._episodes.asObservable();
    }

    loadAllAt(path: string) {
        return this.http.get<Episode[]>(this.episodesResourse + path)
            .subscribe(data => {
                this.dataStore.episodes = data;
                this._episodes.next(Object.assign(Episode, this.dataStore).episodes);
                console.log("Loaded episodes as:");
                console.log(this.episodes);
            }, error => {
                console.log("Failed to fetch episodes");
            });
    }

}
