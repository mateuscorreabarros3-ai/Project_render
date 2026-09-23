const materia = sessionStorage.getItem('materia');
const jaLogou = sessionStorage.getItem('logou');

window.onload = function usuarioLong(){
    const usuario = localStorage.getItem('usuario');

    document.getElementById('nome').textContent = usuario

    if(materia === null || jaLogou === 'verdade'){
        return;
    }else if(materia === 'exp'){
        exponencial();
        carregarQuestao();
    }else if(materia === 'log'){
        logaritmo();
        carregarQuestao();
    }else if(materia === 'sis'){
        sistemasLineares();
        carregarQuestao();
    }else if(materia === 'mat'){
        matrizes();
        carregarQuestao();
    }
    sessionStorage.setItem('logou', 'verdade');
}


function escolherOutro(){
    escolha.style.display = 'flex';
    explicacao.style.display = 'none';
}

let escolha = document.getElementById('esco');
let tituMud = document.getElementById('titu');
let explicacao = document.getElementById('explicacao');
let questoes;

function selecaoCurso(){
    const selecionado = document.getElementById('meuSelect').value;

    if (selecionado === "exp"){
        exponencial();
    } else if (selecionado === "log") {
        logaritmo();
    } else if (selecionado === "mat") {
        matrizes();
    } else if (selecionado === "sist") {
        sistemasLineares();
    } else if(selecionado === "set"){
        alert('Escolha um dos cursos')
    } else {
        document.getElementById('titu').textContent = "Erro";
    }

    // Inicializa o quiz ao carregar a página
    carregarQuestao();

}

function exponencial(){
    escolha.style.display = "none";
    explicacao.style.display = "block";

    let expliMud = document.getElementById('expli');
    let exempMud = document.getElementById('exemp');

    expliMud.innerHTML = `<h3>Exponenial</h3> 
    <p>Uma função exponencial é expressa por:</p> 
    
    <h2><strong>f(n) = aⁿ</strong></h2> 
    <p>a: É um valor constante(O valor não muda). <br> 
    x: a o valor que vai mudar.</p> 
    <p> f(x): representa a saída ou o resultado da função quando um determinado valor é colocado no lugar de x <br> 
    A base deve ser sempre a > 0 (a maior que zero)<br> <br> 
    a != 1 (diferente de 1)<br> 
    Para garantir um comportamento de crescimento ou decaimento real.<br> </p> 
    
    
    <h3> Função Cresente</h3> 
    <p>Comportamento: À medida que o valor de x aumenta, o valor de y ou f(x) também aumenta rapidamente. <br> <br>
    A função é crescente quando a base é maior que 1 (a > 1) </p> 
    
    
    <h3>Função Decrecente</h3> 
    <p>A função é decrescente quando a base é maior que 0 e menor que 1 (0 < a < 1). <br> <br>
    Comportamento: À medida que o valor de x aumenta, o valor de y diminui, aproximando-se de zero, mas sem nunca tocá-lo. <br> <br>
    Exemplos Algébricos e Práticos <br> <br>São exemplos clássicos de leis de funções exponenciais decrescentes: <br>
    * f(x) = (1/2)X <br> * f(x) = (0,8)X </p>`;

    
    exempMud.innerHTML = `<p>Exemplo:  <br> <br>
    •  Exemplos: f(x) = 2x,  f(x) = 5x, f(x) = 10x.. <br>
    •  Exemplo Prático y = 2^x:<br>
    •	Se x = 0, y = 2^0 = 1.<br>
    •	Se x = 1, y = 2^1 = 2.<br>
    •	Se x = 2, y = 2^2 = 4.<br>
    •	Se x = 3, y = 2^3 = 8.<br> 
    </p> 
    
    <p>Exemplo:<br> <br> 
    F(x) = 2x<br> <br>
    •  Se x = 0, temos f(0) = 20 = 1 <br>
    •  Se x = 1, temos f(1) = 21 = 2<br>
    •  Se x = 2, temos f(2) = 22 = 4<br>
    •  Se x = -1, temos f(-1) = 2-1 = ½= 0,5<br><br>


    Neste exemplo, como a base 2 é maior que 1, trata-se de uma função crescente, cujo gráfico intercepta o eixo y exatamente no ponto 0, 1.</p> 

    <img src='../img/grafic1.png'> <p> São exemplos clássicos de leis de funções exponenciais decrescentes: <br>

    * f(x) = (1/2)X <br>
    * f(x) = (0,8)X<br> <br>
    
    Mapeamento de Valores para f(x) = (1/2)^x <br> <br>
    Valor de x Cálculo Exponencial Valor de y<br> <br>
    
    * x = 0 y = (1/2)0 = 1        y = 1,0<br>
    * x = 1 y = (1/2)1 = 1/2    y = 0,5<br>
    * x = 2 y = (1/2)2 = 1/4    y = 0,25<br>
    * x = 3 y = (1/2)3 = 1/8    y = 0,125<br><br></p> 
    * <img src='../img/grafic2.png'>`;
    
    tituMud.textContent = "Exponencial";
    
    questoes = [
        //FACIES
        {
            pergunta: "Quanto é 9³?",
            alternativas: ["81", "729", "27", "12"],
            correta: 1, // Índice da alternativa correta (Paris)
            dica: "Lembre-se que esse exponencial é n.n.n"
        },
        {
            pergunta: "Seja a função exponencial f(n)=3ⁿ. Qual é o valor de f(2)+f(0)?",
            alternativas: ["10", "9", "12", "6"],
            correta: 0, // 8 planetas
            dica: "Lembre-se que qualquer número (exceto zero) elevado a zero é igual a 1."
        },
        {
            pergunta: "Determine o valor de x na equação exponencial 2<sup>n+3</sup> = 32",
            alternativas: ["2", "5", "29", "8"],
            correta: 0, // Pacífico
            dica: "Tente escrever o número 32 como uma potência de base 2."
        },

        //MEDIA
        {
            pergunta: "Dada a função g(n)=(½)ⁿ , qual das alternativas descreve corretamente o comportamento do seu gráfico?",
            alternativas: ["É uma função crescente que intercepta o eixo x em (1,0).", "É uma função decrescente que nunca toca o eixo x.", "É uma função crescente que intercepta o eixo y em (0, 0,5).", "Dalí"],
            correta: 1, // Leonardo da Vinci
            dica: "Observe se a base da potência é maior ou menor que 1."
        },
        {
            pergunta: "Resolva a equação 4ⁿ-6.2ⁿ+8=0. Quais são os possíveis valores para n?",
            alternativas: ["1 e 3", "2 e 4", "1 e 2", "0 e 1"],
            correta: 2, // Oxigênio
            dica: "Use uma variável auxiliar, como y = 2ⁿ, para transformar o problema em uma equação do 2º grau."
        },
        {
            pergunta: "O crescimento de uma cultura de bactérias é modelado por P(t) = 500 &middot; 2<sup>t/3</sup>, onde 't' é o tempo em horas. Após quanto tempo a população chegará a 4000 bactérias?",
            alternativas: ["6 horas", "12 horas", "9 horas", "3 horas"],
            correta: 2, // 1969
            dica: "Substitua P(t) por 4000 e simplifique dividindo ambos os lados por 500."
        },

        //DIFICIES
        {
            pergunta: "Qual o conjunto solução da inequação exponencial (⅓)<sup>x</sup> < <sup>1</sup>&frasl;<sub>27</sub>?",
            alternativas: ["x > 9", "x < 9", "x > 3", "x < 3"],
            correta: 2, // Rússia
            dica: "Cuidado! Quando a base está entre 0 e 1, a ordem da desigualdade se inverte ao comparar os expoentes."
        },
        {
            pergunta: "(FUVEST) A solução da equação 2<sup>x</sup> + 2<sup>-x</sup> = <sup>5</sup>&frasl;<sub>2</sub> é:",
            alternativas: ["x = 2 ou x = 1/2", "x = 1 ou x = -1", "x = log 2", "x = 1 ou x = 0"],
            correta: 1, // 206
            dica: "Substitua 2<sup>x</sup> por y e note que 2<sup>-x</sup> é o mesmo que 1/y."
        },
        {
            pergunta: "(UNICAMP) Se f(x)=a<sup>x</sup> é uma função crescente e f(f(1))=16, então o valor de a é:",
            alternativas: ["256", "2", "4", "Não existe valor real"],
            correta: 2, // Barbeiro
            dica: "Encontre f(1) primeiro e depois aplique a função novamente sobre esse resultado."
        }
    ];


}

