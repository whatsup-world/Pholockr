'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        message: "This is my dog"
      },
      {
        userId: 2,
        imageId: 1,
        message: "I like your dog!"
      },
      {
        userId: 3,
        imageId: 1,
        message: "It's cute!"
      },
      {
        userId: 1,
        imageId: 4,
        message: "Is this your dog?"
      },
      {
        userId: 2,
        imageId: 4,
        message: "Yes, it's cute right?"
      },
      {
        userId: 3,
        imageId: 4,
        message: "OMG, it's so cute!"
      },
      {
        userId: 3,
        imageId: 4,
        message: "How old is he?"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Comments', null, {});
  }
};
