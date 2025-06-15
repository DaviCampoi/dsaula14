module.exports = {
  up: async (queryInterface, Sequelize) => {
    const alunos = await queryInterface.sequelize.query(`SELECT id FROM Alunos;`);
    const materias = await queryInterface.sequelize.query(`SELECT id FROM Materias;`);

    const alunoList = alunos[0];
    const materiaList = materias[0];
    const relacionamentos = [];

    for (const aluno of alunoList) {
      for (const materia of materiaList) {
        relacionamentos.push({
          alunoId: aluno.id,
          materiaId: materia.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('AlunoMaterias', relacionamentos);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AlunoMaterias', null, {});
  }
};
