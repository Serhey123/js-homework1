let credits = 23580;
const pricePerDroid = 3000;
const droidsToBuy = prompt('Сколько дроидов вам нужно?', '');
const totalPrice = pricePerDroid * droidsToBuy;

if ( droidsToBuy == null ){

    console.log('Отменено пользователем!');

} else if ( totalPrice > credits ){

    console.log('Недостаточно средств на счету!')
    
} else {
    credits -= totalPrice
    console.log(`Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits} кредитов.`)
}