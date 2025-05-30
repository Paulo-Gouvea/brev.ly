## Funcionalidades e Regras

Assim como na API, temos as seguintes funcionalidades e regras:

- [x]  Deve ser possível criar um link
    - [x]  Não deve ser possível criar um link com encurtamento mal formatado
    - [x]  Não deve ser possível criar um link com encurtamento já existente
- [x]  Deve ser possível deletar um link
- [x]  Deve ser possível obter a URL original por meio do encurtamento
- [x]  Deve ser possível listar todas as URL’s cadastradas
- [x]  Deve ser possível incrementar a quantidade de acessos de um link
- [x]  Deve ser possível baixar um CSV com o relatório dos links criados

Além disso, também temos algumas regras importantes específicas para o front-end:

- [ ]  É obrigatória a criação de uma aplicação React no formato SPA utilizando o Vite como `bundler`;
- [ ]  Siga o mais fielmente possível o layout do Figma;
- [ ]  Trabalhe com elementos que tragam uma boa experiência ao usuário (`empty state`, ícones de carregamento, bloqueio de ações a depender do estado da aplicação);
- [ ]  Foco na responsividade: essa aplicação deve ter um bom uso tanto em desktops quanto em celulares.

## Páginas

Essa aplicação possui 3 páginas:

- [ ] A página raiz (`/`) que exibe o formulário de cadastro e a listagem dos links cadastrados;
- [ ] A página de redirecionamento (`/:url-encurtada`) que busca o valor dinâmico da URL e faz a pesquisa na API por aquela URL encurtada;
- [ ] A página de recurso não encontrado (qualquer página que não seguir o padrão acima) que é exibida caso o usuário digite o endereço errado ou a url encurtada informada não exista.

## Ferramentas

É obrigatório o uso de:

- [x] Typescript
- [x] React
- [x] Vite sem framework

É flexível o uso de:

- [x] TailwindCSS
- [x] React Query
- [x] React Hook Form
- [x] Zod

## Dicas

- Comece o projeto pela aba `Style Guide` no Figma. Dessa forma, você prepara todo o seu tema, fontes e componentes e quando for criar as páginas vai ser bem mais tranquilo;
- Trabalhe com o desenvolvimento `mobile first`, principalmente se estiver utilizando ferramentas que se favorecem disso como Tailwind;
- Assim com a experiência do usuário é importante (UX), a sua experiência no desenvolvimento (DX) também é muito importante. Por isso, apesar de ser possível criar essa aplicação sem nenhuma biblioteca, recomendamos utilizar algumas bibliotecas que vão facilitar tanto o desenvolvimento inicial quanto a manutenção do código;
- Em caso de dúvidas, utilize o espaço da comunidade e do nosso fórum para interagir com outros alunos/instrutores e encontrar uma solução que funcione para você.