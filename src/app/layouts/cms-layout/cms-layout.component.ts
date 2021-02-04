import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cms-layout',
  templateUrl: './cms-layout.component.html',
  styleUrls: ['./cms-layout.component.css']
})
export class CmsLayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  langs = ['es', 'en'];
  ready = false;

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    this.translate.addLangs(this.langs);
    this.translate.setDefaultLang(this.langs[0]);
    this.translate.use(this.langs[0]);
    this.ready = true;
  }

  ngOnInit(): void {}

  public switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
