import { Component, OnInit } from '@angular/core';
import { CoronaVirusReportsService } from '../corona-virus-reports.service';

declare let svgMap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _CoronaVirusReportsService: CoronaVirusReportsService) {}
  coronaApi: any;
  values: any = {};
  ngOnInit(): void {
    this.coronaApi = this._CoronaVirusReportsService.getReports().subscribe(
      (response) => {
        console.log(response.Countries);
        for (let i = 0; i < response.Countries.length; i++) {
          this.values[response.Countries[i].CountryCode] = {
            totalConfirmedCases: response.Countries[i].TotalConfirmed,
            totalDeaths: response.Countries[i].TotalDeaths,
          };
        }
        new svgMap({
          targetElementID: 'svgMap',
          mouseWheelZoomEnabled: false,
          data: {
            data: {
              totalConfirmedCases: {
                name: 'Total Confirmed Cases',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: 50000,
                thresholdMin: 1000,
              },
              totalDeaths: {
                name: 'Total Deaths',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: 50000,
                thresholdMin: 1000,
              },
            },
            applyData: 'totalConfirmedCases',
            values: this.values,
          },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
