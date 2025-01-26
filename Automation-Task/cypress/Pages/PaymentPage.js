export class PaymentPage {
   
    NameOnCard(nameOfCard){
        cy.get('input[name="name_on_card"]').type(nameOfCard);
    }
    cardNumber(cardNumber){
    cy.get('input[name="card_number"]').type(cardNumber);

    }

    cvvNumber(cvv){
        cy.get('input[name="cvc"]').type(cvv);

    }
    monthExpiration(expiryMonth){
        cy.get('input[name="expiry_month"]').type(expiryMonth);
    }

    yearExpiration(expiryYear){
        cy.get('input[name="expiry_year"]').type(expiryYear);
    }
 
confirmButton(){
    cy.get('#submit').click();
}
messageOfConfiemationPayment(){
   return cy.contains('Order Placed!');
}
   }