import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reportDetail',
  templateUrl: './reportDetail.component.html',
  styleUrls: ['./reportDetail.component.scss']
})
export class ReportDetailComponent implements OnInit {
  id: number = 0;
  reporterId: string = "";
  constructor(private activatedRoute: ActivatedRoute, private reportService: ReportsService) { }
  reportId: number = 0;
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      this.reportId = this.id;
      console.log(this.id);
    });

    this.reportService.getReportsById(this.id).subscribe(response => {
      this.reporterId = response[0].reporterUserId
      console.log(response);
    })
  }





}
