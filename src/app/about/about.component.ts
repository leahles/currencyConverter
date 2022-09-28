import { Component, OnInit } from '@angular/core';
import { IHistory } from '../IHistory';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  historySearch:IHistory[]=[]
  constructor() { }

  ngOnInit(): void {
    this.historySearch =  JSON.parse(localStorage.getItem("checkHistory")!)
  }

}
