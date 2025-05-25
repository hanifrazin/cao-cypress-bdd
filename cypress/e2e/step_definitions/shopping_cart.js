import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have been login to Saucedemo Successful", () => {
    cy.login();
})

When("I add Sauce Labs Backpack product to cart", () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-backpack').should('not.exist');
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
});

When("I add Sauce Labs Bike Light product to cart", () => {
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').should('not.exist');
    cy.get('#remove-sauce-labs-bike-light').should('be.visible');
});

When("I click to cart icon", () => {
    cy.get('[data-test="shopping-cart-link"]').should('have.text','2').click();
});

Then("The cart has contains 2 items", () => {
    cy.url().should('include','cart.html');
    cy.get('.cart_list').find('.cart_item').should('have.length', 2);
})