function logaritmo(){
    escolha.style.display = "none";
    explicacao.style.display = "block";
    
    let expliMud = document.getElementById('expli');
    let exempMud = document.getElementById('exemp');

    tituMud.textContent = "Logaritmo";    
    expliMud.innerHTML = `<h2>Estudo Completo dos Logaritmos: Definições, Propriedades e Exemplos</h2>
    <h4><strong>O logaritmo é a operação inversa da exponencial, utilizada para o cálculo de equações exponenciais que não possuem soluções imediatas.</strong></h4>
    
    <h3>1. Definição de Logaritmo</h3>
    <p>Considere dois números reais positivos a e b, com a > 0 e a ≠ 1. O logaritmo de b na base a é o número x se, e somente se, a elevado a x for igual ao número b.</p>
    <p><strong>Fórmula fundamental:</strong> loga b = x ⇔ ax = b</p>

    <h4>Nomenclatura:</h4>
    <p>●	a → base (deve ser positiva e diferente de 1)<br>
    ●	b → logaritmando (deve ser positivo)<br>
    ●	x → logaritmo (o expoente resultado)<br><br>
    Exemplo Prático: Calcular log3 81 <br><br></p>

    <p>Queremos descobrir qual expoente devemos elevar o 3 para que o resultado seja igual a 81. Usando a definição, temos:<br>
    log₃ 81 = x ⇔ 3x = 81<br>
    Fatorando o número 81:<br>
    81 | 3<br>
    27 | 3<br>
    9 | 3<br>
    3 | 3<br>
    1 | 34<br><br>
    Como 81 = 34, temos que 3x = 34, portanto x = 4.<br></p>

    <p>
    Outros Exemplos:<br>
    ●	log₆ 36 = 2, pois 6² = 36<br>
    ●	log₂ 16 = 4, pois 2⁴ = 16<br>
    ●	log<sub>1/5</sub> 5 = -1, pois (1/5)<sup>-1</sup> = 5<br><br></p>


    <h3>2. O Logaritmo Decimal (Base 10)</h3>
    <p>Quando um logaritmo possui a base igual a 10, ele é chamado de logaritmo decimal. Ao registrar um logaritmo decimal, não é necessário escrever a base 10. É convencionado que:<br>
    <strong>log<sub>10</sub> b = log b</strong><br>
    Explicação Prática: O caso de log(10) = 1<br>
    Quando a base de um logaritmo é igual ao seu logaritmando, o resultado será sempre 1. Sabendo que todo número elevado a 1 é igual a ele mesmo (101 = 10), o resultado do logaritmo só pode ser 1.<br><br></p>
    
    
    <h3>3. Consequências da Definição</h3>
    <p>A partir da definição de logaritmo, podemos obter algumas consequências importantes:<br>
    1.	Logaritmo de 1: O logaritmo de qualquer base, cujo logaritmando seja igual a 1, é igual a 0. (log<sub>a</sub> 1 = 0, pois a⁰ = 1)<br>
    2.	Logaritmo da base nela mesma: Quando o logaritmando é igual à base, o logaritmo é igual a 1. (log<sub>a</sub> a = 1, pois a¹ = a)<br>
    3.	Logaritmo de uma potência da base: O logaritmo de uma potência de base a é igual ao expoente dessa potência. (log<sub>a</sub> a<sup>m</sup> = m)<br>
    4.	Igualdade de logaritmos: Se dois logaritmos possuem a mesma base e são iguais, então seus logaritmandos também são iguais. (log<sub>a</sub> b = log<sub>a</sub> c ⇔ b = c)<br>
    5.	Potência com expoente logarítmico: Uma potência de base a e expoente loga b é igual a b. (aloga b = b)<br><br></p>
    
    
    <h3>4. Propriedades Operatórias</h3>
    <p>As propriedades organizam os cálculos matemáticos transformando operações internas:<br>
    
    <strong>Produto:</strong>	log<sub>a</sub>(b · c) = log<sub>a</sub> b + log<sub>a</sub> c   <br>
    <strong>Quociente:</strong>	log<sub>a</sub>(b / c) = log<sub>a</sub> b - log<sub>a</sub> c	<br>
    <strong>Potência:</strong>	log<sub>a</sub>(bm) = m · log<sub>a</sub> b	<br>
    <strong>Mudança de Base:</strong>	log<sub>a</sub> b = log<sub>c</sub> b / log<sub>c</sub> a	<br><br></p>
    
    <h3>5. Mudança de Base em Detalhes</h3>
    <p>A mudança de base é utilizada quando a base original não está disponível na calculadora ou para simplificar expressões. A base c pode ser qualquer número positivo diferente de 1, sendo mais comum utilizar a base 10 (log) ou a base e (ln).<br>
    Exemplo: Calcular log2 8 na base 10:<br>
    log₂ 8 = log8 / log2<br>
    Sabendo que log₈ ≈ 0,9031 e log(2) ≈ 0,3010:<br>
    log₂ 8 = 0,9031 / 0,3010 ≈ 3. (Prova real: 2³ = 8) <br><br></p>


    <h3>6. O Cologaritmo</h3>
    <p>O cologaritmo é um tipo especial de logaritmo definido como o oposto (inverso aditivo) de um logaritmo.<br>
    Definição: colog<sub>a</sub> b = -log<sub>a</sub> b = log<sub>a</sub>(1/b)<br>
    Exemplo: <br>
    Calcule o cologaritmo de 100 na base 10:<br>
    colog<sub>10</sub> 100 = -log<sub>10</sub> 100 = -2<br>
    Ou utilizando o inverso: log<sub>10</sub>(1/100) = log<sub>10</sub> 0,01 = -2.<br><br></p>
    `;

    exempMud.innerHTML = `
    
    
    <h3><strong>•	Função crescente </strong></h3>
    <p>Vamos construir o gráfico de uma função crescente, lembrando que uma função é crescente graficamente quando à medida que o valor de x aumenta, o valor de y também aumenta.<br>
    Exemplo:<br>
    <strong>f(x) = log₂x</strong><br><br></p>

    <img src="../img/tabelaLog.jpeg">
    
    <p><br><br>Agora que temos os pontos, é possível construirmos o gráfico.<br>
    Note que a base é maior que 1, logo, o gráfico será crescente<br><br></p>

    <img src="../img/graficLog1.jpeg">
    
    
    <h3><br><br><strong>•	Função decrescente</strong></h3>
    <p>Uma função é considerada decrescente quando à medida que o valor de x aumenta, o valor de y diminui. Vamos construir um gráfico de uma função logarítmica decrescente.<br>
    Exemplo:<br>
    <strong>f(x) = log<sub>½</sub>x</strong><br><br></p>

    <img src="../img/tabelaLog2.jpeg"> 
    
    
    <p><br><br>Agora que temos os pontos, é possível construirmos o gráfico.<br>
    Note que a base é menor que 1, logo, ele será decrescente.<br><br></p>

    <img src="../img/graficLog2.jpeg">
    `;
    

    questoes = [
        //FACIES
        {
            pergunta: "Qual é o valor de log₂(32)?",
            alternativas: ["16", "4", "5", "6"],
            correta: 2, // 8 planetas
            dica: "log₂(32) => 2ⁿ=32"
        },
        {
            pergunta: "Determine o valor de log₃(1) + log₅(5).",
            alternativas: ["0", "2", "1", "6"],
            correta: 2, // Pacífico
            dica: "Lembre-se das propriedades imediatas para logaritmando igual a 1 e logaritmando igual à base."   
        },
        {
            pergunta: "Se log(x) = 2, qual é o valor de x? (Nota: quando a base omitida, ela é 10).",
            alternativas: ["2", "100", "20", "10"],
            correta: 1, // Pacífico
            dica: "A base omitida é 10. Aplique a definição transformando em potência."
        },

        //MEDIA
        {
            pergunta: "Sabendo que log(2) ≈ 0,30 e log(3) ≈ 0,48, qual é o valor aproximado de log(6)?",
            alternativas: ["0,14", "0,39", "0,18", "0,78"],
            correta: 3, // Leonardo da Vinci
            dica: "Escreva 6 como o produto de 2 e 3 e aplique a propriedade do logaritmo do produto."
        },
        {
            pergunta: "Qual é o valor da expressão log₂(80) - log₂(5)?",
            alternativas: ["4", "3", "16", "75"],
            correta: 0, // Oxigênio
            dica: "Transforme a subtração de logaritmos no logaritmo de uma divisão."
        },
        {
            pergunta: "Se log₃(x)=2 ⋅ log₃(5), qual é o valor de x?",
            alternativas: ["32", "10", "5", "25"],
            correta: 3, // 1969
            dica: "Introduza o coeficiente multiplicador 2 como expoente do logaritmando 5."
        },

        //DIFICIOS
        {
            pergunta: "(FUVEST) Se log(2) = y, então o valor de log(5) em função de y é:",
            alternativas: ["1/y", "y/2", "5y", "1 - y"],
            correta: 3, // Rússia
            dica: "Escreva o número 5 como a divisão entre a base 10 e o número 2."
        },
        {
            pergunta: "(UNICAMP) Sabendo que log₃(x) + log₉(x) = 3, o valor de x é:",
            alternativas: ["81", "9", "3", "27"],
            correta: 1, // 206
            dica: "Faça uma mudança de base para que ambos os logaritmos fiquem na base 3."
        },
        {
            pergunta: "(ENEM) Um terremoto de magnitude M na escala Richter é calculado por M = &sup2;&frasl;&sub3; &middot; log<sub>10</sub>(E/E<sub>0</sub>), onde E é a energia liberada e E<sub>0</sub> é uma energia padrão constante. Se um terremoto A teve magnitude 6 e um terremoto B teve magnitude 4, a razão E<sub>A</sub>/E<sub>B</sub> entre as energias liberadas é:",
            alternativas: ["10", "1000", "100", "1,5"],
            correta: 1, // Barbeiro
            dica: "Calcule a diferença entre as duas equações de magnitude e isole a razão das energias."
        }
    ];
    
}

