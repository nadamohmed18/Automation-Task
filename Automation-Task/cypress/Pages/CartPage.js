 export class CartPage {
    goToCheckout() {
    return  cy.contains('View Cart').click();
    }
    ProceedToCheckout(){
        cy.get('a[class="btn btn-default check_out"]').click()
    }

   }
 