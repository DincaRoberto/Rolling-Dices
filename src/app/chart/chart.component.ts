import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    public onUpdateChartValues:Function;
    private myChart:any;

    constructor() {

        this.onUpdateChartValues = this.updateChartValues.bind(this);
    }

    private updateChartValues(){
        this.myChart.series[0].data[0].update(this.myChart.series[0].data[0].y + 1);
    }

    ngOnInit() {

        this.myChart = Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            plotOptions: {
                column: {
                    pointPadding: 0.3,
                    borderWidth: 0
                }
            },
            title: {
                text: 'Dices Values Appearances '
            },
            xAxis: {
                categories: ['Dice1', 'Dice2', 'Dice3', 'Dice4']
            },
            yAxis: {
                title: {
                    text: 'Nr of appearances'
                }
            },
            series: [{
                name: '1',
                data: [1, 0, 4, 0]
            }, {
                name: '2',
                data: [5, 7, 3]
            }, {
                name: '3',
                data: [4, 5, 1]
            }, {
                name: '4',
                data: [4, 6, 1]
            }, {
                name: '5',
                data: [2, 5, 5]
            }, {
                name: '6',
                data: [7, 5, 6]
            }


            ]
        });

    }

}
