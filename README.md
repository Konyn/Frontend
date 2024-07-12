# Front-end

## Instalação

Para instalar as dependências, utilize o comando:
```sh
npm run install
```
após a intalação já é possivel iniciar o servidor com  o comando:
```sh
npm run dev
```
## Acesso

A primeira tela será a de login. Você precisará estar com o banco de dados rodando na máquina.

Após preencher os dados do usuário corretamente, você será redirecionado para a tela da dashboard do desktop na rota:
http://localhost:5173/dashboard-desktop

Para acessar a rota do mobile, basta alterar o final da URL para:
http://localhost:5173/dashboard-mobile


Quando carregado, serão renderizados todos os valores recebidos pelo banco de dados.

## Funcionalidades

O site é estático, então quase todos os botões não funcionam, exceto os dois últimos, que estão relacionados a transações:

1. **Botão "de dia"**: altera a exibição do gráfico.
2. **Botão "mostrar mais"**: exibe o gráfico.