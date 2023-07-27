import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
	// Variável que chama o link da API
	private apiURL = enviroment.API_URL

	constructor(private http: HttpClient) { }

	// Função do Ângular que "observa" os eventos
	getCard(): Observable<any>{
		return this.http.get<any>(this.apiURL)
	}
}
