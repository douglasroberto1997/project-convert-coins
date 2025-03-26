// Cotação moedas do dia

const USD = 5.73
const EUR = 6.16
const GBP = 7.357

// Obtendo elementos

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")


// Alterando configurações amount para receber só numeros

amount.addEventListener("input", () => {

    const HasCharacterRegex = /\D+/g
   amount.value = amount.value.replace(HasCharacterRegex, "")
})

// Capturando o evento de submit do formulário

form.onsubmit = (event) => {
    event.preventDefault()
  
    switch (currency.value){
      case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
      case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
      case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
    }
  }

//Função para converter a moeda.

function convertCurrency(amount,price,symbol){

    try {

        description.textContent= `${symbol} 1 = ${price}`

        //Aplica a classe que exibe o footer para mostrar o resultado

        footer.classList.add("show-result")


    } catch(error) {
        

        // Remove a classe do footer ocultando ele
        footer.classList.remove("show-result")
        console.log ("error") 
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
} 