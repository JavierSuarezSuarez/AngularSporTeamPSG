import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerAddService } from '../../servicios_admin/player-add.service';
import { PlayerListTransferService } from '../../servicios_admin/player-list-transfer.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-about',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {


  createForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    position: new FormControl(''),
  });

  player!: Player; 
  initialList!: Player []; 
  resultList!: Player []; 

  constructor(private router: Router, private _playerAddService: PlayerAddService, private _playerListTransferService: PlayerListTransferService) { }

  ngOnInit(): void {
    this.player= {id: 0, name : "", age: "", position: ""};
    this.initialList = this._playerListTransferService.getPlayerList();
  }

  onSubmit(): void {
    this.player.name = this.createForm.get('name')?.value;
    this.player.age = this.createForm.get('age')?.value;
    this.player.position = this.createForm.get('position')?.value;

    this._playerAddService.setPlayer(this.player);
    this._playerAddService.setPlayerList(this.initialList);
    this.resultList = this._playerAddService.add();
    
    this._playerListTransferService.setPlayerList(this.resultList);
    this.router.navigate(['/admin/home']);

  }

}
