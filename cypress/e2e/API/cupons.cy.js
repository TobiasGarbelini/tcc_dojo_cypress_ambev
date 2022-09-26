/// <reference types="cypress" />

describe('Cadastro de cupons', () => {
    it('Listar cupons', () => {
        cy.request({
            method: 'GET',
            url: '/rest-api/docs/#/coupons/get_wc_v3_coupons',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('Listar cupom por id', () => {
        cy.request({
            method: 'GET',
            url: '/rest-api/docs/#/coupons/get_wc_v3_coupons__id_',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            },
            body: {
                id: '6885',
                context: 'view'

            }
        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("6885")

        })

    })

    it('Cadastrar cupom', () => {
        cy.request({
            method: 'POST',
            url: '/rest-api/docs/#/coupons/post_wc_v3_coupons',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            },
            body: { 
                code: "teste10", 
                amount: "10", 
                discount_type: "fixed_product", 
                description: "Cupom de desconto de teste TCC"
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
        })

    })

});
