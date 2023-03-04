import db from '../db';

const ordersRepository = {};

ordersRepository.getAll = () => {
  const sql = `SELECT
            orders.id,
            orders.name,
            orders.address,
            bases.name AS base,
            toppings.name AS topping,
            status.name AS status
        FROM orders
        JOIN bases ON orders.base_id = bases.id
        JOIN toppings ON orders.topping_id = toppings.id
        JOIN status ON orders.status_id = status.id`;
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

ordersRepository.getOne = (id) => {
  /*
  const sql = `SELECT
          orders.*,
          bases.name AS base,
          toppings.name AS topping,
          status.name AS status
        FROM orders
        JOIN bases ON orders.base_id = bases.id
        JOIN toppings ON orders.topping_id = toppings.id
        JOIN status ON orders.status_id = status.id
        WHERE orders.id = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [id], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
   */
  return {
    id: 10,
    name: "Alma Ország",
    address: "Szabadság tér 10.",
    base: "white rice",
    topping: "chicken",
    status: "ordered"
  };
}

ordersRepository.create = ({name, address, baseId, toppingId, statusId}) => {
  /*
  const sql = "INSERT INTO orders(name, address, base_id, topping_id, status_id)" +
    "VALUES(?,?,?,?,?)"
  return new Promise((resolve, reject) => {
    db.run(sql, [name, address, baseId, toppingId, statusId], function (err) {
      if (err) {
        reject(err);
      }
      resolve(this.lastID);
    });
  });
   */
  return 10;
};

export default ordersRepository;
