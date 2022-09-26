/// <reference types="cypress" />

import produtopage from '../../support/pages/produto.page.js'
import carrinhopage from '../../support/pages/carrinho.page.js'

describe('Funcionalidade: Adicionar produto no carrinho', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    })

    it('Adicionar 3 produtos ao carrinho', () => {
        cy.fixture("produtos").then((produto) => {
            cy.buscarProduto(produto.produto1)
            produtopage.adicionarNoCarrinho(produto.produto1)
            carrinhopage.verificarCarrinho(produto.produto1, produto.valorProduto1, produto.subtotal1)
            cy.buscarProduto(produto.produto2)
            produtopage.adicionarNoCarrinho(produto.produto2)
            carrinhopage.verificarCarrinho(produto.produto2, produto.valorProduto2, produto.subtotal2)
            cy.buscarProduto(produto.produto3)
            produtopage.adicionarNoCarrinho(produto.produto3)
            carrinhopage.verificarCarrinho(produto.produto3, produto.valorProduto3, produto.subtotal3)

        })
    });
});