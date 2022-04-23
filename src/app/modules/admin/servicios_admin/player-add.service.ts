import { Injectable } from '@angular/core';
import { Player } from '../components/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerAddService {

  player!: Player;

  playerList!: Player [];

  constructor() { }

  public setPlayer(player: Player) {
    this.player = player;

  }

  public setPlayerList(playerList: Player[]) {

    this.playerList = playerList;

  }
  public add() {

    var idvec = -1;

    for(var i = 0; i < this.playerList.length; i++) {
      if(this.playerList[i].id > idvec) {
          idvec = this.playerList[i].id;
      }
    }
    idvec++;
    this.player.id = idvec;

    this.playerList.push(this.player);

    return this.playerList;
  }
}