import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Districts } from 'src/app/models/districts.model';
import { Provinces } from 'src/app/models/provinces.model';
import { User } from 'src/app/models/user.model';
import { SharedService } from 'src/app/services/shared/shared.service';
import { SocketService } from '../../../services/socket/socket.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private socketService: SocketService
  ) { }

  provinces!: Provinces[]
  districts!: Districts[]

  formOpen = ''

  loged = false;
  phonePattern = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)
  registerForm!: FormGroup
  loginForm!: FormGroup
  cfmPassWord = ''
  currentUser!: User
  numberOfConnection!: number
  socket: any;

  ngOnInit(): void {
    this.socket = io.io(`localhost:3000`)

    if (Boolean(JSON.parse(localStorage.getItem('currentUser')!))) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
      this.loged = true
    }

    this.registerForm = this.fb.group({
      id: this.fb.control(0),
      username: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      fullname: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      district: this.fb.control('', Validators.required),
      ward: this.fb.control('', Validators.required),
      phone: this.fb.control('', [Validators.required, Validators.pattern(this.phonePattern)]),
      rate: this.fb.control(0),
      datejoin: this.fb.control(new Date()),
      average: this.fb.control(0),
    })

    this.loginForm = this.fb.group({
      usernameL: this.fb.control('', Validators.required),
      passwordL: this.fb.control('', Validators.required)
    })

    this.service.getProvince().subscribe((data) => {
      this.provinces = data
    })

    this.socket.on('number-of-connections', (data: number) => {
      this.numberOfConnection = data
    })
  }

  provinceSelected(event: any) {
    let prvID = this.provinces.filter(a => {
      return a.name.trim() == event.target.value
    })[0].id

    this.service.getDistricts(prvID).subscribe((data: Districts[]) => {
      this.districts = data
    })
  }

  logout() {
    this.loged = false;
    localStorage.removeItem('currentUser')
    location.href = '';
  }

  onRegister(value: User) {
    if (this.cfmPassWord === this.registerForm.get('password')?.value) {
      this.service.onRegister(value).subscribe(() => {
        alert('Thêm thành công!\n' + JSON.stringify(value))
        location.reload();
      })
    }
  }

  onLogin(value: any) {
    this.service.getAllUsers().subscribe((data: User[]) => {
      let x = data.filter((a: User) => {
        return (a.username === value.usernameL && a.password === value.passwordL)
      })

      if (x.length === 1) {
        alert(`Welcome back ${x[0].fullname}!`)
        localStorage.setItem('currentUser', JSON.stringify(x[0]))
        this.loged = true;
        location.reload();
      }

      else {
        alert('Something was wrong! :(')
      }
    })
  }

  // 
  openForm(str: string) {
    this.formOpen = str;
  }

  onPostUp() {
    location.href = '/post-up'
  }
}
