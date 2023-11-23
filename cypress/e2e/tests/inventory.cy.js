import Login from '../../lib/login.cy';
import Inventory from '../../lib/inventory.cy';

describe('User do login', () => {

    const loginObject = new Login;
    const inventoryObject = new Inventory;

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        loginObject.loginStandardUser();
    });

    context('Given I am on the inventory page', () => {
        context('When I am sorting name z to a', () => {
            it('Then I can see the product sorting name z to a', () => {
                inventoryObject.selectNameZToA();
            });
        });
    });

    context('Given I am on the inventory page', () => {
        context('When I am sorting price low to high', () => {
            it('Then I can see the product sorting price low to high', () => {
                inventoryObject.selectPriceLowToHigh();
            });
        });
    });

    context('Given I am on the inventory page', () => {
        context('When I am sorting price high to low', () => {
            it('Then I can see the product sorting price high to low', () => {
                inventoryObject.selectPriceHighToLow();
            });
        });
    });

    context('Given I am on the inventory page', () => {
        context('When I am click add to cart', () => {
            it('Then I can see cart is increase', () => {
                inventoryObject.clickAddToCart;
            });
        });
    });

    context('Given I am on the inventory page', () => {
        context('When I have product in cart', () => {
            context('And I click remove', () => {    
                it('Then I can see cart is decrease', () => {
                    inventoryObject.clickAddToCart();
                    inventoryObject.clickRemove();
                });
            })
        });
    });

});