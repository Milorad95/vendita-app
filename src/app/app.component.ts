import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Maske } from 'src/modeli/maske';
import { HttpClient } from '@angular/common/http';
import { MaskeService } from 'src/servis/maske.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vendita-app';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private http: HttpClient, 
              private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 2000px)']).subscribe((res => {
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    }));
  }
  // opened = false;

  // onSidenavClose() {
  //   this.opened = !this.opened;
  // }

  maske!: any;
  servis!: MaskeService;
  ngOnInit() {
    const url: string = "/assets/maske.json";
    this.http.get(url).subscribe( res => {
      this.maske = res;
    });
    // this.servis.dohvatiPodatke().subscribe( res => {
    //   this.maske = res!;
    // });
  }

  @Input() counterValue = 0;
  @Output() counterChange = new EventEmitter();
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}
