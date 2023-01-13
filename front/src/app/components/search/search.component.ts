import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Movie } from 'src/app/interfaces/movie.interface';
import { SearchQueryParams } from 'src/app/interfaces/search-query-params.interface';
import { MovieService } from 'src/app/service/movie.service';

enum SortableFieldsEnum {
  Title = 'Title',
  IMDBVotes = 'IMDB Votes',
  IMDBRating = 'IMDB Rating',
  RottenTomatoesRating = 'Rotten Tomatoes Rating'
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies?: Movie[];
  movies$!: Observable<Movie[]>;
  sortableFields = SortableFieldsEnum;
  sortBy = SortableFieldsEnum.Title;
  searchQuery?: string;

  private searchInput = new Subject<SearchQueryParams>();


  constructor(private movieService: MovieService) { }

  searchMovies(searchQuery: string, sortBy?: SortableFieldsEnum): void {
    this.searchQuery = searchQuery;
    if (sortBy !== undefined) {
      this.sortBy = sortBy
    }
    this.searchInput.next({
      query: searchQuery,
      sortBy: this.sortBy,
    });
  }

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies() {
    this.movies$ = this.searchInput.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((searchQueryParams: SearchQueryParams) => this.movieService.searchMovies(searchQueryParams)),
    );
  }

}


