const outGlifos = document.getElementById("outGlifos");
const outCategoria = document.getElementById("outCategoria");
const OutAnatomia = document.getElementById("OutAnatomia");
const outLinha = document.getElementById("outLinha");


let boolean = true;

function reset(){
    outCategoria.textContent = "";
    outGlifos.textContent = "";
    OutAnatomia.textContent = "";
    outLinha.textContent = "";
};

function anatomiaDeFontes(){

    outCategoria.textContent = "";
    outGlifos.textContent = "";
    outLinha.textContent = "";
    
    if (boolean == true){
        const ul = document.createElement('ul');
        const itens = [`
Anatomia de fontes refere-se ao estudo e à descrição das partes e características específicas dos caracteres em uma fonte tipográfica. Cada elemento de um caractere tem um nome e uma função particular, e entender a anatomia de uma fonte é essencial para designers gráficos e tipográficos para criar e analisar fontes de forma eficaz.`,
                `•	Glifos: Signos alfabéticos projetados para reprodução mecânica. Representam letras e caracteres.`,
            `•	Família Tipográfica: Conjunto de caracteres com mesmas características de desenho, apesar das variações em peso, inclinação e corpo (exemplo: Helvetica Neue).`,
            `•	Fonte: Conjunto de glifos que compõem uma família tipográfica. Também se refere aos arquivos digitais contendo glifos para uso em computadores.`,
            `•	Ligaduras: Conexões de dois ou mais caracteres (ex.: FI, st, ae, oe, ff). Melhoram a legibilidade e a estética do texto.`,
            `•	Anatomia dos Tipos: Elementos que compõem os tipos incluem: Bojo, Haste, Barra, Perna, Serifa, Oco, Cauda, Terminal, Ombro, Vértice, Ligação, Orelha, Gancho, Junção, Espora, Incisão, Abertura, Espinha, Braço.  Conhecimento da anatomia dos tipos é útil para tipógrafos e designers, especialmente em lettering`,
        ];
    
        itens.forEach(function(texto){
            const li = document.createElement("p");
            li.className = "text"
            li.textContent = texto;
            ul.appendChild(li)
        })

        OutAnatomia.appendChild(ul);
        boolean = false;
    }else{
    OutAnatomia.textContent = "";
    boolean = true;}
    }

function glifos(){
    OutAnatomia.textContent = "";
    outCategoria.textContent = "";

    if (boolean == true){
        const glifEx = document.createElement('p');
        glifEx.textContent = "G L I F O S";
        glifEx.className = "glifEx";
        outGlifos.appendChild(glifEx);
    
        const glifosText = document.createElement('p');
        glifosText.textContent = `Glifos tipográficos são as unidades básicas que compõem uma fonte, representando caracteres individuais ou combinações de caracteres. Cada glifo é uma forma específica que corresponde a um símbolo no alfabeto, número, ou outro tipo de caractere, variando em estilo, peso e forma conforme a tipografia escolhida. Na tipografia digital, você pode explorar o conjunto completo de glifos disponíveis em uma fonte, visualizando todas as variações e formas únicas.`;
        glifosText.className = "text";
        outGlifos.appendChild(glifosText);

        const ul = document.createElement('ul');
        const itens = ["Esses filtros de glifos são organizados em três categorias principais:", "Comum: Inclui elementos como setas, símbolos de moedas, símbolos matemáticos, números, marcas de pontuação e símbolos CJK (Chinês, Japonês, Coreano), entre outros.", "Scripts: Abrange os sistemas de escrita suportados pela fonte, como latim, grego, cirílico, árabe, hebraico, entre outros.", "OpenType: Esses recursos permitem a personalização e o refinamento do texto, oferecendo opções como ligaduras, que unem dois ou mais caracteres para formar uma combinação esteticamente agradável; frações, que permitem a exibição adequada de números fracionários; e formas alternativas, que oferecem diferentes estilos para certos caracteres, como variações estilísticas ou formas contextuais. Esses recursos são particularmente úteis em projetos de design tipográfico que exigem um nível extra de controle e sofisticação."];

        itens.forEach(function(texto) {
            const li = document.createElement('p'); 
            li.textContent = texto; 
            li.className = "text";
            ul.appendChild(li); 
          });

          outLinha.appendChild(ul);

        boolean = false;
    }else{

        outGlifos.textContent = "";
        outLinha.textContent = "";
        boolean = true;
    }
}

function categoriaDeFontes(){

    OutAnatomia.textContent = "";
    outGlifos.textContent = "";
    outLinha.textContent = "";
    if (boolean == true){
        const ul = document.createElement('ul');
        const itens = [{
            name: "Fontes Serifadas",
            características: "Possuem pequenos pés nas partes superior e inferior das letras. Originaram-se no final do século XV.",
            psicologia: `Evocam tradição, respeito e confiança. Adequadas para marcas que buscam uma imagem elegante e sofisticada, frequentemente usadas em áreas acadêmicas, editoriais e financeiras.`,
            className: "merriweather-regular"
        },
        {
            name: "Sans-Serif",
            características: "Linhas retas e simples, sem floreios. Tornaram-se populares no século XIX",
            psicologia: `Transmitem um visual simples e moderno. Ideal para empresas que buscam clareza e eficiência. Oferecem um design refinado e são usadas para criar uma sensação de honestidade.`,
            className: "ubuntu-regular"
        },
        {
            name: "Monoespaçadas",
            características: "Cada caractere tem a mesma largura horizontal, garantindo alinhamento uniforme. São usadas principalmente em programação e documentos técnicos.",
            psicologia: `Transmitem precisão e clareza, ideais para ambientes técnicos e científicos, associadas a ordem e confiabilidade.`,
            className: "space-mono-regular"
        },
        {
            name: "Display",
            características: " Projetadas para criar impacto visual em tamanhos grandes, com designs estilizados e ornamentados. Usadas em títulos, cabeçalhos e materiais promocionais para destacar e capturar a atenção. Consegue usar essa fonte utilizando o conceito de importação de fontes utilizando o serviço dafont.com. Importamos o arquivo para a pasta do projeto e exportamos ele usando o comando @font-face no css.",
            psicologia: `Transmitem uma sensação de força e criatividade, ideais para captar a atenção e causar uma impressão marcante. São associadas a impacto visual e originalidade, frequentemente usadas em contextos onde a estética e a presença são cruciais.`,
            className: "birds-of-paradise"
        }

        ];
        itens.forEach(item => {
            const li = document.createElement('div');
            li.className = item.className;
            li.innerHTML = `
            <div class="text"><span class="categoria">Nome:</span> ${item.name}</div>
            <div class="text"><span class="categoria">Características:</span> ${item.características}</div>
            <div class="text"><span class="categoria">Psicologia:</span> ${item.psicologia}</div>
            <br>
          `;    
    
        ul.appendChild(li)
    });
        outCategoria.appendChild(ul);

        boolean = false;
    }else{
        outCategoria.textContent = "";
        boolean = true
    }
}