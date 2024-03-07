let valorTotalCarrinho = 0;
limpar();

function adicionar(){
    //Passo 1: recuperar nome do produto, qtd e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let preco;
    //Passo 2: calcular o subtotal de cada ítem
    if(quantidade > 0){
        preco = quantidade * valorProduto;
    } else if(isNaN(quantidade) || quantidade < 0){   //isNaN informa que "NÃO É UM NÚMERO"
        alert(`A quantidade informada: "${quantidade}" é invalida, por favor insira um número maior que zero! `);
        return;
    }
    if(!produto || produto.trim() === ''){
        //colocar "!" antes do nome da variável indica ao compilador que uma variável não pode ser nula ou indefinida em um determinado contexto.
        alert('Atenção! É necessário selecionar um item disponível pertencente ao campo "Produto" para prosseguir com suas compras.');
        return;
    }
    

    //Passo 3: adicionar itens em formato de lista ao carrinho

    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section> `; // cada item no carrinho é representado pela tag section

  //Passo 4: atualizar valor TOTAL do carrinho

    valorTotalCarrinho = valorTotalCarrinho + preco;
    let total =  document.getElementById('valor-total');
    total.textContent = `R$ ${valorTotalCarrinho}`;
    document.getElementById('quantidade').value = 0;


    
    // console.log(`lista: ${carrinho}`);
    // console.log(`tamanho da lista: ${carrinho.length}`);
    // let palavraUnidade = quantidade > 1 ? 'unidades' : 'unidade';
    // console.log(`${produto} --------- ${quantidade} ${palavraUnidade} no subtotal de ${preco} R$`);
   // console.log(`O valor total é de: ${total}`);

}

function limpar(){
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}