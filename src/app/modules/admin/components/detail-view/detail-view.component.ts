import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerGetterService } from '../../servicios_admin/player-getter.service';
import { Player } from '../player.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  id=-1;
  player!: Player;

  constructor(private actRoute: ActivatedRoute, private _playerGetterService: PlayerGetterService) { }

  ngOnInit(): void {
    this.id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.player = this._playerGetterService.search(this.id); 
  }

}
