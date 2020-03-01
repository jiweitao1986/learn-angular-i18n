import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'learn-angular-i18n';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('zh');
  }
}