function matrizes(){
    escolha.style.display = "none";
    explicacao.style.display = "block";

    let expliMud = document.getElementById('expli');
    let exempMud = document.getElementById('exemp');

    tituMud.textContent = "Matrizes";

    expliMud.innerHTML = `<div class="conteudo-matrizes">

    <h1>Matrizes</h1>
    <p>Matriz é uma tabela organizada em linhas e colunas no formato <strong>m &times; n</strong>, onde <strong>m</strong> representa o número de linhas (horizontal) e <strong>n</strong> o número de colunas (vertical).</p>
    <p>A função das matrizes é relacionar dados numéricos. Por isso, o conceito de matriz não é só importante na Matemática, mas também em outras áreas já que as matrizes têm diversas aplicações.</p>

    <h2>Notações e Representações</h2>
    <p>As matrizes são sempre representadas por <strong>letras maiúsculas</strong> (A, B, C…), acompanhadas por índices onde o primeiro número indica a quantidade de linhas e o segundo o número de colunas.</p>
    <p>A quantidade de linhas e colunas determina sua <strong>ordem</strong>. Os elementos ficam organizados entre parênteses, colchetes ou duas barras verticais.</p>

    <p><strong>Exemplo Matriz A (Ordem 2x3):</strong></p>
    <table border="1" style="border-collapse: collapse; text-align: center; margin: 10px 0;">
        <tr><td style="padding: 5px 15px;">-1</td><td style="padding: 5px 15px;">2</td><td style="padding: 5px 15px;">0</td></tr>
        <tr><td style="padding: 5px 15px;">0</td><td style="padding: 5px 15px;">4</td><td style="padding: 5px 15px;">&Sqrt;3</td></tr>
    </table>

    <p><strong>Exemplo Matriz B - Matriz Linha (Ordem 1x4):</strong></p>
    <table border="1" style="border-collapse: collapse; text-align: center; margin: 10px 0;">
        <tr><td style="padding: 5px 15px;">-51</td><td style="padding: 5px 15px;">13</td><td style="padding: 5px 15px;">-7</td><td style="padding: 5px 15px;">3</td></tr>
    </table>

    <p><strong>Exemplo Matriz C - Matriz Coluna (Ordem 3x1):</strong></p>
    <table border="1" style="border-collapse: collapse; text-align: center; margin: 10px 0;">
        <tr><td style="padding: 5px 15px;">1</td></tr>
        <tr><td style="padding: 5px 15px;">-2</td></tr>
        <tr><td style="padding: 5px 15px;">0</td></tr>
    </table>

    <h2>Elementos Genéricos</h2>
    <p>O elemento genérico é representado por letras minúsculas (a, b, c…), acompanhado de índices que indicam sua localização exata (linha e coluna).</p>
    
    <p>Dada uma matriz onde <strong>a<sub>11</sub> = 4</strong>, <strong>a<sub>12</sub> = 16</strong>, isso significa:</p>
    <ul>
        <li><strong>a<sub>11</sub></strong>: Elemento da linha 1, coluna 1.</li>
        <li><strong>a<sub>12</sub></strong>: Elemento da linha 1, coluna 2.</li>
    </ul>

    <h2>Tipos de Matrizes</h2>
    <ul>
        <li><strong>Matriz Quadrada:</strong> O número de linhas é igual ao número de colunas (Ex: 2x2, 3x3). Possui diagonal principal e secundária.</li>
        <li><strong>Matriz Identidade:</strong> Matriz quadrada onde os elementos da diagonal principal são iguais a 1 e os demais são 0.</li>
        <li><strong>Matriz Unitária:</strong> Possui apenas 1 linha e 1 coluna (um único elemento).</li>
        <li><strong>Matriz Nula:</strong> Todos os elementos são iguais a zero.</li>
        <li><strong>Matriz Oposta:</strong> Matriz com os sinais de todos os elementos invertidos.</li>
        <li><strong>Matriz Transposta (A<sup>T</sup>):</strong> Matriz obtida trocando as linhas pelas colunas ordenadamente.</li>
    </ul>

    <h2>Operações Básicas</h2>
    <h3>Adição e Subtração</h3>
    <p>As matrizes devem ter obrigatoriamente a mesma ordem. A operação é feita somando ou subtraindo os elementos correspondentes.</p>

    <h3>Multiplicação por Número Real</h3>
    <p>Multiplica-se cada um dos elementos da matriz pelo número em questão.</p>

    <h3>Multiplicação de Matrizes</h3>
    <p>Só é possível se o número de colunas da primeira matriz for igual ao número de linhas da segunda matriz.</p>

    <h2>Determinantes</h2>
    <p>O determinante é um número real associado a uma matriz quadrada.</p>
    <ul>
        <li><strong>Ordem 1:</strong> É o próprio elemento.</li>
        <li><strong>Ordem 2:</strong> Multiplicação da diagonal principal menos a multiplicação da diagonal secundária.</li>
        <li><strong>Ordem 3:</strong> Calculado duplicando-se as duas primeiras colunas (Regra de Sarrus).</li>
    </ul>

    </div>`;

    exempMud.innerHTML = `<h3>Multiplicação<br></h3>
    <img src="../img/multiMatrizes.jpeg" class="imgMatr">

    <h3><br><br>Determinante de matriz 2 x 2<br></h3>

    <img src="../img/dete2x2.jpeg" class="imgMatr">

    <h3><br><br>Determinante de matriz 3 x 3<br></h3>

    <img src="../img/deter3x3.jpeg" class="imgMatr">
    
    `

    
    questoes = [
    // FÁCEIS
    {
        pergunta: "Seja a matriz A = (a<sub>ij</sub>)<sub>2x2</sub> definida por a<sub>ij</sub> = i + j. Qual é o elemento a<sub>22</sub>?",
        alternativas: ["2", "3", "4", "5"],
        correta: 2,
        dica: "Substitua o valor da linha (i) e da coluna (j) na fórmula fornecida."
    },
    {
        pergunta: "Dada a matriz B = [[3, 5], [1, 2]], qual é a sua matriz transposta (B<sup>T</sup>)?",
        alternativas: ["[[3, 1], [5, 2]]", "[[2, 5], [1, 3]]", "[[5, 3], [2, 1]]", "[[3, 5], [1, 2]]"],
        correta: 0,
        dica: "A transposta transforma as linhas da matriz original em colunas."
    },
    {
        pergunta: "Se multiplicarmos a matriz C = [[2, -1], [0, 4]] pelo número escalar k = 3, qual será a nova matriz resultante?",
        alternativas: ["[[6, -1], [0, 12]]", "[[5, 2], [3, 7]]", "[[6, -3], [0, 12]]", "[[2, -3], [0, 4]]"],
        correta: 2,
        dica: "Multiplique cada um dos elementos individuais da matriz pelo número 3."
    },

    // MÉDIAS
    {
        pergunta: "Dadas as matrizes A = [[1, 2], [3, 4]] e B = [[2, 0], [1, 5]], determine o produto A &middot; B.",
        alternativas: ["[[2, 0], [3, 20]]", "[[4, 10], [10, 20]]", "[[3, 2], [4, 9]]", "[[4, 10], [10, 15]]"],
        correta: 1,
        dica: "Multiplique as linhas da primeira matriz pelas colunas da segunda matriz."
    },
    {
        pergunta: "Qual é o valor do determinante da matriz M = [[2, 3], [1, 5]]?",
        alternativas: ["7", "13", "10", "3"],
        correta: 0,
        dica: "Subtraia o produto da diagonal secundária do produto da diagonal principal."
    },
    {
        pergunta: "Uma matriz quadrada A é chamada de simétrica se A = A<sup>T</sup>. Qual o valor de 'x' para que a matriz [[1, x+2], [5, 3]] seja simétrica?",
        alternativas: ["5", "3", "2", "7"],
        correta: 1,
        dica: "Para ser simétrica, os elementos espelhados pela diagonal principal devem ser iguais."
    },

    // DIFÍCEIS (VESTIBULARES)
    {
        pergunta: "(MACKENZIE) Se A é uma matriz quadrada de ordem 2 e det(A) = 5, então o valor de det(2A) é:",
        alternativas: ["10", "20", "25", "40"],
        correta: 1,
        dica: "Ao multiplicar uma matriz de ordem 'n' por um escalar 'k', o determinante é multiplicado por k<sup>n</sup>."
    },
    {
        pergunta: "(FUVEST) Uma matriz identidade I de ordem 2 possui a propriedade de que A &middot; I = A. Se A = [[1, 2], [3, 4]] e B = [[-2, 1], [1.5, -0.5]], o produto A &middot; B resulta em:",
        alternativas: ["[[0, 0], [0, 0]]", "[[1, 0], [0, 1]]", "[[1, 1], [1, 1]]", "[[-2, 2], [4.5, -2]]"],
        correta: 1,
        dica: "Se o produto de duas matrizes resulta na matriz identidade, significa que uma é a inversa da outra."
    },
    {
        pergunta: "(UNESP) Sabendo que o determinante da matriz [[1, 2, 1], [0, x, 2], [0, 0, 3]] é igual a 6, o valor de x é:",
        alternativas: ["2", "1", "3", "6"],
        correta: 0,
        dica: "Esta é uma matriz triangular (elementos abaixo da diagonal principal são zero); seu determinante é o produto dos elementos da diagonal principal."
    }
];


}

