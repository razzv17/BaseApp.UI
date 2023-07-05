import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests: any = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(data => {
      this.tests = data;
    });
  }
}
