export class CheckoutPage {
   
    placeOrder(){
        cy.get('a[class="btn btn-default check_out"]').click()
    }

   }
 