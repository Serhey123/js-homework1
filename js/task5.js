let country =  prompt('Страна доставки', '')

if( country !== null){
    country = country.toLowerCase()
    switch (country){
        case 'китай':
            alert(`Доставка в ${country} будет стоить 100 кредитов`);
            break;
        case 'чили':
            alert(`Доставка в ${country} будет стоить 250 кредитов`);
            break;
        case 'австралия':
            alert(`Доставка в ${country} будет стоить 170 кредитов`);
            break;
        case 'индия':
            alert(`Доставка в ${country} будет стоить 80 кредитов`);
            break;
        case 'ямайка':
            alert(`Доставка в ${country} будет стоить 120 кредитов`);
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
}else {
    alert('Отменено пользователем!')
}