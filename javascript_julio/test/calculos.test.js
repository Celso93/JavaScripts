import { calcularMedia } from '../src/calculos.js';
import assert from 'node:assert';

describe('Testes relacionados a cálculos', function() {

    describe('Testes do cálculo de média', function() {

        it('A média entre 8 e 6 deverá resultar em 7', function() {
            const resultado = calcularMedia(8, 6);
            assert.equal(resultado, 7);
        });

        it('Deve retornar -2 quando calcular a média entre -8 e 4', function() {
            const resultado = calcularMedia(-8, 4);
            assert.equal(resultado, -2);
        });

    });

});
