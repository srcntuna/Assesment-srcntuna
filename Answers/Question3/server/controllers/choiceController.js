const db = require('../models/ChoicesModel.js');

const choiceController = {};

choiceController.postChoices = async (req, res, next) => {
  const { choices } = req.body;
  const [choiceA, choiceB, choiceC] = choices;

  console.log(choices);

  console.log('server choices', choices);

  if (!choices.join(' ').includes('calculus')) return next(err);

  const q = 'INSERT INTO Messages (choiceA,choiceB, choiceC) VALUES ($1,$2,$3)';

  await db.query(q, [choiceA, choiceB, choiceC], (err, result) => {
    if (err) {
      return next(err);
    }
    res.locals.password = password;
    return next();
  });
};

module.exports = choiceController;
