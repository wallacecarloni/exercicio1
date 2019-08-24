import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  private nome : string;
  private idade : string;
  private email : string;
  private telefone : string;

  private pessoa : object;

  constructor() {
    this.nome = "Alyx";
    this.idade = "25";
    this.email = "alyx@gmail.com";
    this.telefone = "988774466";

this.pessoa =
{
nome: "Wallace",
idade: "25",
email : "wallace@teste.com",
telefone : "44779966"
};

  }
  
  ngOnInit() {
  }
}
