import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core'

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>

  @Input()
  public placeholder: string = 'Search...'

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>()

  public keySearch(): void {
    console.log(this.searchInput.nativeElement.value)

    this.search.emit(this.searchInput.nativeElement.value)
  }
}
