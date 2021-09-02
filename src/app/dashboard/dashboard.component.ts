import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];
  // topCharacterNames: string[] = ["Aang", "Katara", "Zuko", "Toph", "Sokka"];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => {
        // this.characters = characters.slice(0, 4);
        this.characters = characters.filter(function(character): boolean {
          return ["Aang", "Katara", "Zuko", "Toph", "Sokka"].indexOf(character.name) > -1;
        });
      });
  }

}
