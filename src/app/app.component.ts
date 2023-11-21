import { Component } from '@angular/core';
import { InterestOption, TermOption } from './form/form.component';
import { PrincipalProps, calculateEqualPrincipal, calculatePMT } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-playground';

  // 額度
  amount: number = 100;

  // 年利率
  interestRate: InterestOption = {
    id: 1,
    rate: 0.01565,
    name: '1.565%',
  };

  // 年數
  terms: TermOption = {
    id: 2,
    terms: 20,
    name: '20年',
  };

  // 攤平資料
  principals: PrincipalProps[] = [];

  getAmount = (amount: number): void => {
    this.amount = amount;
  };

  calculate = (): void => {
    if (!this.amount) return;

    // open modal
    console.log('calculate montly rate', {
      amount: this.amount,
      interestRate: this.interestRate,
      terms: this.terms,
    });

    // const pmt = calculatePMT({
    //   rate: this.interestRate.rate,
    //   terms: this.terms.terms,
    //   amount: this.amount,
    // });

    this.principals = calculateEqualPrincipal({
      rate: this.interestRate.rate,
      terms: this.terms.terms,
      amount: this.amount,
    });
  };
}
