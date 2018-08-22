# Angular CLI

[[toc]]

--- 

### Установка
```batch
npm i @angular/cli -g 
```

### Версия CLI
```batch
ng -v
```


### Создание проекта
```batch
ng new angular_app
ng new angular_app --styles=scss --routing
```

### Сделать `build` проекта без hash в билдах
```
ng build --prod --output-hashing none --build-optimizer false
```

### Generate

* class
* component
* directive
* enum
* guard
* interface
* module
* pipe
* service


```batch
ng generate component name_component

# short
ng g c name_component

## Если не рабоатет, то
ng generate component name_component --module app
 
```

### Подключение Sass
Установит текущее приложение на scss
```
ng set defaults.styleExt scss
```

Сделать шаблон с scss
```
ng new Demo_Project --style=scss
```