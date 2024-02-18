/* eslint-disable no-undef */
describe("This test should check that the name is in the corresponding button once the user has logged in.", () => {
  /* This is how the test should be laid out. */

  /* To access the url when TESTING use the baseUrl, like this 
    let endpoint = Cypress.config("baseUrl") + "/api/selectAllUsers";  */
  it("This should log the user in.", () => {
    cy.visit("/login");
    // Logs in with the registered user credentials
    cy.log("Login to the test profile.")
    cy.get('input[name="email"]').type("testaccount@gmail.com");
    cy.get('input[name="password"]').type("password12345");
    cy.get("#handleLogin").click();
    cy.wait(3000);
  });

  it("This should check if the data has been received. ", () => {
    cy.visit("/login");
    // Logs in with the registered user credentials
    cy.log("Login to the test profile.")
    cy.get('input[name="email"]').type("testaccount@gmail.com");
    cy.get('input[name="password"]').type("password12345");
    cy.get("#handleLogin").click();
    cy.wait(3000);

    cy.visit("/home");
    cy.log("Check if the data has been received.")
    cy.wait(1000);
    cy.get('#usercontent').as("userButton").click()
    cy.get("@userButton").contains("John Smith")
    cy.wait(3000);
    cy.get('a').contains("NHMS").click();
    cy.get('#usercontent').as("userButton").click()
    cy.get("@userButton").contains("John Smith");
    cy.get("@userButton").click()
    cy.wait(1000);
    cy.get('a').contains("Profile").click()
    /* Redirection to profile. */ 
    cy.log("Go to the user profile.")
    cy.wait(1000);
    cy.get('#user-name').contains("John Smith")
    cy.get('#user-email').contains("testaccount@gmail.com")
    cy.get('#user-dob').contains("31/12/2023")

    /* Log out of profile. */
    cy.log("Log out of the profile.")
    cy.get('button').contains("Logout").click();
    cy.wait(1000);
    cy.url('/login');

  })
});
