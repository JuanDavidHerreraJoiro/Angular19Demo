import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { MaterialModule } from '../../../shared/directives/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
Chart.register(...registerables);

@Component({
  selector: 'app-graphic',
  imports: [
      CommonModule, 
      RouterModule, 
      MaterialModule,
      FormsModule, 
      ReactiveFormsModule
    ],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent {

  totalUsers?: any;
  userLogins: any;
  userTypes: any;
  apiCalls: any;
  chart?: Chart;

  exampleData: any = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    Juan: [12, 45, 22, 23],
    Michael: [8, 30, 18, 21],
    Rumbo: [19, 15, 19, 13],
    Karen: [1, 0, 5, 20]
  };

  constructor( ) { }


  /*ngAfterViewInit(): void {
    if (this.exampleData) {
      this.initializeChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.exampleData) {
      this.updateChart();
    }
  }*/

  ngOnInit() {

    /*if (changes['data'] && this.exampleData) {
      this.totalUsers = this.createTotalUsersChart(this.exampleData);
    }*/

    this.totalUsers = new Chart('totalUsers', this.createTotalUsersChart(this.exampleData));
    this.userLogins = new Chart('userLogins', this.createUserLoginsChart());
    this.userTypes = new Chart('userTypes', this.createUserTypesChart());
    this.apiCalls = new Chart('apiCalls', this.createApiCallsChart());
  }
  ngOnDestroy() {
    this.totalUsers.destroy();
    this.userLogins.destroy();
  }

 /* initializeChart(): void {
    const ctx = this.chartCanvas!.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Failed to acquire chart context');
      return;
    }
    this.chart = new Chart(ctx, this.createTotalUsersChart(this.exampleData));
  }*/

  /*updateChart(): void {
    if (this.chart) {
      this.chart.data = this.createTotalUsersChart(this.exampleData).data;
      this.chart.update();
    }
  }*/


  createTotalUsersChart(data: any): ChartConfiguration<'line'> {
    return {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: Object.keys(data).filter(key => key !== 'labels').map(key => ({
          label: key,
          data: data[key],
          borderColor: this.getRandomColor(),
          backgroundColor: this.getRandomColor(0.1),
          borderWidth: 2,
          fill: true
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  }

  createUserLoginsChart(): any {
    return {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
          {
            label: 'User Logins',
            data: [55, 56, 82, 93],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

  createUserTypesChart(): any {
    return {
      type: 'doughnut',
      data: {
        labels: ['Owner', 'Admin', 'Member', 'User', 'Guest', 'Anonymous'],
        datasets: [
          {
            label: 'Users by Type',
            data: [15, 20, 30, 25, 5, 5],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

  createApiCallsChart(): any {
    return {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
          {
            label: 'Api Calls - Success',
            data: [150, 200, 300, 250],
            borderWidth: 1,
          },
          {
            label: 'Api Calls - Failed',
            data: [15, 20, 15, 12],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  }

  getRandomColor(opacity = 1): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

}
