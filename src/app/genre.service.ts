import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { Genre } from './interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  // readonly url = 'http://clubtone.net/music/club_music/2';
  readonly url = '/api/genres';
  genres: Observable<Genre[]>;

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    if (!this.genres) {
      this.genres = this.http.get(this.url, {responseType: 'text'}).pipe(
        map<string, Genre[]>(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const options = doc.querySelectorAll('div.filterBlock > select.select_filter > option');
          return Array.from(options).map(x => {
            let e = x as HTMLOptionElement;
            return ({id: +e.value, title: e.text}) as Genre;
          });
        }))
      }
    return this.genres;
  }
}
