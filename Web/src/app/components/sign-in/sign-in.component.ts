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
    const dialogRef = this.dialog.open(ScheduleComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogGame() {
    const dialogRef = this.dialog.open(GameComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogCrypto() {
    const dialogRef = this.dialog.open(CryptoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogTodo() {
    const dialogRef = this.dialog.open(ToDoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDev() {
    const dialogRef = this.dialog.open(DevComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogArchievement() {
    const dialogRef = this.dialog.open(ArchivementComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
