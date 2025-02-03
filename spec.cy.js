

describe('Verify Joget AppCenter Logo', () => {
  it('Should verify Joget DX logo', () => {
    // Visit the page
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the Joget DX logo
    cy.get('#brand_logo') // Check if the element with ID 'brand_logo' exists
      .should('exist') // Ensure the logo container exists in the DOM
      .find('img') // Verify there is an image inside the logo container
      .should('have.attr', 'src') // Check that the image attribute
      .and('contain', '/jw/web/app/appcenter/resources/logo.png'); // Verify the logo path 
    cy.log('Joget DX Logo: Passed');
  });

  it('Should verify the info icon is present and visible', () => {
    // Visit the page
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the Info Icon is present and visible
    cy.get('i.fa-info-circle') // Selector for the info-circle icon
      .should('exist') // Ensure the icon exists in the DOM
      .should('be.visible'); // Ensure the icon is visible
    cy.log('Info Icon: Passed');
  });
});

describe('Verify App Center Link', () => {
  it('Should verify the App Center link in the navigation bar', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the App Center link in the navigation bar
    cy.get('a.menu-link.default') // Selector for the "App Center" link
      .should('be.visible') // Ensure the link is visible
      .and('have.attr', 'href', '/jw/web/userview/appcenter/v/_/home') // Check the href attribute
      .find('span') // Locate the span inside the link
      .should('contain', 'App Center'); // Confirm the text says "App Center"
    cy.log('App Center Link: Passed');
  });
});

describe('Verify Clock Visibility on Large Screen', () => {
  it('Should verify the clock is visible on a large screen', () => {
    // Set the viewport to the largest screen size (e.g., desktop)
    cy.viewport(1280, 800); // You can adjust this size to the largest screen size for your app
    
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');
    
    // Verify the clock is visible on large screens
    cy.get('#clock') // Selector for the clock element
      .should('be.visible'); // Ensure the clock is visible
    cy.log('Clock on Large Screen: Passed');
  });
});


describe('Verify App Names and Icons', () => {
  it('Should verify all the userview-name elements and icons (Asset Management, etc.)', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify all the userview-name elements
    cy.get('#apps') // Check if the 'apps' container exists
      .should('exist') // Ensure it is in the DOM
      .find('.userview-name') // Locate the userview-name elements
      .each(($name, index) => {
        cy.wrap($name).should('be.visible'); // Verify each name is visible
        cy.log(`App Name at index ${index}: Passed`);
      });

    // Check that all icons inside 'userview-icon' are displayed
    cy.get('#apps') // Ensure the 'apps' container exists
      .should('exist') // Check the existence of the container
      .find('.userview-icon') // Look for icons inside userview-icon
      .each(($icon, index) => {
        cy.wrap($icon).should('have.css', 'background-image').and('not.contain', 'none'); // Ensure each icon has a background-image
        cy.log(`App Icon at index ${index}: Passed`);
      });
  });
});

describe('Verify Banner Section', () => {
  it('Should verify the banner image and title text', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the banner image is displayed (background-image)
    cy.get('#banner') // Selector for the banner element
      .should('exist') // Ensure the banner exists in the DOM
      .should('have.css', 'background-image').and('not.contain', 'none'); // Ensure there is a background image
    cy.log('Banner Image: Passed');

    // Verify the banner title text
    cy.get('#banner h1') // Locate the h1 element inside the banner
      .should('exist') // Ensure the title exists
      .and('be.visible') // Ensure it is visible
      .should('contain', 'Faster, Simpler Digital Transformation'); // Verify the title text
    cy.log('Banner Title: Passed');
  });
});

describe('Verify Search Section', () => {
  it('Should verify the search input field visibility', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the search functionality
    cy.get('#search') // Selector for the search form
      .should('exist') // Ensure the search exists in the DOM
      .and('be.visible'); // Ensure the search input field is visible
    cy.log('Search Field: Passed');
  });
});

describe('Verify Home and Login Buttons', () => {
  it('Should verify the "Home" and "Login" buttons are visible', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Verify the "Home" button is visible
    cy.get('a.btn[href="/jw/home"]') // Selector for the Home button
      .should('be.visible') // Ensure the Home button is visible
      .find('i.fa-home') // Locate the icon inside the button
      .should('exist'); // Ensure the home icon exists inside the button
    cy.log('Home Button: Passed');

    // Verify the "Login" button is visible
    cy.get('a.btn[href="/jw/web/ulogin/appcenter/v/_/home"]') // Selector for the Login button
      .should('be.visible') // Ensure the Login button is visible
      .find('i.fa-user.white') // Locate the user icon inside the Login button
      .should('exist'); // Ensure the user icon exists inside the Login button
    cy.log('Login Button: Passed');
  });
});

describe('Verify App Names Inside Apps Section', () => {
  it('Should verify all app-name elements inside the #apps section', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Check for all app-name elements inside #apps
    cy.get('#apps') // Check the apps container
      .should('exist') // Ensure the container exists
      .find('.app-name') // Locate the app-name elements
      .each(($appName, index) => {
        cy.wrap($appName).should('be.visible'); // Ensure each app-name is visible
        cy.log(`App Name at index ${index}: Passed`);
      });
  });
});

describe('Verify Footer Message', () => {
  it('Should verify footer message is displayed', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');

    // Check if the footer message is displayed
    cy.get('#footerMessage') // Selector for the footer message
      .should('exist') // Ensure the footer message exists
      .should('be.visible') // Ensure it is visible
      .should('contain', 'Powered by Joget'); // Verify the footer message text
    cy.log('Footer Message: Passed');
  });
});


