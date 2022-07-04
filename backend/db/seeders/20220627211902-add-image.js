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
        imageUrl: 'https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
        albumId: 1
      },
      {
        userId: 2,
        imageUrl: 'https://www.leparvet.net/wp-content/uploads/2018/06/iStock_000016792133_Small-TALL.jpg',
        albumId: 1
      },
      {
        userId: 2,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        albumId: 1
      },
      {
        userId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        albumId: 1
      },
      {
        userId: 3,
        imageUrl: 'https://pbs.twimg.com/media/EvKJqcIU4AEOw_A.jpg',
        albumId: 1
      },
      {
        userId: 3,
        imageUrl: 'https://img10.360buyimg.com/n1/jfs/t1/162741/39/20236/94640/608108adEc736ab64/7dd43842905c9867.jpg',
        albumId: 1
      },
      {
        userId: 3,
        imageUrl: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        albumId: 1
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
