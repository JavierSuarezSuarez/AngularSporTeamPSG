import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerGetterService } from '../../servicios_admin/player-getter.service';
import { PlayerListTransferService } from '../../servicios_admin/player-list-transfer.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  player!: Player;
  players: Player [] = [
    {id:1, "name": "Gianluigi Donnarumma", "age": "23", "position": "POR"},
    {id:2, "name": "Achraf Hakimi", "age": "23", "position": "LD"},
    {id:3, "name": "Nuno Mendes", "age": "19", "position": "LI"},
    {id:4, "name": "Sergio Ramos", "age": "36", "position": "DFC"},
    {id:5, "name": "Marquinhos", "age": "27", "position": "DFC"},
    {id:6, "name": "Danilo Pereira", "age": "30", "position": "MCD"},
    {id:7, "name": "Leandro Paredes", "age": "27", "position": "MC"},
    {id:8, "name": "Marco Verratti", "age": "29", "position": "MC"},
    {id:9, "name": "Kylian Mbappé", "age": "23", "position": "DC"},
    {id:10, "name": "Leo Messi", "age": "34", "position": "ED"},
    {id:11, "name": "Neymar Jr", "age": "30", "position": "EI"},
    {id:12, "name": "Mauricio Pocchettino", "age": "50", "position": "CH"},
  ];


  constructor(private router: Router, private _playerGetterService: PlayerGetterService, private _playerListTransferService: PlayerListTransferService) { }

  ngOnInit(): void {
    if(this._playerListTransferService.getPlayerList() != undefined) {
      this.players = this._playerListTransferService.getPlayerList();
    }
  }

  
  //CREATE
  redirectToCreate() {
    this._playerListTransferService.setPlayerList(this.players);
    this.router.navigate(['/admin/create']);
  }

  //READ (in detail)
  redirectToSee(idrecogida: number) {
    this._playerGetterService.setPlayerList(this.players);
    this.router.navigate(['/admin/detail',idrecogida]);

  }

  //UPDATE
  redirectToModify(idrecogida: number) {
    this._playerGetterService.setPlayerList(this.players);
    this. _playerListTransferService.setPlayerList(this.players);
    this.router.navigate(['/admin/modify', idrecogida]);
  }

  //DELETE
  deletePlayer(idrecogida: number) {
    for(var i = 0; i < this.players.length; i++) {
      if(this.players[i].id == idrecogida) {
        this.players.splice(i, 1);
      }
    }
  }

  
}
