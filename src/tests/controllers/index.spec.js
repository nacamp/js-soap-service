'use strict';
import 'chai/register-should';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import rewire from 'rewire';

const controller = rewire('../../controllers/index');
chai.use(chaiHttp);
// http://127.0.0.1:3000/v1/page?page=2
describe('controllers.index', () => {
  it('page', (done) => {
    chai.request(app).get('/v1/page?page=1').end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('page');
      res.body.should.have.property('page').equal(1 + 1);
      done();
    });
  });
  const errorHandler = controller.__get__('errorHandler');
  it('errorHandler', function() {
    const err = {status: 404, message: 'this is 400 error message'};
    const res = {
      data: {},
      status: function(_error) {
        return {
          json: (_error) => {
            this.data['error'] = err.message; // dummy simulation
          },
        };
      },
    };
    errorHandler(res, err);
    res.data.error.should.equal('this is 400 error message');
  });
});
