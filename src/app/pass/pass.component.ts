import { Component, OnInit } from '@angular/core';
import * as generatePass from 'generate-password';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

length;
includeNumbers = true;
includeLetters = true;
includeSymbols = true;
password = '';



onChangeLength(value: string) {
  const parsedValue = parseInt(value);

  if (!isNaN(parsedValue)) {
    this.length = parsedValue;
  }
}

onChangeUseLetters() {
  this.includeLetters = !this.includeLetters;
}

onChangeUseNumbers() {
  this.includeNumbers = !this.includeNumbers;
}

onChangeUseSymbols() {
  this.includeSymbols = !this.includeSymbols;
}

onButtonClick() {
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXVZ';
  const symbols = '!@#$%^&*()';

  let validChars = '';
  if (this.includeLetters) {
    validChars += letters;
  }
  if (this.includeNumbers) {
    validChars += numbers;
  }
  if (this.includeSymbols) {
    validChars += symbols;
  }
  let generatedPassword = '';
  for (let i = 0; i < this.length; i++) {
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }
  this.password = generatedPassword;
}

}
