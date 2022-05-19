import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Aca se crea el evento onEnter este evento le paso al componente padre por props.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  public textInput: string = '';

  search(): void {
    this.onEnter.emit(this.textInput);
    this.textInput = '';
  }
}
