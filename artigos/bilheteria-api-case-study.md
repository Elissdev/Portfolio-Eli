# De um laboratório de testes a um produto no ar: o case da Bilheteria API

Quando comecei, a Bilheteria API era um laboratório de QA: um endpoint, três testes e um README que prometia um CRUD que não existia. Este texto conta como transformei aquele experimento em um produto publicado, com demo ao vivo, cobertura total de testes e deploy automatizado.

## O ponto de partida

O projeto nasceu como prática de testes de backend. Tinha um `POST /eventos`, três testes com mock e uma boa história de cobertura e carga. Só que o README anunciava um "sistema CRUD" e a API tinha exatamente uma rota.

Esse tipo de descompasso é o pior inimigo de um portfólio. Quem avalia descobre em trinta segundos que o texto promete mais do que o código entrega, e o resto do trabalho perde credibilidade.

## A decisão: virar produto, não só publicar

O caminho fácil era dar deploy do que existia. Optei por transformar em algo de verdade, com decisões de engenharia e não apenas rotas.

A API passou a ter:

- `GET /health`
- `GET /eventos` e `GET /eventos/:id`
- `POST /eventos`
- `PUT /eventos/:id`
- `DELETE /eventos/:id`
- `POST /eventos/:id/comprar`

E junto disso vieram validação de payload, tratamento explícito de erro, documentação e uma vitrine.

## A regra de negócio que importa

O coração do sistema é a compra de ingressos. O jeito ingênuo seria ler o estoque, checar em JavaScript, subtrair e salvar. Isso quebra sob concorrência: duas compras simultâneas leem o mesmo valor e vendem o mesmo ingresso duas vezes.

A solução foi mover a regra para o banco:

```js
const atualizados = await db('eventos')
  .where({ id: req.params.id })
  .andWhere('ingressos_disponiveis', '>=', quantidade)
  .decrement('ingressos_disponiveis', quantidade)
  .returning('*');
```

O próprio Postgres garante a consistência. Se a linha não for atualizada, a API distingue os casos: evento inexistente devolve 404, estoque insuficiente devolve 409 Conflict.

Regra de negócio que depende de estado compartilhado pertence ao banco, não a um `if`.

## Testar de verdade

Levei a suíte a 33 testes com 100% de cobertura de statements, branches, functions e lines na camada de rotas. Uso Jest, Supertest e um dublê de banco que imita o query builder do Knex.

Dois detalhes fazem diferença:

1. Os testes rodam em milissegundos e sem infraestrutura, o que os torna fáceis de manter.
2. Existe um `coverageThreshold` no Jest que quebra o build se a cobertura cair. Cobertura que não é cobrada no CI não se mantém por muito tempo.

```json
"jest": {
  "coverageThreshold": {
    "global": { "branches": 100, "functions": 100, "lines": 100, "statements": 100 }
  }
}
```

## O bug que só apareceu em produção

Aqui está o aprendizado mais valioso de todo o projeto.

Com todos os testes verdes, o script de seed estava quebrado. Ele importava o módulo de banco com um caminho relativo errado. Os testes passavam porque eles mockam justamente esse módulo, então o caminho nunca era exercitado.

O erro só apareceu quando rodei o seed contra o banco real, o Neon:

```
Error: Cannot find module './db'
```

A lição: mock isola, mas também esconde. Testes com dublê não substituem validar o caminho real de integração. Por isso passei a rodar um smoke test contra o banco de verdade antes de considerar o deploy concluído.

## Publicar faz parte do trabalho

Código que ninguém consegue usar não demonstra nada. Então completei o ciclo:

- Documentação interativa com Swagger em `/docs`, gerada a partir de uma especificação OpenAPI.
- Uma vitrine em página única que consome a própria API, para a pessoa criar um evento e comprar um ingresso na tela.
- Dockerfile e `render.yaml` para o deploy reproduzível.
- CI no GitHub Actions rodando a suíte e publicando o relatório de cobertura a cada push.
- Deploy no Render com Postgres gerenciado no Neon.
- Um monitor de disponibilidade pingando o `/health` a cada cinco minutos, o que mantém o serviço acordado no plano gratuito e alerta em caso de queda.

## O que eu levo disso

Portfólio não é quantidade de projetos. É um projeto que funciona de verdade, que alguém abre, usa e entende.

Para quem está começando em QA, três conclusões ficaram claras:

1. Regra de negócio e caso de teste são a mesma coisa vista de ângulos diferentes. Entender a regra é o primeiro passo para testá-la.
2. Automação sem disciplina de cobertura vira decoração. O threshold no CI é o que sustenta o resultado.
3. Testar contra o ambiente real, nem que seja uma vez, encontra o que o mock esconde.

Demo ao vivo: https://bilheteria-api-uc0j.onrender.com
Documentação: https://bilheteria-api-uc0j.onrender.com/docs
Código: https://github.com/Elissdev/bilheteria-api
