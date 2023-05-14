import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  this.matIconRegistry.addSvgIcon('my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/retro_vm_logo.svg'));
}

  ngOnInit(): void {
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    // Implement your search logic here.
  }

  toggleSidePanel(): void {
    // Implement your side panel toggling logic here.
  }

}
