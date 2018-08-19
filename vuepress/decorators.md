# @Decorators

* NgModule
* Injectable
* Component

--- 
#### NgModule
Нужен для обозначения какие директивы будут использоваться, что импорититься и так далее

```ts
import { NgModule} from '@angular/core';
...
@NgModule({
  // Здесь обозначаем какие директивы (компоненты, пайпы) будут использоваться
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent
  ],

  // Задает список модулей, экспортные директивы / каналы которых должны быть доступны для шаблонов в этом модуле. Это может также содержать ModuleWithProviders.
  imports: [
    BrowserModule,
    FormsModule
    // BrowserAnimationsModule,
    // MaterialModule,

  ],

  // Задает список директив / труб / модулей, которые могут использоваться в шаблоне любого компонента, который является частью модуля Angular, который импортирует этот модуль с угловым модулем.
  exports: [],

  // Определяет набор инъекционных объектов, доступных в инжекторе этого модуля.
  providers: [],

  // Определяет компоненты, которые должны быть загружены, когда этот модуль загружается. Компоненты, перечисленные здесь, будут автоматически добавлены в entryComponents.
  // выходит что это тот комопнент который мы увидим на странице
  bootstrap: [ArticleComponent]
})
export class AppModule { }
```

#### Injectable

Как только класс становиться Injectable его надо объявить в массиве providers: [..] в app.module.ts

```ts
// Делает возможность юзать Dependency Injection
import { Injectable } from '@angular/core';

@Injectable()
class UsefulService {
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}
}
```



#### Component
```ts
// Component - используеться для описания компонента. Связыватет styles, model(ts), view(html) вместе
import { Component } from '@angular/core';
...
@Component({
    selector: 'app-home',                   // таким селектором вызываеться на view этот компонент
    templateUrl: './home.component.html',   // path to view
    styleUrls: ['./home.component.scss']    // path to styles
})
```
