import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Genre } from '../interfaces/Genre';
import { GenreService } from '../genre.service';
import { Filter } from '../interfaces/filter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  genres: Genre[] = [
    { id: 0, title: 'Loading' },
  ];
  
  tracksFilter = this.formBuilder.group({
    genre: [this.genres[0]],
    views: [null],
    downloads: [null],
    dloadsViewsRatio: [null],
    comments: [null],
    gradeCount: [null],
    gradeViewsRatio: [null],
    bitrate320: [false]
  });

  constructor(private formBuilder: FormBuilder,
              private genreService: GenreService,
              private router: Router) {}

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres
      this.tracksFilter.patchValue({genre : this.genres.find(x => x.id == 39)});
    });
  }

  onSubmit(): void {
    const filter: Filter = {
      genre: this.tracksFilter['genre'].value,
      views: this.tracksFilter['views'].value,
      downloads: this.tracksFilter['downloads'].value,
      dloadsViewsRatio: this.tracksFilter['dloadsViewsRatio'].value,
      comments: this.tracksFilter['comments'].value,
      gradeCount: this.tracksFilter['gradeCount'].value,
      gradeViewsRatio: this.tracksFilter['gradeViewsRatio'].value,
      bitrate320: this.tracksFilter['bitrate320'].value
    }
    
    this.router.navigateByUrl('/tracks', {state: {filter: filter}});
  }
}
