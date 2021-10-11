import { DisplayQuotes } from './../../displayQuotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
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

  @Output() postQuotes = new EventEmitter();
  disQuotes = [
    new DisplayQuotes(
      0,
      'Gavin Kariuki',
      'gavin.kariuki@student.moringaschool.com',
      'Big Chungus',
      0,
      0,
      new Date()
    ),
  ];

  removeCard(i) {
    this.disQuotes.splice(i, 1);
  }
  constructor() {}

  onSubmit() {
    this.newQuote = new DisplayQuotes(
      0,
      this.jina,
      this.email,
      this.quote,
      0,
      0,
      new Date()
    );
  }

  ngOnInit(): void {}
}
