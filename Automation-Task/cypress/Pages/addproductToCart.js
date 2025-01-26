export class  ProductPage {
    addProductToCart() {
      return cy.get('a[data-product-id="1"]').eq(0).click();
    }

    messageProductAddToCard(){
        return cy.contains('Your product has been added to cart.')

    }
  }