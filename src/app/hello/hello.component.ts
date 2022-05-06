import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  count = 0
  currentClass = 'red'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  increase(){
    this.count++;
  }

  toggleClass() {
    this.currentClass = this.currentClass == 'red' ? 'green' : 'red';
  }
}
