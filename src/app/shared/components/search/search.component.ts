import { Component, Input } from '@angular/core'

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input()
  public placeholder: string = 'Search...'
}
