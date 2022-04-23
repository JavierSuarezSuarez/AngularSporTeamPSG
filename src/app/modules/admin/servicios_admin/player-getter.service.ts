import { Injectable } from '@angular/core';
import { Player } from '../components/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerGetterService {

  playerList!: Player [];

  constructor() { }

  public setPlayerList(playerList: Player[]) {

    this.playerList = playerList;

  }
  public search(id: number) {

    for(var i = 0; i < this.playerList.length; i++) {
      if(this.playerList[i].id == id) {
        return this.playerList[i];
      }
    }

    return this.playerList[0];
  }
}