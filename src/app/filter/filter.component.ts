import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Genre } from '../interfaces/Genre';
import { GenreService } from '../genre.service';

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
              private genreService: GenreService) {}

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres
      this.tracksFilter.patchValue({genre : this.genres.find(x => x.id == 39)});
    });
  }

  onSubmit(): void {
    console.log('onSubmit');
  }
}
