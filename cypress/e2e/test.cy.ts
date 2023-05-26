describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    //connect to database
    const dropTable = 'DROP TABLE `mydb`.`users`;'
    cy.query(dropTable).then(res => {
      cy.log(res); // outputs json array of selected rows 
    

    });



  })

  it('create new state', () => {
    const createNewDbState = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));"
    const insertToDB =
      "INSERT INTO users (name) VALUES ('John'), ('mani'), ('sahar');"
    cy.query(createNewDbState).then(res => {
      cy.log(res); // outputs json array of selected rows 
    });
    cy.query(insertToDB).then(res => {
      cy.log(res); // outputs json array of selected rows 
    });
  });
})