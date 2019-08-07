import Joi from '@hapi/joi';
import createError from 'http-errors';

const errorHandler = (res, error) => {
  if (error.status !== 404) {
    console.error(error.stack);
  }
  res.status(error.status || 500).json({
    error: error.message,
  });
};

const get = async (req, res) => {
  try {
    res.json({status: 'ok'});
  } catch (error) {
    res.json({status: 'error'});
  }
};

const pageSchema = Joi.object().keys({
  page: Joi.number().integer().min(0).max(20).required(),
});

const page = async (req, res) => {
  try {
    const validateResult = Joi.validate(req.query, pageSchema);
    if (validateResult.error) {
      throw createError(422, validateResult.error.message);
    }
    res.json({page: Number(req.query.page)+1});
  } catch (error) {
    errorHandler(res, error);
  }
  ;
};
// https://github.com/hapijs/joi


module.exports = {
  get, page,
};
