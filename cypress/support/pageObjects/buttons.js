class Buttons {
   loginBtn(){
       return cy.get('button[type="submit"]').click()
   }
   moduleBtn(module){
       return cy.get('.title.color-white').contains(module).click()
   }
   subModuleBtn(module){
       return cy.get('.color-white').contains(module).click()
   }
   addBtn(add){
       return cy.get('.btn.btn-primary.ng-star-inserted').contains(add).click()
   }
   addANewBtn(addnew){
       return cy.get('form.ng-dirty > .btn').contains(addnew).click()
   }
   manufacturerDropdown(){
       return cy.get('ng-select[formcontrolname="manufacturerId"]').click()
   }
   searched(){
       return cy.get('div[role="option"]').click()
   }
   addCatalog(){
       return cy.get('.btn.btn-sm.btn-default.ng-star-inserted').click()
   }
   brandDropdown(){
       return cy.get('ng-select[formcontrolname="brandId"]').click()
   }
   manufacturerDropdown2(){
       return cy.get('ng-select[formcontrolname="manufacturer"]').click()
   }
   productCategoryDropdown(){
       return cy.get('ng-select[formcontrolname="productCategoryId"]').click()
   }
   productSubCategoryDropdown(){
       return cy.get('ng-select[formcontrolname="productSubCategoryId"]').click()
   }
   submitBtn(){
       return cy.get('.btn.btn-blue.text-white').click()
   }
   awaitingApprovalBtn(){
       return cy.get('.container-fluid > :nth-child(3) > :nth-child(2) > span').click()
   }
   product(){
       return cy.get(':nth-child(1) > :nth-child(4) > .mrg-top-10 > .user-profile > .dropdown-toggle > .fa').click()
   }
   approve(){
       return cy.get(':nth-child(1) > :nth-child(4) > .mrg-top-10 > .user-profile > .dropdown-menu > :nth-child(1) > .ng-star-inserted').click()
   }
   yesApprove(){
       return cy.get('.swal2-confirm').click()
   }
}
export default Buttons