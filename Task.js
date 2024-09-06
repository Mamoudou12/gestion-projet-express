export default class Task {
      #nom = "";
      #description = "";
      #dateDebut = "";
      #dateFin = "";
      #statut = "";
      #priorite = "";
    createTask(task) {
      this.#nom = task.nom;
      this.#description = task.description;
      this.#dateDebut = task.dateDebut;
      this.#dateFin = task.dateFin;
      this.#statut = task.statut;
      this.#priorite = task.priorite;
// 
      console.log(`task: ${this.#nom}, has been created`);
    }
    
    getTask() {
        return {
            nom: this.#nom,
            description: this.#description,
            dateDebut: this.#dateDebut,
            dateFin: this.#dateFin,
            statut: this.#statut,
            priorite: this.#priorite,
        }
    }
  
  
    editTask(newTask) {
      this.#nom = newTask.nom;
      this.#description = newTask.description;
      this.#dateDebut = newTask.dateDebut;
      this.#dateFin = newTask.dateFin;
      this.statut = newTask.statut;
      this.priorite = newTask.priorite;
      console.log(`Task: ${this.#nom}, has been updated`);
    }

    dropTask() {
        this.#dateDebut = null;
        console.log("Tache a été supprimée");
      }
  }
  