import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TermOption {
  id: number;
  terms: number;
  name: string;
}

export interface InterestOption {
  id: number;
  rate: number;
  name: string;
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent {
  amountVal: number = 0;
  termOptions: TermOption[] = [
    {
      id: 1,
      terms: 30,
      name: '30年',
    },
    {
      id: 2,
      terms: 20,
      name: '20年',
    },
    {
      id: 3,
      terms: 10,
      name: '10年',
    },
  ];
  interestRates: InterestOption[] = [
    {
      id: 1,
      rate: 0.01565,
      name: '1.565%',
    },
    {
      id: 2,
      rate: 0.02,
      name: '2.0%',
    },
    {
      id: 3,
      rate: 0.025,
      name: '2.5%',
    },
  ];

  // @Input() amountVal!: number;
  @Input() interestRateVal!: InterestOption;
  @Input() termsVal!: TermOption;

  @Input() calculateAction!: () => void;

  @Output() newAmountEvent = new EventEmitter<number>();

  btnClick = (): void => {
    this.calculateAction();
  };

  valuechange = (event: Event): void => {
    const value = (event.target as HTMLInputElement).value;

    if (!/[0-9]/gm.test(value)) {
      event.preventDefault();
      this.amountVal = 0;
      return;
    }

    this.amountVal = parseInt((event.target as HTMLInputElement).value);
    this.newAmountEvent.emit(this.amountVal);
  };
}
