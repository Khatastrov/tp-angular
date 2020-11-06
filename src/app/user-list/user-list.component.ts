import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private _users: {};
  users: {};
  @Output() 
  onChange: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private service: UserService) { }

  ngOnInit(): void {
    console.log("** initialisation du composant **");

    this.loadUsers();
  }

  loadUsers() {
    console.log("- chargement de la liste");

    this.service.getAll()
      .subscribe(res => {
        this._users = res;
        this.users = res;
      });
  }

  recalcWallet(user, key) {
    if (key == "add") {
      console.log(`Tentative d'ajout à la cagnotte de ${user.name}
      = 10€`);
      this.service.addMoney(user.id)
        .subscribe(res => {
          console.log("nouveau solde : " + res['wallet']);
          this.onChange.emit(user.name);
          this.loadUsers();
        });
    } else if (key == "remove") {
      console.log(`Tentative de retrait sur la cagnotte de ${user.name}
      = 10€`);
      this.service.removeMoney(user.id)
        .subscribe(res => {
          console.log("nouveau solde : " + res['wallet']);
          this.onChange.emit(user.name);
          this.loadUsers();
        });
    }
  }
}
