# Services

#### Generate service
```batch
ng generate service logging
ng g s logging
```

#### Write method in service for a test
```ts
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  log(){
    console.log('it is LOg seervice')
  }

}
```

#### Import in the component (Locally)
```ts
import { LoggingService }     from '../services/logging/logging.service';
...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService]   // <!-- here import -->
})
...
constructor(private log: LoggingService){}

// lifecycle
ngOnInit(){
    // console.log(this.server);
    this.log.log();
}
```

#### Import in the component (Globally), can work as Store
```ts
// app.module.ts
import { LoggingService }     from './services/logging/logging.service';
...
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LoggingService], // <!-- here
  bootstrap: [AppComponent]
})
```

```ts
// component.ts
import { LoggingService }     from './services/logging/logging.service';

constructor(private log: LoggingService){}

```
