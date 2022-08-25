class Forms {
    email(text){
        return cy.get('input[type="email"]').type(text)
    }
    password(text2){
        return cy.get('input[type="password"]').type(text2)
    }
    name(aName){
        return cy.get('input[formcontrolname="name"]').type(aName)
    }
    address(ad){
        return cy.get('textarea[formcontrolname="address"]').type(ad)
    }
    description(des){
        return cy.get('textarea[formcontrolname="description"]').type(des)
    }
    search(manufacturer){
        return cy.get('.ng-input').type(manufacturer)
    }
    searchMan(man){
        return cy.get(':nth-child(3) > .col-md-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type(man)
    }
    searchBrand(brand){
        return cy.get(':nth-child(2) > .col-md-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input'). type(brand)
    }
    searchProductCategory(pc){
        return cy.get(':nth-child(4) > .col-md-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type(pc)
    }
    searchSubcategory(sc){
        return cy.get(':nth-child(5) > .col-md-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type(sc)
    }
}
export default Forms