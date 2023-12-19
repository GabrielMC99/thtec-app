import { Component, OnInit } from '@angular/core'

import { initFlowbite } from 'flowbite'

@Component({
  selector: 'shared-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite()
  }
}
