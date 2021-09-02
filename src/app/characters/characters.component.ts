import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
// import { CHARACTERS } from '../mock-characters';
import { CharacterService } from '../character.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  listView: boolean = true;

  onSelect(state: boolean): void {
    this.listView = state;
  }

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => {
        this.characters = characters.filter((character) => character.name !== "Dock/Xue/Bushi");
      });
  }
}
