// import db from '../db';

const basesRepository = {};

basesRepository.getOneByName = (name) => {
  return {
    id: 1
  };
  /*
  const sql = "SELECT * FROM bases WHERE name = ?";
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

export default basesRepository;
