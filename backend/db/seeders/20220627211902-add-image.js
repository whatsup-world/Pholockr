'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        imageUrl: 'https://dougecouture.com/wp-content/uploads/2020/07/hkhhkhhkhkhkhkhk.jpg',
        albumId: 1
      },
      {
        userId: 1,
        imageUrl: 'https://images.hindustantimes.com/img/2022/03/12/550x309/parvovirus_thumb_1647089326234_1647089335606.jpg',
        albumId: 1
      },
      {
        userId: 1,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 2
      },
      {
        userId: 2,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 4
      },
      {
        userId: 2,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 4
      },
      {
        userId: 2,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 5
      },
      {
        userId: 3,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 7
      },
      {
        userId: 3,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 7
      },
      {
        userId: 3,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 8
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
