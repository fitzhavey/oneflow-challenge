import { Injectable } from '@angular/core';
import Episode from '../models/Episode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'q';

/** 
 *  Service to interface with the Episode API
 */
@Injectable()
export class EpisodeService {

    // path to API endpoint
    private episodesResourse = 'http://localhost:8080/episodes';

    // create a BehaviorSubject to allow the episode list to update as the data changes
    private _episodes: BehaviorSubject<Episode[]>;
    private dataStore: {
        episodes: Episode[]
    }

    constructor(private http: HttpClient) {
        this.dataStore = { episodes: [] };
        this._episodes = new BehaviorSubject<Episode[]>([]);
    }

    // returns an observable of all the episodes loaded
    get episodes(): Observable<Episode[]> {
        return this._episodes.asObservable();
    }

    // sets the stored episodes to those at the requested path
    // #todo: could improve here by storing all locally and not reloading the same data
    loadAllAt(path: string) {
        return this.http.get<Episode[]>(this.episodesResourse + path)
            .subscribe(data => {
                this.dataStore.episodes = data;
                this._episodes.next(Object.assign(Episode, this.dataStore).episodes);   // ensure the value is correctly typed
                console.log("Loaded episodes as:");
                console.log(this.episodes);
            }, error => {
                console.log("Failed to fetch episodes");
            });
    }

}
