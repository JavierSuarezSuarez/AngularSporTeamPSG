import { Injectable } from '@angular/core';
import { Player } from '../components/player.interface';
@Injectable({
  providedIn: 'root'
})
export class PlayerListTransferService {


  playerList!: Player [];

  constructor() { }

  public setPlayerList(playerList: Player[]) {
    this.playerList = playerList;
  }
  
  public getPlayerList() {
    return this.playerList;
  }
}