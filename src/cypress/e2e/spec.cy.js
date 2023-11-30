describe("Testing if a new user can log into the database.", () => {
  const url = "http://localhost:3000";

  // it("passes", () => {
  //   cy.visit(url + "");
  //   cy.scrollTo("center");
  //   cy.scrollTo("bottom", { duration: 100 });
  // });

  it("passes", () => {
    cy.visit(url + "");
    cy.scrollTo("center");
    cy.scrollTo("bottom", { duration: 1000 });
  });

  it("registers a new account.", () => {
    cy.visit(url + "/register");
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("John");
    cy.get('select[name="gender"]').select("male");
    cy.get('input[name="date"]').type("2023-12-31");
    cy.get('input[name="email"]').type("john.doe@email.com");
    cy.get('input[name="password"]').type("password123456");
    cy.get('input[name="confirmPassword"]').type("password123456");
    cy.get("#RestrictionsNext")
      .click()
      .then(() => {
        cy.get("#chageTranslte").invoke(
          "attr",
          "style",
          "transform: translateX(-100%)"
        );
        cy.get(".Restrictions").eq(0).invoke("addClass", "bg-secondary");
        cy.get(".Restrictions").eq(3).invoke("addClass", "bg-secondary");
        cy.get(".Restrictions").eq(5).invoke("addClass", "bg-secondary");
      });

    cy.get("#AllergiesNext")
      .click()
      .then(() => {
        cy.get("#chageTranslte").invoke(
          "attr",
          "style",
          "transform: translateX(-200%)"
        );
        cy.get(".Allergies").eq(0).invoke("addClass", "bg-secondary");
        cy.get(".Allergies").eq(4).invoke("addClass", "bg-secondary");
        cy.get(".Allergies").eq(6).invoke("addClass", "bg-secondary");
      });
    cy.get("#conditionsNext")
      .click()
      .then(() => {
        cy.get("#chageTranslte").invoke(
          "attr",
          "style",
          "transform: translateX(-300%)"
        );
        cy.get(".conditions").eq(0).invoke("addClass", "bg-secondary");
        cy.get(".conditions").eq(4).invoke("addClass", "bg-secondary");
        cy.get(".conditions").eq(2).invoke("addClass", "bg-secondary");
        cy.get(".conditions").eq(6).invoke("addClass", "bg-secondary");
      });
    cy.get("#SettingsNext")
      .click()
      .then(() => {
        cy.get("#chageTranslte").invoke(
          "attr",
          "style",
          "transform: translateX(-400%)"
        );
        cy.get(".Settings").eq(0).invoke("addClass", "bg-secondary");
        cy.get(".Settings").eq(4).invoke("addClass", "bg-secondary");
        cy.get(".Settings").eq(2).invoke("addClass", "bg-secondary");
      });
    cy.get("#addBreakFast")
      .click()
      .then(() => {
        cy.get('input[name="Foodname"]').type("milk");
        cy.get('input[name="Fooddescription"]').type(
          "Milk is a white liquid produced by cows, goats, and sheep"
        );
        cy.get('input[name="Fooddewater"]').type("water");
        cy.get("#addNext").click();
      });
    cy.get("#DoneNext")
      .click()
      .then(() => {
        cy.visit(url + "/login");
      });
  });
  it("tests the Login Page", () => {
    cy.visit(url + "/login");
    cy.get('input[name="email"]').type("john.doe@email.com");
    cy.get('input[name="password"]').type("password123456");
    cy.get('button[type="submit"]').click();
    cy.wait(3000)
    cy.url().should("include", "/home");
  });
});
