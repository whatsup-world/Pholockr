'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        comment: "This is my dog"
      },
      {
        userId: 2,
        imageId: 1,
        comment: "I like your dog!"
      },
      {
        userId: 3,
        imageId: 1,
        comment: "It's cute!"
      },
      {
        userId: 1,
        imageId: 4,
        comment: "Is this your dog?"
      },
      {
        userId: 2,
        imageId: 4,
        comment: "Yes, it's cute right?"
      },
      {
        userId: 3,
        imageId: 4,
        comment: "OMG, it's so cute!"
      },
      {
        userId: 3,
        imageId: 4,
        comment: "How old is he?"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Comments', null, {});
  }
};
