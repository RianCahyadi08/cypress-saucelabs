class Inventory {

    clickAddToCart() {
        cy.get('button[class*="btn_primary btn_inventory"]').first().click();
        cy.get('span[class*="fa-layers-counter shopping_cart_badge"]').should('be.visible');
    }

    clickRemove() {
        cy.get('button[class*="btn_secondary btn_inventory"]').first().click();
    }

    selectNameZToA() {
        cy.get('select[class*="product_sort_container"]').select('za');
        cy.wait(1000);
    }

    selectPriceLowToHigh() {
        cy.get('select[class*="product_sort_container"]').select('lohi');
        cy.wait(1000);
    }

    selectPriceHighToLow() {
        cy.get('select[class*="product_sort_container"]').select('hilo');
        cy.wait(1000);
    }

}

export default Inventory;