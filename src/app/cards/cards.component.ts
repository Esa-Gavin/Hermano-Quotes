import { DisplayQuotes } from './../../displayQuotes';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';


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
  highestVote: number = 0;
  highestQuote: number = 0;

  @Input() newQ: DisplayQuotes;
  disQuotes = [
    new DisplayQuotes(
      0,
      'Gavin Kariuki',
      'gavin.kariuki@student.moringaschool.com',
      'Big Chungus',
      12,
      3,
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
  // code for highlighting the highest quote //
  highlight(index: number){
    const check = this.disQuotes[index].likes;
    if(this.disQuotes.length > 0) {
      const votes: number[] = [];
      this.disQuotes.forEach(nyani => votes.push(nyani.likes));
      if (check === Math.max(...votes)){
        return true;
      }
    }
    return false;
  }

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.newQ) {
      this.disQuotes = [...this.disQuotes, this.newQ];
    }
  }
}
