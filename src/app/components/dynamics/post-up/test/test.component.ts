import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  result: any = {}

  myinput: string = '';

  myArr:any = []

  ngOnInit(): void {
  }

  enter(event: any) {
    if(event.keyCode === 13) {

      this.myArr.push(this.myinput)
      this.myinput = ''
    }
  }

  getObj() {    
    let arrCounter = [...new Set(this.myArr.map((a: any) => a.length))]

    let grouping = arrCounter.map((a:any) => {
      return this.myArr.filter((b: any) => {
        return b.length === Number(a);
      })
    })


    let rs = arrCounter.reduce((a: any, b: any) => {
      let x = {
        [b]: grouping.filter(a => a[0].length === Number(b))[0]
      }
      return Object.assign(x, a);
    }, {})

    this.result = rs
    console.log(this.result);
    
    this.myArr = []
  }

}
