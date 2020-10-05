import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  mail: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeRoute(route: string) {
    this.router.navigateByUrl('/' + route);
  }
}
