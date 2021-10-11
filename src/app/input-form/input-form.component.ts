import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { DisplayQuotes } from 'displayQuotes';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
