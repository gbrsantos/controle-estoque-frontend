import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { EstabelecimentoProduto } from 'src/app/model/estabelecimento-produto';
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoProdutoService {  
  constructor(private http: HttpClient) { }
  private url_base: string = 'http://127.0.0.1:5000'
  

  save(form : EstabelecimentoProduto) {
    return this.http.post(this.url_base + "/estabelecimento-produto", form)
    .pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
