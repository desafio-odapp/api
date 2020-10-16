const chai = require("chai")
const server = require("../index")
const http = require('chai-http')
const subSet = require('chai-subset')

const { Paciente } = require("../src/app/models")
const should = chai.should()

chai.use(http);
chai.use(subSet);

const pacienteSchema = {
  nome: nome => nome,
  idade: idade => idade,
  dataCadastro: dataCadastro => dataCadastro,
  cidade: cidade => cidade,
  estado: estado => estado,
};

describe('Paciente', function () {

  var id;

  before((next) => {
    Paciente.destroy({where: {}}).then(() => {
      next();
    });
  })

  it('/api/pacientes - POST', function (done) {
    const paciente = {
      "nome": "André Inez de Barros",
      "idade": 17,
      "dataCadastro": "2020-10-14T00:40:44.000Z",
      "cidade": "Poá",
      "estado": "São Paulo"
    }

    chai.request(server)
      .post('/api/pacientes')
      .send(paciente)
      .end((err, res) => {
        res.should.have.status(201);

        res.body.should.have.property('paciente');

        res.body.paciente.should.have.property('nome');
        res.body.paciente.should.have.property('idade');
        res.body.paciente.should.have.property('dataCadastro');
        res.body.paciente.should.have.property('cidade');
        res.body.paciente.should.have.property('estado');

        res.body.paciente.nome.should.be.equal(paciente.nome);
        res.body.paciente.idade.should.be.equal(paciente.idade);
        res.body.paciente.dataCadastro.should.be.equal(paciente.dataCadastro);
        res.body.paciente.cidade.should.be.equal(paciente.cidade);
        res.body.paciente.estado.should.be.equal(paciente.estado);

        id = res.body.paciente.id;
        done();
      })
  })

  it('/api/pacientes/{id} - GET', function (done) {
      chai.request(server)
        .get(`/api/pacientes/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.containSubset({ paciente: pacienteSchema });

          done();
        })
  })

  it('/api/pacientes - PUT', function (done) {

    const newPaciente = {
      "id": `${id}`,
      "nome": "André Inez de Barros",
      "idade": 22,
      "dataCadastro": "2020-10-14T00:40:44.000Z",
      "cidade": "Poá",
      "estado": "São Paulo"
    }

    chai.request(server)
      .put('/api/pacientes')
      .send(newPaciente)
      .end((err, res) => {
        res.should.have.status(204);
        done();
      })
    
  })

  it('/api/pacientes/{id} - DELETE', function (done) {
    chai.request(server)
      .delete(`/api/pacientes/${id}`)
      .end((err, res) => {
        res.should.have.status(204);
        done();
      })
  })
})