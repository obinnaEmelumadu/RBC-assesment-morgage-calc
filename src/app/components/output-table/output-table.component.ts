import { Component, Input, OnInit } from '@angular/core';
import * as payModels from '../../models';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss'],
})
export class OutputTableComponent implements OnInit {
  @Input() output!: payModels.output;
  constructor() {}

  ngOnInit(): void {}
}
