import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/models/player';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  editPlayer(player: Player) {
    this.playerService.update(player).subscribe(editedPlayer =>
        console.log(`Le jouer ${editedPlayer} a été modifié`)
      )
  }

  deletePlayer(player: Player) {
    this.playerService.delete(player.id).subscribe(() => console.log("Un joeur a été supprimé"))
  }

}
