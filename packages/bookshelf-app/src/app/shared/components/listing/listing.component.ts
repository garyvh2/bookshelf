import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `shozas_pin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/svgs/pin.svg'
      )
    );
  }

  ngOnInit() {}
}
