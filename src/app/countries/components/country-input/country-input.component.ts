import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  //Aca se crea el evento onEnter este evento le paso al componente padre por props.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public textInput: string = '';
  public debounce: Subject<string> = new Subject();

  @Input() public placeholder: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(200)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search(): void {
    this.onEnter.emit(this.textInput);
  }

  pressKey() {
    this.debounce.next(this.textInput);
  }
}
