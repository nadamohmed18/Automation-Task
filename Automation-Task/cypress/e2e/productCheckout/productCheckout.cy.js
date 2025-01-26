import { LoginPage } from '../../Pages/LoginPage';
import { ProductPage } from '../../Pages/addproductToCart';
import { CartPage } from '../../Pages/CartPage';
import { CheckoutPage } from '../../Pages/CheckoutPage';
import { PaymentPage } from '../../Pages/PaymentPage';





const loginPage = new LoginPage();
const flowData = require('./testData.json');
const productPage = new ProductPage();
const cartpage = new CartPage();
const checkoutpage =new CheckoutPage();
const paymentpage =new PaymentPage();

it('should complete the order successfully', () => {


    // Step 1: Login
    loginPage.visit();
    loginPage.fillLoginDetails(flowData.user.email, flowData.user.password);
    loginPage.submitLogin();

     // Step 2: Add product to cart
     productPage.addProductToCart();
     productPage.messageProductAddToCard().should('be.visible').and('contain.text', 'Your product has been added to cart.');


      // Step 3: Proceed to checkout
      cartpage.goToCheckout();
      cartpage.ProceedToCheckout();

    // Step 4: place order
    checkoutpage.placeOrder();

    //step 5 : Confiem payment
    paymentpage.NameOnCard(flowData.billing.nameOfCard);
    paymentpage.cardNumber(flowData.billing.cardNumber);
    paymentpage.cvvNumber(flowData.billing.cvv);
    paymentpage.monthExpiration(flowData.billing.monthOfExpiration);
    paymentpage.yearExpiration(flowData.billing.yearOfExpiration);
    paymentpage.confirmButton();
    paymentpage.messageOfConfiemationPayment().should('be.visible').and('contain.text', 'Order Placed!');




});