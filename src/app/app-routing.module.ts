import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';


const routes: Routes = [
 { path:'',redirectTo:'currencyConverter',pathMatch:'full'},
 { path: 'currencyConverter', component: CurrencyConverterComponent },
 { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
