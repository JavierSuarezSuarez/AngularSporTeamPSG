import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerGetterService } from '../../servicios_admin/player-getter.service';
import { PlayerListTransferService } from '../../servicios_admin/player-list-transfer.service';
import { PlayerModifyService } from '../../servicios_admin/player-modify.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-services',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit {

  public id!: number;
  player!: Player;
  initialList!: Player [];
  resultList!: Player [];

  modifyForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    position: new FormControl(''),
  });

  constructor(private actRoute: ActivatedRoute, private _playerGetterService: PlayerGetterService, 
              private router: Router, private _playerModifyService: PlayerModifyService, 
              private _playerListTransferService: PlayerListTransferService) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id']; //Gets the id from route
    this.player = this._playerGetterService.search(this.id);
    this.initialList = this._playerListTransferService.getPlayerList(); 
  }

  modifyPlayer() {

    var name = this.modifyForm.get('name')?.value;
    var age = this.modifyForm.get('age')?.value;
    var position = this.modifyForm.get('position')?.value;

    //If a form parameter is null, the old value remains
    if(name.length != 0) this.player.name = name;
    if(age.length != 0) this.player.age = age;
    if(position.length != 0) this.player.position = position;

    this._playerModifyService.setPlayer(this.player); 
    this._playerModifyService.setPlayerList(this.initialList); 
    this.resultList = this._playerModifyService.modify(); 

    this._playerListTransferService.setPlayerList(this.resultList);
    this.router.navigate(['/admin/home']);
  }

}
