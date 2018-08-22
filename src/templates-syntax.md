# Templates

* Вывод переменной
* Подстановка в свойства элемента
* NgModel
* Events (click, and etc.)
* Id for elements
* Forms
* Hidden
* ngFor


---

## Вывод переменной
```html
<p>{{variable}}</p>

```

## Подстановка в свойства элемента
```html
<form class="" action="index.html" method="post">
    <input type="text" name="name" value="{{sometext}}" /> <!-- С помощью {{var}} -->

    <input type="submit" name="" [value]="{{btntext}}" />  <!-- С помощью [property]="var" -->
</form>
```

## NgModel
1) Сначало надо сделать импорт модуля в `app.module.ts`

```ts
import { FormsModule } from '@angular/forms';
```

2) Обозначаем нужное поле как ngModel
```html
  <input type="text" name="name" [(ngModel)]="somevar" />
  <p>{{somevar}}</p>

```




## Events
```html
<button (click)="SayHello()" type="button" name="button">Say</button>  <!-- Запустит ф-цию из .ts файла SayHello() -->

<input (keyup)="onKey($event)"> <!--  event.target.value -->;

<input (keyup.enter)="onEnter()">
```

## Id for elements

```html
<input #box (keyup.enter)="update(box.value)"   (blur)="update(box.value)">

<input #box (keyup)="0"> <!-- Даем ID полю и потом можно брать значение из этого поля по его ID -->
<p>{{box.value}}</p>     <!-- Сюда будет передаваться ноль по нажатию на кнопки -->

<input #toys (keyup.enter)="addItem(toys.foxy)"> <!-- Значение поля передаеться в ф-цию где добавляеться массив "toys" -->
<p *ngFor="let toy of toys">
  {{ toy }} <!-- foxy -->
</p>                                 

```
```
# - variable declaration

() - event binding

[] - property binding

[()] - two-way property binding

{{ }} - interpolation

* - structural directives
```




## Hidden
Атрибут для элементов, который их прячет
```html
<p> I am visible  </p>

<p hidden> I am unvisible  </p>

<p [hidden]="some_boolean"> I am unvisible, it depends on some_boolean </p>
```


## ngFor
```html
<p *ngFor="let toy of toys">
  {{ toy }}    
</p>    
```
