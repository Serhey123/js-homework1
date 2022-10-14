let total = 0;

do{
    
   let input = prompt('Введи число','');

    if(input == null){
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if(notANumber){
        continue;
    }

    total += input;

}while(true)

alert(`Общая сумма чисел равна ${total}`)