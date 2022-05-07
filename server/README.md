# SERVIDOR DO PROJETO DE FEEDBACK DA NLW RETURN IMPULSE

## Responsável por fazer a conexão com o banco, salvando todos os feedbac bem como o tipo. Aqui também realizamos o envio do email

#### DEPENDÊNCIAS:

- @prisma/client": "^3.13.0"
- cors": "^2.8.5"
- express": "^4.18.1",
- nodemailer": "^6.7.5"
#### DEV DEPENDÊNCIAS

- @swc/jest": "^0.2.20"
- @types/cors": "^2.8.12"
- @types/express": "^4.17.13"
- @types/jest": "^27.5.0"
- @types/node": "^17.0.31"
- @types/nodemailer": "^6.4.4"
- jest": "^28.0.3"
- prisma": "^3.13.0"
- ts-node": "^10.7.0"
- ts-node-dev": "^1.1.8"
- typescript": "^4.6.4"
##

#### INSTALE OS PACOTES USANDO: npm install
#### PARA EXECUTAR O PROJETO LOCAL USE O COMANDO: npm run dev
#### Executado na porta: 3333

##
#### MÉTODOS HTTP

Get = Buscar informações <br>
POST = Cadastrar informações <br>
PUT = Atualizar informações de uma entidade <br>
PATCH = Atualizar uma informação única de uma entidade <br>
DELETE = Apagar informção de uma entidade <br>

##

#### SOLID
 
1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency INversion Principle

<br>

1. Cada classe tem uma responsabilidade única
2. As classes da aplicação devem ser abertas para extensão, mas fechadas para modificação
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando

<br><br>

:warning: Foi desenvolvido usando o SQLite, mas foi alterado para postgresql <br>
na hora do deploy, pode gerar algum erro.