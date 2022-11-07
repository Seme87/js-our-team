"use strict"

//CREO UN ARRAY DI OGGETTI
const team= [
    {
        nome:"Wayne Barnett",
        ruolo:"Founde & Ceo",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg",
    },

    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto: "scott-estrada-developer.jpg",
    },

     {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },

]


// console.log(team)

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i= 0; i < team.length; i++){
    const currentTeam= team[i]
    console.log(currentTeam.nome);
    console.log(currentTeam.ruolo);
    console.log(currentTeam.foto);

    // const listItem= document.createElement('li')
    // listItem.innerHTML=currentTeam.nome;
    // listItem.innerHTML=currentTeam.ruolo;
    // listItem.innerHTML=currentTeam.foto;
    const listItem =`
        <li>
            <h3>${currentTeam.nome}</h3>
            <p>${currentTeam.ruolo}</p>
            <p>${currentTeam.foto}</p>
        </li>`;
    document.getElementById('team-list').innerHTML+= listItem;

    

}