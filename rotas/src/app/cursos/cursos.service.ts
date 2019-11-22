import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: "Angular 2" },
      { id: 2, nome: "Javascript" }
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();

    for (let i = 0; i <= cursos.length; i++) {
      if (cursos[i].id == id) {
        return cursos[i];
      } else {
        return null;
      }
    }
  }
  constructor() {}
}