function sistemasLineares(){
    escolha.style.display = "none";
    explicacao.style.display = "block";

    let expliMud = document.getElementById('expli');
    let exempMud = document.getElementById('exemp');


    tituMud.textContent = "Sistemas Lineares";
    expliMud.textContent = "Preview";
    exempMud.textContent = "Preview";


    questoes = [
    // --- FÁCEIS ---
    {
        pergunta: "Qual é a solução do sistema linear composto pelas equações x + y = 5 e x - y = 1?",
        alternativas: ["[3, 2]", "[4, 1]", "[2, 3]", "[5, 0]"],
        correta: 0,
        dica: "Some as duas equações para eliminar a variável y imediatamente."
    },
    {
        pergunta: "Um sistema linear que possui uma única solução única é classificado como:",
        alternativas: ["Sistema Possível e Indeterminado (SPI)", "Sistema Impossível (SI)", "Sistema Possível e Determinado (SPD)", "Sistema Incompatível"],
        correta: 2,
        dica: "Lembre-se de que 'Determinado' significa que as soluções são exatas e finitas."
    },
    {
        pergunta: "Se um sistema linear 2x2 é representado graficamente por duas retas paralelas distintas, quantas soluções ele possui?",
        alternativas: ["Uma única solução", "Infinitas soluções", "Duas soluções", "Nenhuma solução"],
        correta: 3,
        dica: "As soluções de um sistema correspondem aos pontos de interseção entre as retas."
    },
    // --- MÉDIAS ---
    {
        pergunta: "Em um cinema, 2 ingressos de adulto e 3 de criança custam R$ 70,00. Já 3 ingressos de adulto e 1 de criança custam R$ 70,00. Qual o preço do ingresso de adulto?",
        alternativas: ["R$ 15,00", "R$ 20,00", "R$ 25,00", "R$ 10,00"],
        correta: 1,
        dica: "Monte o sistema com 2a + 3c = 70 e 3a + c = 70, então isole 'c' na segunda equação."
    },
    {
        pergunta: "Para qual valor de 'k' o sistema formado por x + 2y = 4 e 3x + ky = 12 possui infinitas soluções (SPI)?",
        alternativas: ["k = 2", "k = 3", "k = 6", "k = 0"],
        correta: 2,
        dica: "Para ser SPI, a segunda equação deve ser um múltiplo exato da primeira."
    },
    {
        pergunta: "Determine o valor de z no sistema linear:<br>x + y + z = 6<br>2x + y - z = 1<br>3x + 2y + z = 11",
        alternativas: ["1", "2", "3", "4"],
        correta: 2,
        dica: "Você pode subtrair a primeira equação da terceira para encontrar o valor de x diretamente."
    },
    // --- DIFÍCEIS (VESTIBULARES) ---
    {
        pergunta: "(FUVEST) Um sistema linear de três equações a três incógnitas possui infinitas soluções. Se a primeira equação é x + y + z = 1 e a segunda é 2x + 2y + 2z = 2, uma possível terceira equação que mantém o sistema indeterminado é:",
        alternativas: ["x + y - z = 0", "3x + 3y + 3z = 3", "x + y + z = 3", "2x - y + z = 1"],
        correta: 1,
        dica: "Para continuar sendo indeterminado, a terceira equação também deve ser proporcional ou uma combinação linear das anteriores."
    },
    {
        pergunta: "(UNICAMP) Sabendo que o sistema linear formado por x + y = 3 e 2x + my = n não possui solução (é impossível), pode-se afirmar que os valores de m e n são, respectivamente:",
        alternativas: ["m = 2 e n = 6", "m = 2 e n &ne; 6", "m &ne; 2 e n = 6", "m &ne; 2 e n &ne; 6"],
        correta: 1,
        dica: "Para o sistema ser impossível, os coeficientes das incógnitas devem ser proporcionais, mas os termos independentes não."
    },
    {
        pergunta: "(UNESP) Uma empresa de transportes distribui 90 caixas de três tamanhos diferentes (A, B e C). O triplo do número de caixas A é igual ao número de caixas B e C juntas. Se a diferença entre o número de caixas C e B é de 10 unidades, quantas caixas do tipo A foram transportadas?",
        alternativas: ["20 caixas", "15 caixas", "25 caixas", "30 caixas"],
        correta: 0,
        dica: "Escreva as equações: A + B + C = 90 e 3A = B + C. Substitua a segunda na primeira."
    }
];



}

