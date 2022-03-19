import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @ViewChild('childrenComp') childrenComp!: ChildrenComponent

  thisPage: string = 'Dự án'

  toggleInside() {
    console.log(this.childrenComp);
  }

}
