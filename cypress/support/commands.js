// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
    import Forms from "./pageObjects/forms";
    import Buttons from "./pageObjects/buttons";

    const fillForm = new Forms();
    const click = new Buttons();

    Cypress.Commands.add('login', (email, password)=>{
        fillForm.email(email)
        fillForm.password(password)
        click.loginBtn()
        cy.wait(1500)
        cy.get('.side-nav-toggle > .ti-close').click()
    })

    Cypress.Commands.add('createManufacturer', (name)=>{
        click.moduleBtn('Products')
        click.subModuleBtn('Manufacturers')
        click.addBtn('Add Manufacturer')
        fillForm.name(name)
        fillForm.address('2 test way')
        click.addANewBtn('Add Manufacturer')
    })

    Cypress.Commands.add('createBrand', (name1, name2)=>{
        click.moduleBtn('Products')
        click.subModuleBtn('Brand')
        click.addBtn('Add Brand')
        fillForm.name(name1)
        click.manufacturerDropdown()
        fillForm.search(name2)
        click.searched()
        fillForm.description('A test brand')
        click.addANewBtn('Add Brand')
    })

    Cypress.Commands.add('createProduct', (name1, name2, name3)=>{
        click.moduleBtn('Products')
        click.subModuleBtn('Product Catalog')
        click.addCatalog()
        fillForm.name(name1)
        click.brandDropdown()
        fillForm.searchBrand(name2)
        click.searched()
        click.manufacturerDropdown2()
        fillForm.searchMan(name3)
        click.searched()
        click.productCategoryDropdown()
        fillForm.searchProductCategory('Agric')
        click.searched()
        click.productSubCategoryDropdown()
        fillForm.searchSubcategory('Agric Input')
        click.searched()
        fillForm.description('A test brand')
        click.submitBtn()
    })

    Cypress.Commands.add('approveProduct', ()=>{
        click.moduleBtn('Products')
        click.subModuleBtn('Product Catalog')
        click.awaitingApprovalBtn()
        click.product()
        click.approve()
        click.yesApprove()
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
