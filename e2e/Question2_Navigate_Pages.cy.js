describe('Hover over Platform Dropdown', () => {
  beforeEach(() => {
    // Set viewport to full HD and visit the homepage
    cy.viewport(1920, 1080);
    cy.visit('https://www.joget.com/');
    
    // Dismiss cookie consent if present
    cy.get('body').then(($body) => {
      if ($body.find('#cookieChoiceDismiss').length) {
        cy.get('#cookieChoiceDismiss').click();
      }
    });
  });

  it('should reveal the Platform dropdown when hovered', () => {
    // Find the "Platform" link by text and hover over it
    cy.contains('a', 'Platform')
      .should('be.visible')
      .trigger('mouseover');

    // Wait a moment for the dropdown to appear (adjust timing as needed)
    cy.wait(500);

    // Verify that the dropdown menu is visible.
    // Note: Update the selector below based on your inspection. 
    // For example, if the dropdown menu uses a class like ".dropdown-menu", then:
    cy.get('ul.dropdown-menu').should('be.visible');
    
    // Alternatively, if the dropdown is nested within the "Platform" link,
    // you might need to target a child element like:
    // cy.contains('a', 'Platform').parent().find('.dropdown-menu').should('be.visible');
  });
});
