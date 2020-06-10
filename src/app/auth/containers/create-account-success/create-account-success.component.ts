import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account-success',
  templateUrl: './create-account-success.component.html',
  styleUrls: ['./create-account-success.component.scss']
})
export class CreateAccountSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setupProfile() {

  }

  logout() {
    console.log('logout')
    return this.router.navigate(['/auth/logIn'])
  }
}
