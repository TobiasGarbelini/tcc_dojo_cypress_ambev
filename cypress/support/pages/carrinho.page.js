class carrinho {
    get #totalCompra() {return cy.get('strong > .woocommerce-Price-amount > bdi')}
    get #tabelaProdutos() {return cy.get('.table-responsive')}
    

    verificarCarrinho(produto, valorProduto, totalcompra){
        this.#tabelaProdutos.contains(produto)
        this.#tabelaProdutos.contains(valorProduto)
        this.#totalCompra.contains(totalcompra)
    }
}
export default new carrinho;
                    