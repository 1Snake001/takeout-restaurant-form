import ordersRepository from "./ordersRepository";
import basesRepository from "../bases/basesRepository";
import toppingsRepository from "../toppings/toppingsRepository";
import Status from "../Status";

const ordersController = {};

ordersController.get = async (req, res) => {
  const orders = await ordersRepository.getAll();
  res.json(orders);
};

ordersController.getOne = async (req, res) => {
  const order = await ordersRepository.getOne(req.params.id);
  console.log(order);
  res.json(order);
};

ordersController.create = async (req, res) => {
  const order = req.body;

  if (!(order.name && order.address && order.base && order.topping)) {
    return res.status(400).json({ result: 'error', error: `Missing required field` });
  }

  const {id: baseId} = await basesRepository.getOneByName(req.body.base);
  const {id: toppingId} = await toppingsRepository.getOneByName(req.body.topping);
  const createParams = {
    name: req.body.name,
    address: req.body.address,
    baseId,
    toppingId,
    statusId: Status.IN_PROGRESS
  };
  const orderId = await ordersRepository.create(createParams);
  const {id, name, address, base, topping, status} = await ordersRepository.getOne(orderId);
  res.json({
    id,
    name,
    address,
    base,
    topping,
    status
  });
};

export default ordersController;
