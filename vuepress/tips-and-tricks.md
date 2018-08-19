# Tips & Tricks

#### Изменить порт запуска
###### .angular-cli.json
```json
...
defaults": {
  ...
  "serve": {
    "port": 8000
  }
}
```


#### Сделать build проекта без hash в билдах
```
ng build --prod --output-hashing none --build-optimizer false
```

#### Можно передавать ссылку `#id` на обьект и управлять им из `.ts` файла
```html
<button #btn_id (click)="ButtonClicker(btn_id)">Click me</button>
```

```ts
ButtonClicker(btn_id){
  console.log(btn_id);
  btn_id.click();
}
```



