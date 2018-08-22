# Optimization of code

## Сделать удобные импорты в app.module.ts (Сбор в одном месте)
Допустим у нас есть: `app / pages / home, article, login`, так мы подключаем их стандартно:
###### app.module.ts

```ts
// Pages components
import { HomeComponent} from './pages/home/home.component';
import { ArticleComponent} from './pages/article/article.component';
import { LoginComponent} from './pages/login/login.component';


```


А вот так можно сделать, чтобы собрать их в одном месте:
1) Создаем файл `index.ts` в `app / pages /` и там делаем импорты

```ts
// app/pages/index.ts
import { HomeComponent} from './pages/home/home.component';
import { ArticleComponent} from './pages/article/article.component';
import { LoginComponent} from './pages/login/login.component';

// for 1 and 2 second import 
export { HomeComponent, ArticleComponent, LoginComponent }

// for 3 import
export default { HomeComponent, ArticleComponent, LoginComponent }
```

2) в `app.module.ts` делаем импорт из `/ pages / index.ts`

```ts
// app.module.ts

// Import with destucturization (not allowed if only defined "export default{}")
import { HomeComponent, ArticleComponent, LoginComponent } from './pages/index';

// OR import with grouping 
import * as pages from './pages/index';

// OR import object from default export
import pages from './pages/index'

@NgModule({
  declarations: [
    HomeComponent, 
    ArticleComponent,
    LoginComponent
    
    // OR if export * as
    pages.HomeComponent,
    pages.ArticleComponent,
    pages.LoginComponent
    
    // OR if defined "export default {}" - make it with Spread
    ...pages // same as - HomeComponent, ArticleComponent, LoginComponent

  ]
})

```

## Сделать "принадлежность" компонента к странице(компоненту), `логически`
Допустим есть страница `app / pages / home`, и него есть компонент `card.component` который мы включаем в него и т.д. Но при импорте мы хотим импортить страницу `home` и компонент вместе, который используеться только в этой странице.

###### app.module.ts
```ts
// Обычный импорт
import { HomeComponent} from './pages/home/home.component'; // <!-- страница(компонент) в который включаеться "CardComponent"
import { CardComponent} from './pages/components/card/card.component'; // card component
...
declarations: [HomeComponent, CardComponent]
```

Делаем по-другому

###### home.component.ts
```ts
// default class of component
export class HomeComponent {
...
}
```

```ts
// changed to this

import { CardComponent} from './components/card/card.component';

class HomeComponent {
...
}

export {HomeComponent, CardComponent}

```





