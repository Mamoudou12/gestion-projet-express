export default class Assignation {
    static #tabAssignations = [];
  
  
    static getTab(){
      return Assignation.#tabAssignations;
    }
    static assign({ employe, tache, dateAssignation }) {
      Assignation.#tabAssignations.push({ employe, tache, dateAssignation });
    }

    static dropAssign(employe) {
    if (employe) {
        Assignation.#tabAssignations = Assignation.#tabAssignations.filter(
            (ass) => {
                return ass.employe.nom !== employe.nom; // Filtre pour garder uniquement les assignations qui ne sont pas liées à cet employé
            }
        );
    }
}

    
   
  static getEmpAssign(employe) {
    console.log(`${employe} existe`)
    if (employe) {
      return Assignation.#tabAssignations
        .filter(emp => emp.employe.nom === employe.nom)
        .map(ass => {
          return {
            task: ass.tache,
            dateAssignation: ass.dateAssignation,
          };
        });
    }
  }
  
  static getTaskAssign(tache) {
    if (tache) {
        return Assignation.#tabAssignations
            .filter(ass => ass.tache.nom === tache.nom)  
            .map(ass => ({
                employe: ass.employe
            }));
    }
    return [];  // Retourner un tableau vide si aucune tâche n'est fournie
}

}