//Button concentração



function abrirBt(){
    let tipo = document.getElementById('bt-abrir');
    
    if (tipo.style.display === "flex"){
        tipo.style.display = "none";
    } else {
        tipo.style.display = "flex";
    }
}

let onOff = 0;

function tocarChuva() {
    const audioChuva = document.getElementById('audioChuva');
    audioChuva.loop = true;

    
    if(onOff === 0){
        audioChuva.play()
            .then(() => console.log("Chuva tocando!"))
            .catch(erro => console.error("Erro:", erro));
        onOff = 1;
    } else if(onOff === 1){
        audioChuva.pause()
        console.log("Chuva pausada");
        onOff = 0;
    } else {
        console.log("Error");
    }

    return onOff;
}

let onOff2 = 0;

function tocarMarrom(){

    const audioRuido = document.getElementById('audioMarrom');
    audioRuido.loop = true;

    
    if(onOff2 === 0){
        audioRuido.play()
            .then(() => console.log("Ruido tocando!"))
            .catch(erro => console.error("Erro:", erro));
        onOff2 = 1;
    } else if(onOff2 === 1){
        audioRuido.pause()
        console.log("Ruido pausada");
        onOff2 = 0;
    } else {
        console.log("Error");
    }

    return onOff2;
}


// Exrcícios

