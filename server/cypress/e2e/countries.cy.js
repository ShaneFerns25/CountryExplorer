describe('countries spec', () => {
  // to test the successful working of countries api, Ireland was chosen as the country to get information on
  it('returns json formatted information about a country based on its common or official name', () => {
    cy.request('GET','http://localhost:9000/api/countries/Ireland').then((response)=>{
      expect(response.body.common).to.eq('Ireland');
      expect(response.body.official).to.eq('Republic of Ireland');
      expect(response.body.capital[0]).to.eq('Dublin');
      expect(response.body.otherNames).to.eq('IE or Éire or Republic of Ireland or Poblacht na hÉireann');
      expect(response.status).to.eq(200);
    })
  });

  // to test unsuccessful attempt of trying to hit countries api, which occurs on entering a name that is
  // neither the common or official name of a country
  // here we test with Indis a misspelling of India
  it('returns 404 on trying to hit countries api with Indis', () => {
    cy.request({
      method:'GET',
      url:'http://localhost:9000/api/countries/Indis',
      failOnStatusCode: false
    }).then((response)=>{
      expect(response.body.status).to.eq(404);
    })
  });
});