import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit{


	constructor(private service: CardsService) {

	}

	accountData: AccountDataModel = {
		name: "Cliente",
		account: {
			agency: "0000",
			number: "00.000000-0"
		},
		card: {
			limit: 0,
			number: "0000"
		}
	}
	/* Função executada toda vez que o componente card-box for iniciado ("nascer na página") ---> gancho */
	ngOnInit(): void {
		// Chama os dados da API AccountData
		this.getAccountData();
	}

	// Função chama o serviço de API ---> AccountDataModel
	getAccountData() {
		this.service.getCard().subscribe(data => {
			this.accountData.name = data.name;
			this.accountData.account.agency = data.account.agency;
			this.accountData.card.limit = data.card.limit;
			this.accountData.account.number = data.account.number;
			this.accountData.card.number = data.card.number.split(" ")[3]
		})
	}
}
