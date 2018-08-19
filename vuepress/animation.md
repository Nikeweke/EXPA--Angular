# Animation

## Install
```batch
npm i @angular/animations@latest --save
```

## Import to `app.module.ts`

```ts
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';   
...
@NgModel({

imports:[BrowserAnimationsModule]

})

```

## Import into component
```ts
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
...
animations: [
    trigger('tasks', [
        transition('* => *', [
          query(':enter', style({opacity: 0}), {optional:true}),

          query(':enter', stagger('300ms', [
             animate('.6s ease-in', keyframes([
                 style({opacity: 0,  transform: 'translate(-75%)', offset: 0}),
                 style({opacity: .5, transform: 'translate(-75%)', offset: 0.3}),
                 style({opacity: 1,  transform: 'translate(-75%)', offset: 1}),
              ]))]), {optional: true})
          ])
        ])
    ], // <!-- animatinos end -->
})
```

## Using it on template

