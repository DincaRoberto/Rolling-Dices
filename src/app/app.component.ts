import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "./chart/chart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    @ViewChild(ChartComponent)
    private _chartComponent: ChartComponent;

    updateChart(){
        this._chartComponent.onUpdateChartValues();
    }
}
