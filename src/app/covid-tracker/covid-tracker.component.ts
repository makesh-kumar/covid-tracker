import {
  Component,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { MatTableDataSource } from "@angular/material/table";
import { MatTable } from "@angular/material";
import { ICovidData } from "../Modal/covid-data";
import { ApiService } from "../Services/api-service.service";

@Component({
  selector: "app-covid-tracker",
  templateUrl: "./covid-tracker.component.html",
  styleUrls: ["./covid-tracker.component.less"],
})
export class CovidTrackerComponent implements OnInit {
  public covidData: ICovidData[] = [];
  public displayedColumns: string[];
  public dataSource = new MatTableDataSource<ICovidData>(this.covidData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.displayedColumns = [
      "country",
      "cases",
      "todayCases",
      "deaths",
      "todayDeaths",
      "recovered",
      "active",
      "casesPerOneMillion",
      "deathsPerOneMillion",
      "tests",
    ];

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCovidData();
  }

  getCovidData(): void {
    this.apiService.getCovidData().subscribe(
      (response) => {
        this.covidData = response;
        console.log(response);
        this.dataSource.data = this.covidData as ICovidData[];
      },
      (error) => {
        console.log("err...", error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
