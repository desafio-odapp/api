# Desafio Desenvolvimento Odapp


## Instalação

```
git clone https://github.com/desafio-odapp/api
````
## Executar Aplicativo 

```
npm install && npm run start
```

Execute npm install para instalar as dependências.

Execute npm run start para iniciar o aplicativo.

Navegue para http://localhost:7700/api/pacientes para listar todos os pacientes cadastrados (GET - ALL).

O deploy da aplicação está disponível em:

[LINK](https://desafio-odapp-api.glitch.me/api/pacientes)

[Postman Collection](https://www.getpostman.com/collections/633804a7d299411a1a8b) 
##
API RESTful - Paciente (CRUD)
```json
{
	"id": "Number",
	"nome": "String",
	"idade": "Number",
	"dataCadastro": "Date",
	"cidade": "String",
	"estado": "String"
}
```


## Tecnologias Utilizadas
* Sequelize - mySQL (ORM)
* Express.js (NodeJS Framework)
* Chai  &&  Mocha (Testes Unitários)

##
![DELETE](https://i.imgur.com/2bkT55n.png)
##
![GET - ALL](https://i.imgur.com/hAp67Kt.png)
##
![GET - ID](https://i.imgur.com/ObtvQoo.png)
##
![SAVE](https://i.imgur.com/oYss2Mi.png)
##
![UPDATE](https://i.imgur.com/8XsmRek.png)
