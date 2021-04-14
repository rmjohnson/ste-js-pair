describe('survey', () => {
	beforeEach(() => {
		cy.intercept('POST', 'api/submit', {
			statusCode: 200,
		}).as('submitSurvey');
		cy.visit('http://localhost:3000/');
	});

	it('loads', () => {
		cy.findByText('Faithlife Hotel Survey');
	});
});
