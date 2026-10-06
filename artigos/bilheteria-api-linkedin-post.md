Semana passada meu antigo chefe me disse: "organiza um ou dois projetos e sai procurando vaga". Eu tinha um laboratório de testes parado, uma API de bilheteria com um único endpoint e três testes.

Em vez de só subir no GitHub, decidi transformar em produto. O resultado está no ar.

O que eu fiz como QA Automation:

1. A regra de negócio ficou onde devia. A compra de ingresso é um UPDATE atômico no banco: o próprio Postgres garante que não se vende mais do que existe, mesmo com compras simultâneas. Quando esgota, a API responde 409.

2. Levei a cobertura a 100% com 33 testes (Jest, Supertest e mocks de banco). E coloquei um coverageThreshold que quebra o CI se a cobertura cair. Cobertura que não é cobrada não se mantém.

3. Documentei com Swagger e fiz uma vitrine que consome a própria API. Ninguém quer ler JSON para entender o projeto.

4. O aprendizado que mais valeu: um bug no script de seed só apareceu quando rodei contra o banco real. Os mocks passavam. Teste que só testa mock não pega tudo.

5. Coloquei CI no GitHub Actions, deploy com Docker no Render e um monitor de disponibilidade pingando o /health a cada 5 minutos.

A maior lição: portfólio não é quantidade de projetos. É um projeto que funciona de verdade, que a pessoa clica e usa.

Demo: https://bilheteria-api-uc0j.onrender.com
Código: https://github.com/Elissdev/bilheteria-api

#QA #QualityAssurance #QAAutomation #SDET #TestesAutomatizados #NodeJS #PostgreSQL #Docker
