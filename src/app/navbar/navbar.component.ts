import { Component, OnInit } from '@angular/core';
import { CoronaVirusReportsService } from '../corona-virus-reports.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  myGlobalData: any = {};

  constructor(private _CoronaVirusReportsService: CoronaVirusReportsService) {}

  ngOnInit(): void {
    this._CoronaVirusReportsService.getReports().subscribe((response) => {
      this.myGlobalData = response.Global;
    });
  }
}
