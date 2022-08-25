/// <reference types= 'cypress' />

const merchListData = require('../../fixtures/merchlist.json')
import Chance from 'Chance';
const chance = new Chance();
const manufacturer = merchListData.manufacturer + chance.integer({min: 1, max: 100})
const brand = merchListData.brand + chance.integer({min: 1, max: 100})
const product = merchListData.product + chance.integer({min: 1, max: 100})

describe('MerchList Test Suite', () => {

    beforeEach( function(){

        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('url'))
        cy.viewport('macbook-15')

    });
    
    it('Create a manufacturer', function () {
        cy
            .login(merchListData.email, merchListData.password)
            .createManufacturer(manufacturer)
    })

    it('Create Brand Under Manufacturer', function () {
        cy
            .login(merchListData.email, merchListData.password)
            .createBrand(brand, manufacturer)
    })

    it('Create product under Manufacturer', function () {
        cy
            .login(merchListData.email, merchListData.password)
            .createProduct(product, brand, manufacturer)
    })

    it('Approve Product', function () {
        cy
            .login(merchListData.email, merchListData.password)
            .approveProduct()
    })
})