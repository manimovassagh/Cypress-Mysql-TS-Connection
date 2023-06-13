
describe('template spec', () => {
  type IWrapLogicSpec = (num: number, name: string, arr?: Array<string>) => void;
  const wrapper: IWrapLogicSpec = (num, name, arr) => {
    return { name: name, num: num, arr: arr }
    //change test behavior
    //chang
  }
  wrapper(14, 'mani', ['mani', 'sahar'])

  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.window().then((window) => {
      window.addEventListener('DOMContentLoaded', () => {
        cy.log('Content loaded successfully')
      })
    })
    //connect to database
    const dropTable = 'DROP TABLE `mydb`.`users`;'
    cy.query(dropTable).then(res => {
      cy.log(res as any); // outputs json array of selected rows 
    });
  })

  it('create new state', () => {
    const createNewDbState = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));"
    const insertToDB =
      "INSERT INTO users (name) VALUES ('John'), ('mani'), ('sahar');"
    cy.query(createNewDbState).then(res => {
      cy.log(res as any); // outputs json array of selected rows 
    });
    cy.query(insertToDB).then(res => {
      cy.log(res as any); // outputs json array of selected rows 
    });
  });
})

