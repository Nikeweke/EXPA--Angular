# Angular CLI

* Установка
* Версия CLI
* Создание проекта
* Сделать билд без хешей в названиях билдов
* Generate

--- 

#### Установка
```batch
npm i @angular/cli -g 
```

#### Версия CLI
```batch
ng -v
```


#### Создание проекта
```batch
ng new angular_app
ng new angular_app --styles=scss --routing
```

#### Сделать `build` проекта без hash в билдах
```
ng build --prod --output-hashing none --build-optimizer false
```



#### Generate

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

#### Change to scss
```
ng new my-sassy-app --style=scss
```