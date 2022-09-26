class produto {
    get #tamanhoXs() {return cy.get('.button-variable-item-XS')}
    get #cor() {return cy.get('.button-variable-item-Red')}
    get #comprar() {return cy.get('.single_add_to_cart_button')}
    get #avisoItemCarrinho() {return cy.get('.woocommerce-message')}
    get #verCarrinho() {return cy.get('.woocommerce-message > .button')}

    adicionarNoCarrinho(produto){
        this.#tamanhoXs.click()
        this.#cor.click()
        this.#comprar.click()
        this.#avisoItemCarrinho.contains(produto)
        this.#avisoItemCarrinho.contains("” foi adicionado no seu carrinho.")
        this.#verCarrinho.click()

    }
}
export default new produto;