# Http

#### Import
```ts
// app.module.ts
import {HttpClientModule} from '@angular/common/http';

...
   imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule           // <!-- here
    // MaterialModule,

  ], 
```

```ts
// component
import {HttpClient} from '@angular/common/http';
...
  constructor(private http: HttpClient){}

  makeRequest() {
    // GET request:
    this.http.get('/api/items').subscribe(data => {
      // Read the result figeld from the JSON response.
      this.results = data['results'];
    });
    
     // POST request:
    var postData = {some: 'stuff'}; 
    this.http.post('/api/items', postData).subscribe(data => {
      // Read the result figeld from the JSON response.
      this.results = data['results'];
    });

  }

```


#### Set headers
```ts
import {HttpClient, HttpHeaders} from '@angular/common/http';;
...
  constructor(private http: HttpClient){}

  makeRequest() {
   
   var headers = new HttpHeaders();
   headers = headers.set('data', 'stuff');

    // Make the HTTP request:
    this.http.get('/api/items', {headers: headers}).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
    
     // Make the HTTP request:
     var postData = {some: 'stuff'}; 
     this.http.post('/api/items', postData, {headers: headers}).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });

  }


```
