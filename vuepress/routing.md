# Routing

#### Create routing file
```ts
// app.routing.ts
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';

const APP_ROUTES: Routes = [
{path: '', component: AppComponent},
{path: 'article', component: ArticleComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
```


#### Import in app.module
```ts
// app.module.ts
...

// Bootstrap Outlet component
import { AppComponent } from './components/app/app.component';
// Components
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';

// routing
import {routing} from './app.routing.ts';
...
@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   ArticleComponent
  ],
imports: [
BrowserModule,
routing
],
})
```

#### Prepare place for out in app outlet component
```ts
// app.component.ts
<router-outlet></router-outlet>
```

#### RouterLink
```html
<a [routerLink]="['']"> some href </a> <!-- heads to '/' route -->
<a [routerLink]="['article']"> some href </a> <!-- heads to '/article' route -->

```


