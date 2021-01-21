import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentUser } from 'src/app/model/current-user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: CurrentUser;

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //let id = this.actRoute.snapshot.paramMap.get('id');
    let username = localStorage.getItem('username');
    this.currentUser = new CurrentUser;
    this.authService.getUserProfile(username).subscribe(res => {
      this.currentUser = res as CurrentUser;
    })
  }

}
