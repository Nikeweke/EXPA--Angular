# Forms 

#### Use ([ngModel])
###### app.module.ts
```ts
import { FormsModule }    from '@angular/forms';       // for ngModel
```


#### Send form without ngForm
Форма не отправляеться как обычно если используеться ангуляр. Для того чтобы сделать отправку как обычно надо
```html
<form ngNoForm class="" action="index.html" method="post">
...
</form>
```

Иначе делать так
```html
<form (ngSubmit)="SendData()" class="" action="index.html" method="post">
...
</form>
```


