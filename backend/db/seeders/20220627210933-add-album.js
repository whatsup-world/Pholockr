'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Albums', [
      {
        title: 'default album',
        userId: 1
      },
      {
        title: 'a new album',
        userId: 1
      },
      {
        title: 'demo-album',
        userId: 1
      },
      {
        title: 'default album',
        userId: 2
      },
      {
        title: 'default album2',
        userId: 2
      },
      {
        title: 'the best images',
        userId: 2
      },
      {
        title: 'default album',
        userId: 3
      },
      {
        title: 'dogs',
        userId: 3
      },
      {
        title: 'cats',
        userId: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