// Banco de dados com as 9 questões
let indiceAtual = 0;
let pontuacao = 0;

// Elementos do DOM
const elemPergunta = document.getElementById("pergunta");
const elemOpcoes = document.getElementById("opcoes");
const elemNumQuestao = document.getElementById("num-questao");
const elemNivel = document.getElementById('nivel');
const elemTextoDica = document.getElementById("texto-dica");
const elemBtnProxima = document.getElementById("btn-proxima");
const elemTelaQuiz = document.getElementById("quiz-tela");
const elemTelaResultado = document.getElementById("resultado-tela");
const elemTotalAcertos = document.getElementById("total-acertos");

function carregarQuestao() {
    // Reseta o estado visual para a nova questão
    elemTextoDica.classList.add("dica-escondida");
    elemBtnProxima.disabled = true;
    elemOpcoes.innerHTML = "";

    let q = questoes[indiceAtual];
    elemNumQuestao.innerText = indiceAtual + 1;
    elemPergunta.innerHTML = q.pergunta;

    if(indiceAtual < 3){
        elemNivel.textContent = "(Fácil)";
    } else if(indiceAtual < 6){
        elemNivel.textContent = "(Médio)";
    } else if(indiceAtual <=8){
        elemNivel.textContent = "(Difícil)";
    } else{
        elemNivel.textContent = "(Erro)";
    }


    // Gera os botões das alternativas
    q.alternativas.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerHTML = opcao;
        botao.classList.add("opcao-btn");
        botao.onclick = () => verificarResposta(index, botao);
        elemOpcoes.appendChild(botao);
    });
}

