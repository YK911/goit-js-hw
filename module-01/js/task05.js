function task5() {

    'use strict';

    const CHINA = 'Китай';
    const CHILI = 'Чили';
    const AUSTRALIA = 'Австралия';
    const INDIA = 'Индия';
    const JAMAICA = 'Ямайка';

    let country = prompt('Введите страну доставки');
    if (country === null) {
        alert('В вашей стране доставка не доступна');
    } else {
        country = country.toLowerCase();
        country = country[0].toUpperCase() + country.slice(1);

        let price;
        switch (country) {
            case CHINA:
                price = 100;
                break;

            case CHILI:
                price = 250;
                break;

            case AUSTRALIA:
                price = 170;
                break;

            case INDIA:
                price = 80;
                break;

            case JAMAICA:
                price = 120;
                break;

            default:
                price = null;
                break;

        }
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    }

    // // ВАРИАНТ2
    // const CHINA = 'Китай';
    // const CHILI = 'Чили';
    // const AUSTRALIA = 'Австралия';

    // const printSuccess = (country, price) => {
    //     alert(`Доставка в страну ${country} будет стоить ${price}`);
    // }

    // const printFail = () => {
    //     alert(`В вашу страну нет доставки`);
    // }

    // const modifyInput = (userInput) => {
    //     let country = userInput.toLowerCase();
    //     country = country[0].toUpperCase() + country.slice(1);
    //     return country;
    // }

    // const input = prompt('Введите страну доставки');

    // if (input === null) {
    //     printFail();
    // } else {
    //     const country = modifyInput(input);
    //     switch (country) {
    //         case CHINA:
    //             printSuccess(country, 50);
    //             break;
    //         case CHILI:
    //             printSuccess(country, 100);
    //             break;
    //         case AUSTRALIA:
    //             printSuccess(country, 200);
    //             break;
    //         default:
    //             printFail();
    //             break;
    //     }
    // }

    // // ВАРИАНТ3
    //     const priceList = [{
    //             country: 'Китай',
    //             price: 50
    //         },
    //         {
    //             country: 'Чили',
    //             price: 100
    //         },
    //         {
    //             country: 'Австралия',
    //             price: 200
    //         },
    //     ]

    //     const printSuccess = (country, price) => {
    //         alert(`Доставка в страну ${country} будет стоить ${price}`);
    //     }

    //     const printFail = () => {
    //         alert(`В вашу страну нет доставки`);
    //     }

    //     const modifyInput = (userInput) => {
    //         let country = userInput.toLowerCase();
    //         country = country[0].toUpperCase() + country.slice(1);
    //         return country;
    //     }

    //     let input = prompt('Введите страну доставки');

    //     if (input === null) {
    //         printFail()
    //     } else {
    //         input = modifyInput(input);
    //         let index = null;

    //         priceList.forEach((record, i) => {
    //             if (record.country === input) index = i;
    //             return;
    //         });

    //         index === null ? printFail() :
    //             printSuccess(priceList[index].country, priceList[index].price);
    //     }
    // }

    // // ВАРИАНТ 4
    // const priceList = [
    // 	{country: 'Китай', price: 50},
    // 	{country: 'Чили', price: 100},
    // 	{country: 'Австралия', price: 200},
    // ]

    // const printSuccess = (country, price) => {
    // 	alert(`Доставка в страну ${country} будет стоить ${price}`);
    // }

    // const printFail = () => {
    // 	alert(`В вашу страну нет доставки`);
    // }

    // const modifyInput = (userInput) => {
    // 	let country = userInput.toLowerCase();
    // 	country = country[0].toUpperCase() + country.slice(1);
    // 	return country;
    // }

    // let input = prompt('Введите страну доставки');

    // if (input === null) {
    // 	printFail()
    // } else {
    // 	input = modifyInput(input);
    // 	const record = priceList.find((item) => item.country === input);

    // 	record === undefined ? printFail()
    // 		: printSuccess(record.country, record.price);
    // }