import { Component, OnInit, Input } from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { DisplayQuotes } from 'src/displayQuotes';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  name: string;
  yourName: string;
  em: string;
  email: string;
  quote: string;
  jina: string;
  publishedDate: Date;
  newQuote: any;
  like = faThumbsUp;
  downvote = faThumbsDown;
  delete = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
