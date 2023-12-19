import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [NavigationComponent, SearchComponent],
  imports: [CommonModule],
  exports: [NavigationComponent]
})
export class SharedModule {}
