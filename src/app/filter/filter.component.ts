import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Genre } from '../interfaces/Genre';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  genres: Genre[] = [
    { id: 1, title: 'Techno' },
    { id: 2, title: 'Chillout' },
    { id: 3, title: 'Progressive' },
  ];
  
  tracksFilter = this.formBuilder.group({
    genre: [this.genres[0]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('onSubmit');
  }
}
