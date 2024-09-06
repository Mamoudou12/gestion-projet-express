import express from "express";
import bodyParser from "body-parser";
import  Employe  from './Employe.js';
import  Task  from "./Task.js";
import Assignation from "./Assignation.js";

const app = express();
const port = 3010;

// Utilisation de body-parser pour parser les corps des requêtes en JSON
app.use(bodyParser.json());

// Route de base qui répond avec "Hello world"
app.get('/', (req, res) => {
    res.send('Bonjour les simploniens');
});

// Route POST pour créer, modifier et supprimer des employés et des tâches
app.get('/app', (req, res) => {

    // Opérations sur Employe
    const employe1 = new Employe();
    employe1.createEmploye({
        nom: "Ag",
        prenom: "mohamed",
        email: "ag@gmail.com",
        poste: "Chef de projet",
        dateEmbauche: new Date(),
        statut: "en action"});
    
    const employe2 = new Employe();
    employe2.createEmploye({
        nom: "Ndiaye",
        prenom: "Oumar", 
        email: "ndiaye@gmail.com", 
        poste: "web designer", 
        dateEmbauche: new Date(), 
        statut: "en action"});

    const employe3 = new Employe();
    employe3.createEmploye({
        nom: "Ly",
        prenom: "Ousmane", 
        email: "ly@gmail.com", 
        poste: "Developpeur Front-End", 
        dateEmbauche: new Date(), 
        statut: "CDD"});

         // Opérations sur Task
         const task1 = new Task();
         task1.createTask({
            nom: "Integration de la maquette",
            description: "Integrer la maquette améliorée",
            dateDebut: "01-02-2023",
            dateFin: "01-02-2025",
            statut: "A faire",
            priorite: "Elevée",});

         const task2 = new Task();
         task2.createTask({
            nom: "Rédiger le rapport mensuel",
            description: "Informer le client de l'avancement du projet",
            dateDebut: "11-12-2023",
            dateFin: "11-12-2026",
            statut: "En cours",
            priorite: "Elevée",});

         const task3 = new Task();
         task3.createTask({
            nom: "Modification de la maquette",
            description:"Améliorer le UI, rendre responsive, ajouter une espace de connexion",
            dateDebut: "12-06-2023",
            dateFin: "12-12-2026",
            statut: "A faire",
            priorite: "Basse",});
        
            Assignation.assign({employe: employe1.getEmp(), tache: task3.getTask(), dateAssignation: new Date()})
            Assignation.assign({employe: employe2.getEmp(), tache: task2.getTask(), dateAssignation: new Date()})
            
            const assignation = Assignation.getTab()

            // Obtenir la liste des tâches assignées à un employé:
            const resulFiltre = Assignation.getEmpAssign(employe1.getEmp());

            // Obtenir la liste des employés assignés à une tâche:
            // const resulFiltre = Assignation.getTaskAssign(task2.getTask());

            
     res.json(resulFiltre)
});

// Démarrage du serveur sur le port défini
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
