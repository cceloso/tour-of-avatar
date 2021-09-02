import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.css']
})
// export class CharactersGalleryComponent implements OnInit {
export class CharactersGalleryComponent implements OnChanges {
  @Input() characters: Character[] = [];
  charactersToDisplayCount: number = 12;
  charactersFiltered: Character[] = [];
  charactersToDisplay: Character[] = [];

  page: number = 1;
  maxPage: number = 3;
  selectedFilter: string = 'All';
  filterName: string = 'All';

  constructor(private characterService: CharacterService) { }

  onSelectPage(page: number): void {
    if(page < 1 || page > 3 || page > this.maxPage) {
      return;
    }

    this.page = page;
    this.charactersToDisplay = this.charactersFiltered.slice((this.page - 1) * this.charactersToDisplayCount, this.page * this.charactersToDisplayCount);
  }

  onSelectFilter(selectedFilter: string, filterName: string): void {
    console.log("filter dropdown selected");
    this.selectedFilter = selectedFilter;
    this.filterName = filterName;

    if(selectedFilter === 'All') {
      this.charactersFiltered = this.characters;
      this.charactersToDisplay = this.charactersFiltered.slice((this.page - 1) * this.charactersToDisplayCount, this.page * this.charactersToDisplayCount);
      this.maxPage = Math.ceil(this.charactersFiltered.length / this.charactersToDisplayCount);
    } else {
      this.getBenders(selectedFilter);
    }
  }

  getBenders(bending: string): void {
    this.characterService.getBenders(bending)
      .subscribe(benders => {
        // this.charactersToDisplay = benders;
        this.charactersFiltered = benders.filter((bender) => bender.name !== "Dock/Xue/Bushi");
        this.maxPage = Math.ceil(this.charactersFiltered.length / this.charactersToDisplayCount);
        this.onSelectPage(1);
      });
  }
  

  // ngOnInit(): void {
  ngOnChanges(): void {
    this.charactersFiltered = this.characters;
    this.charactersToDisplay = this.characters.slice(0, this.charactersToDisplayCount);
  }
}
