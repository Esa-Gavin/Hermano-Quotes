import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  @Input() newQ: DisplayQuotes;
  disQuotes = [
    new DisplayQuotes(
      0,
      'Gavin Kariuki',
      'gavin.kariuki@student.moringaschool.com',
      'Big Chungus',
      0,
      0,
      new Date('Oct 04, 2021')
    ),
  ];
  upVote(event, i) {
    event.preventDefault();
    this.disQuotes[i].likes += 1;
  }
  downVote(event, i) {
    event.preventDefault();
    this.disQuotes[i].dislikes += 1;
  }
  deleteQuote(event, i) {
    console.log('gasgazgf');
    this.disQuotes.splice(i, 1);
  }

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.newQ) {
      this.disQuotes = [...this.disQuotes, this.newQ];
    }
  }
}
