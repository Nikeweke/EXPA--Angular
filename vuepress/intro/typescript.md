# Typescript

```typescript
export class Types {

     some_var: string        = 'app';
     some_var: boolean       = true;
     some_var: number        = 12;
     some_var: number[]      = [1,2,3];         // массив чисел (1 вариант)
     some_var: Array<number> = [1,2,3];        // массив чисел (2 вариант)

     some_var: [string, number];               // tuple - Типы "кортежей" позволяют вам выражать массив, в котором известен тип фиксированного числа элементов,
                                               //         но не обязательно   должен быть одинаковым.

     enum Color {Red, Green, Blue}             // enum
     some_var: Color = Color.Green;

     some_var: any;

      u: undefined = undefined;
      n: null = null;


      // Function returning never must have unreachable end point
      function error(message: string): never {
          throw new Error(message);
      }


      /**********************************************
     *  test page
     *
     **********************************************/
     showAlert(): void {
       console.log('ionViewWillEnter HomePage');
       // this.tasks = this.sqlite.tasks;            // забираем обновленные задания с класса БД
     }

}
```

