import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie?: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieByIdentifier(params['id'])
        .subscribe(movie => this.movie = movie);
    });
  }

  goToPreviousPage(): void {
    this.location.back();
  }
}
