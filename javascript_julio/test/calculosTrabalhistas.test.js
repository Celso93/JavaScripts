import { adicionarBonusPorSenioridade, calcularValorDaVendaDeDiasDeFerias } from '../src/calculosTrabalhistas.js';
import assert from 'node:assert';

describe('Testando os Cálculos Trabalhistas', function() {
    describe('Testes da Adição de Bônus por Senioridade', function() {
        it('Validar que júniores recebem R$ 50 a mais no salário', function() {
            // Arrange (Dado que, Pré-condições)
            const senioridade = 'junior';
            const salario = 4200;

            // Act (Quando, Ações)
            const novoSalario = adicionarBonusPorSenioridade(salario, senioridade);

            // Assert (Então, Pós-condições)
            assert.equal(novoSalario, 4250);
        });

        it('Validar que plenos recebem R$ 100 a mais no salário', function() {
            // Arrange (Dado que, Pré-condições)
            const senioridade = 'pleno';
            const salario = 8500;

            // Act (Quando, Ações)
            const novoSalario = adicionarBonusPorSenioridade(salario, senioridade);

            // Assert (Então, Pós-condições)
            assert.equal(novoSalario, 8600);
        });

        it('Validar que seniores recebem R$ 1000 a mais no salário', function() {
            // Arrange (Dado que, Pré-condições)
            const senioridade = 'senior';
            const salario = 12000;

            // Act (Quando, Ações)
            const novoSalario = adicionarBonusPorSenioridade(salario, senioridade);

            // Assert (Então, Pós-condições)
            assert.equal(novoSalario, 13000);
        });
    });

    describe('Testes do Cálculo de Venda das Férias', function() {
        it('Validar que quando vendo 1 dia de férias tendo salário de R$ 3000, recebo R$ 100', function() {
            // Arrange
            const salarioMensal = 3000;
            const diasAVender = 1;

            // Act
            const valorAReceber = calcularValorDaVendaDeDiasDeFerias(salarioMensal, diasAVender);

            // Assert
            assert.equal(valorAReceber, 100);   
        });

        it('Validar que quando vendo 30 dias de férias tendo salário de R$ 3000, recebo R$ 3000', function() {
            // Arrange
            const salarioMensal = 3000;
            const diasAVender = 30;

            // Act
            const valorAReceber = calcularValorDaVendaDeDiasDeFerias(salarioMensal, diasAVender);

            // Assert
            assert.equal(valorAReceber, 3000);   
        });

        it('Validar que um erro é lançado quando informo 0 dias a vender', function() {
            // Arrange
            const salarioMensal = 3000;
            const diasAVender = 0;

            // Act & Assert
            assert.throws( 
                function() { calcularValorDaVendaDeDiasDeFerias(salarioMensal, diasAVender); }, 
                { message: 'Dias devem estar entre 1 e 30.' } 
            );
        });

        it('Validar que um erro é lançado quando informo 31 dias a vender', function() {
            // Arrange
            const salarioMensal = 3000;
            const diasAVender = 31;

            // Act & Assert
            assert.throws( 
                function() { calcularValorDaVendaDeDiasDeFerias(salarioMensal, diasAVender); }, 
                { message: 'Dias devem estar entre 1 e 30.' } 
            );
        });
    });
});