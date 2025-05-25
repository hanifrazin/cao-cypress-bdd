import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"

const checkoutId = ["first-name","last-name","postal-code"];

Given("I have been login to saucedemo and select some items to cart", () => {
    cy.login();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-backpack').should('not.exist');
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').should('not.exist');
    cy.get('#remove-sauce-labs-bike-light').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').should('have.text','2').click();
});

When("I click Checkout button", () => {
    cy.get('[data-test="checkout"]').click();
});

When("I fill the First Name data at First Name field", () => {
    cy.get('[data-test="firstName"]').clear().type('Alex');
});

When("I fill the Last Name data at Last Name field", () => {
    cy.get('[data-test="lastName"]').clear().type('Jonatan');
});

When("I fill the Postal Code data at Postal field", () => {
    cy.get('[data-test="postalCode"]').clear().type('11233');
});

When("I click Continue button", () => {
    cy.get('[data-test="continue"]').click();
});

Then("The System should be display the checkout overview information",() => {
    cy.xpath("(//div[@class='inventory_item_name'])[1]").should('contain','Sauce Labs Backpack');
    cy.xpath("(//div[@class='inventory_item_name'])[2]").should('contain','Sauce Labs Bike Light');
});

Then("The System should be display error message in each field", () => {
    checkoutId.forEach(element => {
        cy.xpath(`//input[@id="${element}"][@class="input_error form_input error"]`).should('be.visible');
    });
    cy.get(".error-message-container.error").should('be.visible');
});