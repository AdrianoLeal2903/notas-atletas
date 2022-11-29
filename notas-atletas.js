let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   
   
   function resultadoDosAtletas(atletas){
       for (let i = 0; i < atletas.length; i++){
          let notas = atletas[i].notas;
           notas.sort((a,b)=> a - b ); //ordenando os valores da matriz
    // console.log(notas)
           let notasComputadas = notas.slice(1, 4) // O SLICE retira o primeiro e o ultimo item
    // console.log(notas)
           let somaDasNotas = notasComputadas.reduce((total, atual) => {
             return total + atual; // o REDUCE esta realizando a soma dos valores
           });
   
         console.log(`Atleta: ${atletas[i].nome} \nNotas Obtidas: ${atletas[i].notas} \nMédia Válida: ${somaDasNotas / notasComputadas.length}
         `);
   
    // console.log(somaDasNotas)
    };
   };
   
   resultadoDosAtletas(atletas)
   