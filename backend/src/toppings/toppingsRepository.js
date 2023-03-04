// import db from '../db';

const toppingsRepository = {};

toppingsRepository.getOneByName = (name) => {
  return {
    id: 1
  };
  /*
  const sql = "SELECT * FROM toppings WHERE name = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, [name], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });

   */
}

export default toppingsRepository;
