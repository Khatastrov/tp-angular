import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;

  constructor(private playerService: PlayerService, private formBuilder: FormBuilder) {
    this.playerForm = this.formBuilder.group({
      name: [''],
      number: [''],
      team: [''],
      injured: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Formulaire validé");
  }

}
