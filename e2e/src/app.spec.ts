describe('My First Test', () => {
  const url = 'http://localhost:4201';
  it('Check the config file', () => {
    cy.visit('/');
    cy.request('GET', `${url}/config/config.json`).then((response) => {
      expect(response.body).to.have.property('title', 'Verdun infrastructure de données spatiales'); // true
      expect(response.body).to.have.property('theme', 'verdun-theme'); // true
    });
  });
});
