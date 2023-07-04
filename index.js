const pwClass = [

    {id:1, class:"Blademaster", race:"Human", armor:"Heavy Armor", weapon:"Axe, Spear, Sword, Claw"},
    {id:2, class:"Mage", race:"Human", armor:"Magic Armor", weapon:"Magic Sword, Magic Wheel, Staff"},
    {id:3, class:"Gunner", race:"Human", armor:"Light Armor", weapon:"Cannon"},
    {id:4, class:"Archer", race:"Elf", armor:"Light Armor", weapon:"Bow, Crossbow, Slingshot"},
    {id:5, class:"Priest", race:"Elf", armor:"Magic Armor", weapon:"Scepter, Staff, Magic Wheel"},
    {id:6, class:"Paladin", race:"Elf", armor:"Heavy Armor", weapon:"Sword with Shield"},
    {id:7, class:"Barbarian", race:"Savage", armor:"Heavy Armor", weapon:"Axe, Hammer"},
    {id:8, class:"Venomancer", race:"Savage", armor:"Magic Armor", weapon:"Staff, Magic Sword"},
    {id:9, class:"Monkey", race:"Savage", armor:"Light Armor", weapon:"Stick"},
    {id:10, class:"Duskblade", race:"Dark", armor:"Light Armor", weapon:"Saber"},
    {id:11, class:"Stormbringer", race:"Dark", armor:"Magic Armor", weapon:"Scythe"},
    {id:12, class:"Assassin", race:"Abyssal", armor:"Light Armor", weapon:"Daggers"},
    {id:13, class:"Spiritualist", race:"Abyssal", armor:"Magic Armor", weapon:"Magic Orb"},
    {id:14, class:"Seeker", race:"Guardian", armor:"Heavy Armor", weapon:"Greatsword"},
    {id:15, class:"Mistyc", race:"Guardian", armor:"Magic Armor", weapon:"Scepter"}

];



//Find , Ele percorre o array e retorna o primeiro item que corresponder a verificação
const classesFind = pwClass.find((classe) => {
    return classe.armor === "Heavy Armor";
});
console.log(classesFind);


//Filter, Ele percorre o array e retorna TODOS os itens que corresponderem a verificação
const classesFilter = pwClass.filter((classe) => {
    return classe.race === "Elf";
});
console.log(classesFilter);

//Some, Ele percorre o array e retorna um Booleano se pelo menos 1 item do array corresponde a verificação
//nesse caso ele retorna true pq temos sim a raça human no array 
const classesSome = pwClass.some((classe) => {
    return classe.race === "Human";
})
console.log(classesSome);

//Every, Ele percorre o array e verifica se TODOS os itens do array corresponde a verificação, se TODOS atenderem a verificação, retorna true
//se apenas 1 nao corresponder, ele já retorna false
//nesse caso ele vai retornar false pq todas as classes não usam apenas Daggers como weapon
const classesEvery = pwClass.every((classe) => {
    return classe.weapon === "Daggers";
})
console.log(classesEvery);



//Map, Ele retorna todo meu array, e apartir dele posso manipular o que eu quiser
const classesMap = pwClass.map((classe) => {

    if(classe.weapon === 'Greatsword'){
        classe.weapon = 'Greatsword, Large Blade'
    }
    return {
        armor:classe.weapon
    };
});
console.log(classesMap);


//Reduce, ele praticamente "soma" Algum valor que eu passar de todos os arrays, por exemplo fiz ele somar todos os id;
//precisa passar o valor inicial, o primeiro indice é o acumulador que começa em 0 normalmente, e dps o parametro do array

const classesReduce = pwClass.reduce((acc, classe) => {
    return acc+=classe.id;
},0);

console.log(classesReduce);