function verificarResposta(indexSelecionado, botaoClicado) {
    let q = questoes[indiceAtual];
    const botoes = elemOpcoes.querySelectorAll("button");

    // Desabilita todos os botões para o usuário não clicar de novo
    botoes.forEach(b => b.disabled = true);

    if (indexSelecionado === q.correta) {
        botaoClicado.classList.add("correta");
        pontuacao++;
    } else {
        botaoClicado.classList.add("errada");
        // Mostra qual era a correta para o usuário aprender
        botoes[q.correta].classList.add("correta");
    }

    elemBtnProxima.disabled = false;
}

function mostrarDica() {
    let q = questoes[indiceAtual];
    elemTextoDica.innerText = q.dica;
    elemTextoDica.classList.remove("dica-escondida");
}

function proximaQuestao() {
    indiceAtual++;
    if (indiceAtual < questoes.length) {
        carregarQuestao();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    elemTelaQuiz.classList.add("escondido");
    elemTelaResultado.classList.remove("escondido");
    elemTotalAcertos.innerText = pontuacao;
}

function reiniciarQuiz() {
    indiceAtual = 0;
    pontuacao = 0;
    elemTelaResultado.classList.add("escondido");
    elemTelaQuiz.classList.remove("escondido");
    carregarQuestao();
}




//Pomodoro


function pomodoro(){
    const opcao = document.getElementById('pomodoroOpc');
    opcao.style.display = "block";
}



let tempo = null;
let tempoInicial = null;
let minuto = null;
let segundo = null;
let cronometro = null;
let contagem = 0;
let selecao = false;
let intervalo = false;
let tipo = null;

const vinte = {
    cincoMinutos: 300, //300
    vinteMinutos: 1200, //1200
    vinteCincoMinutos: 1500 //1500
};

const cinquenta = {
    dezMinutos: 600, //600
    cinquentaMinutos: 3000,//3000
    quarentaMinutos: 2400 //2400
}

function trocaOpcPomodoro(){
    let opcao = document.getElementById('pomodoroOpc').value;//onde vai exibir o timer
    tipo = opcao;
    let sim = confirm('Ao clicar em "OK" você iniciará o estudo com o método pomodoro. Gostaria de iniciar?');
    if(sim){
        if(!selecao){
            if(opcao === '25'){
                valor(tipo);
            }else if(opcao === '50'){
                valor(tipo);
            }
            selecao = true;
        }else{
            alert('Você já seleconou um método pomodoro!');
        }
    }

    
    document.getElementById('btPomoParar').style.display = "block";
    document.getElementById('pomodoroOpc').style.display = "none";
}

function valor(qual){
    if(intervalo){
        contagem++
        if(contagem % 4 === 0){
            qual === '25' ? tempo = vinte.vinteMinutos : tempo = cinquenta.quarentaMinutos;
        }else{
            qual === '25' ? tempo = vinte.cincoMinutos : tempo = cinquenta.dezMinutos;
        }
        
        intervalo = false;
    }else{
        qual === '25' ? tempo = vinte.vinteCincoMinutos : tempo = cinquenta.cinquentaMinutos;
        intervalo = true;
    }   
    timer();
}

function timer(){
    tempoInicial = tempo;
    minuto = Math.floor(tempo / 60);
    segundo = tempo % 60;
    let exibir = document.getElementById('tempo');
    exibir.textContent = String(minuto).padStart(2, '0') + ':' + String(segundo).padStart(2, '0');

    let barra = document.getElementById('barra');
    barra.style.backgroundColor = '#34d613';
    barra.style.width = (tempo / tempoInicial) * 100 + '%';

    cronometro = setInterval(() => {
        tempo--;

        minuto = Math.floor(tempo / 60);
        segundo = tempo % 60;

        exibir.textContent = String(minuto).padStart(2, '0') + ':' + String(segundo).padStart(2, '0');
        
        barra.style.width = (tempo / tempoInicial) * 100 + '%';

        if(tempo < 0 && intervalo === true){
            clearInterval(cronometro);
            alert('Descanso!');
            valor(tipo);

        }else if(tempo < 0 && intervalo === false){
            clearInterval(cronometro);
            alert('Volte!');
            valor(tipo);

        }

        if(tempo == Math.floor(tempoInicial / 2)){
            barra.style.backgroundColor = '#ebdd20';

        }else if(tempo == Math.floor(tempoInicial / 5)){
            barra.style.backgroundColor = '#d61313';

        }

    }, 1000);
}

function pararPomodoro(){
    clearInterval(cronometro);
    selecao = false;
    intervalo = false;

    document.getElementById('tempo').textContent = "";
    document.getElementById('btPomoParar').style.display = "none";
}

//Mudança de Temas

const tema = document.getElementById("temas");

tema.addEventListener('change', (event) => {
  const temaSelect = event.target.value;

  if (temaSelect === 'escuro') {
    // Remove o atributo para voltar às variáveis padrão do :root
    document.documentElement.removeAttribute('data-theme');
  } else {
    // Define data-theme="escuro" ou data-theme="alto"
    document.documentElement.setAttribute('data-theme', temaSelect);
  }
});

// Botão de Dislexia

const matri = document.querySelectorAll('imgMatr');

const body = document.getElementById('body')
const btDisle = document.getElementById('btnDislexias');
let onOffDis = false;

btDisle.addEventListener('click', () => {
    if (!onOffDis){
        body.style.fontFamily = "'OpenDyslexic', sans-serif";
        document.getElementById('sim').style.fontSize = "1rem";
        document.getElementById('bt-conce').style.fontSize = "0.7rem";
        onOffDis = true;
        console.log('fonte dislexia');

        document.getElementById('exemp').innerHTML = `<h3>Multiplicação<br></h3>
        <img src="../img/multiMatrizesDis.jpg" class="imgMatr">
        
        <h3><br><br>Determinante de matriz 2 x 2<br></h3>
        
        <img src="../img/dete2x2Dis.jpg" class="imgMatr">
        
        <h3><br><br>Determinante de matriz 3 x 3<br></h3>
        
        <img src="../img/deter3x3Dis.jpg" class="imgMatr">
        
        `
        
        

    } else {
        body.style.fontFamily = "'Poppins', sans-serif";
        document.getElementById('sim').style.fontSize = "1.25rem";
        document.getElementById('bt-conce').style.fontSize = "1rem";
        matri.src -= "Dis.jpg";
        matri.src += ".jpeg";
        onOffDis = false;
        console.log('Fonte poppins');

        document.getElementById('exemp').innerHTML = `<h3>Multiplicação<br></h3>
        <img src="../img/multiMatrizes.jpeg" class="imgMatr">

        <h3><br><br>Determinante de matriz 2 x 2<br></h3>

        <img src="../img/dete2x2.jpeg" class="imgMatr">

        <h3><br><br>Determinante de matriz 3 x 3<br></h3>

        <img src="../img/deter3x3.jpeg" class="imgMatr">
        `

    };
});

//tamanho mudar

const html = document.documentElement;

let percentualAtual = 100; // Começa em 100%

document.getElementById('btn-aumentar').addEventListener('click', () => {
  if (percentualAtual < 200) { // Limite máximo de 200%
    percentualAtual += 10;
    html.style.zoom = `${percentualAtual}%`;
  }
});

document.getElementById('btn-diminuir').addEventListener('click', () => {
  if (percentualAtual > 50) { // Limite mínimo de 70%
    percentualAtual -= 10;
    html.style.zoom = `${percentualAtual}%`;
  }
});

//esconder sidebar

document.getElementById('diminuir').addEventListener('click', () => {
    document.getElementById('sim').style.display = "none";
    document.getElementById('resto').style.marginLeft = "0";
    document.getElementById('mostrar').style.display = "block";
});

document.getElementById('mostrar').addEventListener('click', () => {
    document.getElementById('sim').style.display = "block";
    document.getElementById('resto').style.marginLeft = "10vw";
    document.getElementById('mostrar').style.display = "none";
});

//Funcionalidade de POP das configuraçoes

const btConfi = document.getElementById('btConfi');
const popConfi = document.getElementById('popConf');
const Xpop = document.getElementById('Xpop');

btConfi.addEventListener("click", () => {
    popConfi.style.display = "flex";
});

Xpop.addEventListener('click', () => {
    popConfi.style.display = "none";
})