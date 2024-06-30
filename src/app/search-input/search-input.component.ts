import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // You can initialize any required data here
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery).subscribe(
        result => {
          console.log('Search result:', result.result);
        },
        error => {
          console.error('Error during search:', error);
        }
      );
    } else {
      console.log('Search query is empty');
    }
  }
}