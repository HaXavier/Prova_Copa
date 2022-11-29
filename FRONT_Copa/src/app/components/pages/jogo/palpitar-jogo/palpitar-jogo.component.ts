import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {}

  selecaoA?: string;
  selecaoB?: string;
  placarA?: number;
  placarB?: number;
  id!: number;
  jogo!: Jogo;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.http.get<Jogo>(`https://localhost:5001/api/jogo/buscar/${id}`).subscribe({
          next: (jogo) => {
            this.jogo = jogo;
            this.id = id;
            this.selecaoA = jogo.selecaoA?.nome!;
            this.selecaoB = jogo.selecaoB?.nome!;
            this.placarA = jogo.placarA;
            this.placarB = jogo.placarB;
          },
        });
      }
    });
  }

  palpitar(): void {
    let jogo: Jogo = {
      placarA: this.placarA,
      placarB: this.placarB,
    };
    //Configuração da requisição
    this.http
      .patch<Jogo>("https://localhost:5001/api/jogo/alterar", this.jogo)
      //Execução da requisição
      .subscribe({
        //Aqui executamos algo quando a requisição for bem-sucedida
        next: (jogo) => {
          this._snackBar.open("Palpite Cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/jogo/listar"]);
        },
      });
  }
  


}