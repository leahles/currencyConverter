import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CurrencyConverterService } from '../Service/currency-converter.service';
import { FormBuilder } from '@angular/forms'
import { IHistory } from '../IHistory';
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currenciesList!: object;
  result!: number;
  currencyConverterForm!: FormGroup

  constructor(private currencyConverterService: CurrencyConverterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.currencyConverterService.getCurrencyTypes().subscribe(data => {
      this.currenciesList = data.conversion_rates
    });
    this.currencyConverterForm = this.formBuilder.group({
      sum: [1, Validators.required],
      currentCurrency: ['', Validators.required],
      newCurrency: ['', [Validators.required,]],
    },
    { validators: [this.currencySameValidator] });
    this.onChanges();
  }

  currencySameValidator(form: FormGroup): { [key: string]: boolean } | null {
    const currentCurrency = form.controls['currentCurrency'].value;
    const newCurrency = form.controls['newCurrency'].value;
    if (!currentCurrency || !newCurrency) {
      return null;
    }
    return (currentCurrency.key === newCurrency.key) ? { mismatch: true } : null;
  }


  onChanges(): void {
    this.currencyConverterForm.valueChanges.subscribe(val => {
      if (this.currencyConverterForm.valid) {
        const sum = this.currencyConverterForm.value.sum;
        const currentCurrency = this.currencyConverterForm.value.currentCurrency;
        const newCurrency = this.currencyConverterForm.value.newCurrency;
        this.result = newCurrency.value / currentCurrency.value * sum;
        let history:IHistory[]=[]
        if(localStorage.getItem("checkHistory") !== 'null')
        {
          history = JSON.parse(localStorage.getItem("checkHistory")!)
        }
        history.push({
          currentCurrency: currentCurrency.key,
          newCurrency: newCurrency.key,
          sum: sum,
          result: this.result
        })
        localStorage.setItem("checkHistory", JSON.stringify(history));
      }
    });
  }
}


