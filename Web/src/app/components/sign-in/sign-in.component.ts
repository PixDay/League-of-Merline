import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArchivementComponent } from '../modals-components/archivement/archivement.component';
import { CryptoComponent } from '../modals-components/crypto/crypto.component';
import { DevComponent } from '../modals-components/dev/dev.component';
import { GameComponent } from '../modals-components/game/game.component';
import { ScheduleComponent } from '../modals-components/schedule/schedule.component';
import { ToDoComponent } from '../modals-components/to-do/to-do.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogSchedule() {
    this.dialog.open(ScheduleComponent);
  }

  openDialogGame() {
    this.dialog.open(GameComponent);
  }

  openDialogCrypto() {
    this.dialog.open(CryptoComponent);
  }

  openDialogTodo() {
    this.dialog.open(ToDoComponent);
  }

  openDialogDev() {
    this.dialog.open(DevComponent);
  }

  openDialogArchievement() {
    this.dialog.open(ArchivementComponent);
  }

}
