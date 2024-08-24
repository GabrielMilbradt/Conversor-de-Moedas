const btn = document.querySelector('#btn')
const convertSelect = document.querySelector('#convert-select')
const currencySelect = document.querySelector('#currency-select')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const flag1 = document.querySelector("#flag1")
const flag2 = document.querySelector("#flag2")
const valorPlaceHolder = document.getElementById('input-currency')


//convertSelect.addEventListener('change', mudarValor1)
currencySelect.addEventListener('change', mudarValor2)
btn.addEventListener('click', convertButton)


function mudarValor1() {


    if (convertSelect.value == "dolar1") {
        p1.innerHTML = "Dólar"
        flag1.src = "assets/dolar.png"
        valorPlaceHolder.placeholder = "$ 0,00"

    }

    if (convertSelect.value == "real1") {
        p1.innerHTML = "Real"
        flag1.src = "assets/real.png"
        valorPlaceHolder.placeholder = "R$ 0,00"
    }

    if (convertSelect.value == "euro1") {
        p1.innerHTML = "Euro"
        flag1.src = "assets/euro.png"
        valorPlaceHolder.placeholder = "€ 0,00"
    }

    if (convertSelect.value == "libra1") {
        p1.innerHTML = "Libra"
        flag1.src = "assets/libra.png"
        valorPlaceHolder.placeholder = "£ 0,00"
    }

    convertButton()

}

function mudarValor2() {

    if (currencySelect.value == "real2") {
        p2.innerHTML = "Real"
        flag2.src = "assets/real.png"
    }

    if (currencySelect.value == "dolar2") {
        p2.innerHTML = "Dólar"
        flag2.src = "assets/dolar.png"
    }

    if (currencySelect.value == "euro2") {
        p2.innerHTML = "Euro"
        flag2.src = "assets/euro.png"

    }

    if (currencySelect.value == "libra2") {
        p2.innerHTML = "Libra"
        flag2.src = "assets/libra.png"
    }

    convertButton()
}


async function convertButton() {

    //PADRÃO EM REAL
    const inputCurrencyValue = document.querySelector('#input-currency').value

    // const realToDolar = 4.97
    // const realToReal = 1
    // const realToEuro = 5.37
    // const realToLibra = 6.28

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())

    const realToDolar = data.USDBRL.high
    const realToEuro = data.EURBRL.high
    const realToLibra = data.GBPBRL.high
    const realToReal = 1

    if (currencySelect.value == "dolar2") {


        valor2.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realToDolar)
    }

    if (currencySelect.value == "euro2") {

        valor2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realToEuro)

    }

    if (currencySelect.value == "libra2") {
        valor2.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realToLibra)

    }

    if (currencySelect.value == "real2") {
        valor2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToReal)

    }


    valor1.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    //CONVERTER DE DÓLAR
    if (convertSelect.value == "dolar1") {
        const inputCurrencyValue = document.querySelector('#input-currency').value

        const data = await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,EUR-USD,GBP-USD").then(response => response.json())


        const dolarToEuro = data.EURUSD.high
        const dolarToLibra = data.GBPUSD.high
        const dolarToReal = data.BRLUSD.high
        const dolarToDolar = 1

        if (currencySelect.value == "dolar2") {


            valor2.innerHTML = new Intl.NumberFormat('en-US', {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToDolar)
        }

        if (currencySelect.value == "euro2") {

            valor2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / dolarToEuro)

        }

        if (currencySelect.value == "libra2") {
            valor2.innerHTML = new Intl.NumberFormat('en-GB', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / dolarToLibra)

        }

        if (currencySelect.value == "real2") {
            valor2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / dolarToReal)

        }

        valor1.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }
    //CONVERTER DE EURO
    if (convertSelect.value == "euro1") {

        const inputCurrencyValue = document.querySelector('#input-currency').value


        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-EUR,BRL-EUR,GBP-EUR").then(response => response.json())

        const euroToDolar = data.USDEUR.high
        const euroToLibra = data.GBPEUR.high
        const euroToReal = data.BRLEUR.high
        const euroToEuro = 1

        if (currencySelect.value == "dolar2") {

            valor2.innerHTML = new Intl.NumberFormat('en-US', {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / euroToDolar)
        }

        if (currencySelect.value == "euro2") {
            valor2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToEuro)

        }

        if (currencySelect.value == "libra2") {
            valor2.innerHTML = new Intl.NumberFormat('en-GB', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / euroToLibra)

        }

        if (currencySelect.value == "real2") {
            valor2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / euroToReal)

        }

        valor1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    //CONVERTER DE LIBRA
    if (convertSelect.value == "libra1") {

        const inputCurrencyValue = document.querySelector('#input-currency').value

        const data = await fetch("https://economia.awesomeapi.com.br/last/BRL-GBP,USD-GBP,EUR-GBP").then(response => response.json())

        const libraToDolar = data.USDGBP.high
        const libraToEuro = data.EURGBP.high
        const libraToReal = data.BRLGBP.high
        const libraToLibra = 1

        if (currencySelect.value == "dolar2") {

            valor2.innerHTML = new Intl.NumberFormat('en-US', {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / libraToDolar)
        }

        if (currencySelect.value == "euro2") {
            valor2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / libraToEuro)

        }

        if (currencySelect.value == "libra2") {
            valor2.innerHTML = new Intl.NumberFormat('en-GB', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToLibra)

        }

        if (currencySelect.value == "real2") {
            valor2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / libraToReal)

        }

        valor1.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
}
