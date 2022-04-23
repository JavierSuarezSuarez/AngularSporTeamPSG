import { Injectable } from '@angular/core';
import { Player } from '../components/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerModifyService {

  player!: Player;

  playerList!: Player [];

  constructor() { }

  public setPlayer(player: Player) {
    this.player = player;

  }

  public setPlayerList(playerList: Player[]) {

    this.playerList = playerList;

  }
  public modify() {
    for(var i = 0; i < this.playerList.length; i++) {
      if(this.playerList[i].id == this.player.id) {
          this.playerList[i] = this.player;
      }
    }
    return this.playerList;
  }
}