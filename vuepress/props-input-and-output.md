# Props

##### @Input
```html
<!-- app.component.html - передаем переменные в компонент из parent-компонента -->
<app-article somevar="gg" [somevar1]="sommeevvaarr11" master="puppets"></app-article>
```
```ts
// article.component.ts - получаем переменные в child-компоненте
import { Component, Input } from '@angular/core';
...

export class ArticleComponent {

@Input() somevar: string;   // строка
@Input() somevar1: any;  // значение переменной
@Input('master') masterName somevar2: string;  // мы получаем "master",  но переназываем "masterName" 

constructor(private http: HttpClient) { }
}
```

```html
// article.comppnent.html
{{ somevar }} // <!-- out "gg" -->
{{ masterName }} // <!-- out "puppets" -->

```


##### @Output

```html
<!-- app.component.html - мы обозначаем какую ф-цию слушать в компоненте "Article" -->
<app-article (onYell)="showAlert($event)"></app-article>
```
```ts
// article.component.ts - делаем ф-цию которая будет создавать события для перехвата
import { Component, Output, EventEmitter } from '@angular/core';
...

export class ArticleComponent {
  @Output() onYell = new EventEmitter();   // наш запуск событий
  constructor() { }

  fireYellEvent(){
      this.onYell.emit('hi from article')
  }
}
```

```html
<!-- article.comppnent.html - делаем кнопку для создания события-->
<button (click)="fireYellEvent()" type="button" name="button">Click me</button>

```

```ts
// app.component.ts - делаем перехват и показываем сообщения
export class AppComponent {
   showAlert(e) {
     alert(e);  // е это сообщение из компонента "Article"
   }
}
```
