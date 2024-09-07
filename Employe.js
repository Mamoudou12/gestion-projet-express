export default class Employe {
    #nom = "";
    #prenom = "";
    #email = "";
    #poste = "";
    #dateEmbauche = "";
    #statut = "";
  
    createEmploye(employe) {
      this.#nom = employe.nom;
      this.#prenom = employe.prenom;
      this.#email = employe.email;
      this.#poste = employe.poste;
      this.#dateEmbauche = employe.dateEmbauche;
      this.#statut = employe.statut;
// 
      console.log(`employe: ${this.#nom}, ${this.#email} has been created`);
    }

  
    getEmp() {
      return {
        nom: this.#nom,
        prenom: this.#prenom,
        email: this.#email,
        poste: this.#poste,
        dateEmbauche: this.#dateEmbauche,
        statut: this.#statut,
      };
    }
  
    editEmp(newEmploye) {
      this.#nom = newEmploye.nom;
      this.#prenom = newEmploye.prenom;
      this.#email = newEmploye.email;
      this.#poste = newEmploye.poste;
      this.#dateEmbauche = newEmploye.dateEmbauche;
      this.#statut = newEmploye.statut;
    }
  }
  