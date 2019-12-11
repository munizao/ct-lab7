require('dotenv').config();

const request = require('supertest');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Attempt = require('../../lib/models/Attempt');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a attempt', () => {
    return request(app)
      .post('/api/v1/attempts')
      .send({
        recipeId: new ObjectId(),
        notes: 'Yum',
        rating: 10
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: expect.any(String),
          dateOfEvent: expect.any(String),
          notes: 'Yum',
          rating: 10,
          __v: 0
        });
      });
  });

  it('gets all attempts', async() => {
    const attempts = await Attempt.create([
      { notes: 'Yum', rating: 10 },
      { notes: 'Yuck', rating: 2 },
      { notes: 'Meh', rating: 5 }
    ]);

    return request(app)
      .get('/api/v1/attempts')
      .then(res => {
        attempts.forEach(attempt => {
          expect(res.body).toContainEqual({
            _id: attempt._id.toString(),
            name: attempt.name
          });
        });
      });
  });

  it('gets a attempt by id', async() => {
    const attempt = await Attempt.create({
      recipeId: new ObjectId(),
      notes: 'Yum',
      rating: 10
    });
    return request(app)
      .get(`/api/v1/attempts/${attempt._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: expect.any(String),
          dateOfEvent: expect.any(String),
          notes: 'Yum',
          rating: 10,
          __v: 0
        });
      });
  });

  it('updates a attempt by id', async() => {
    const attempt = await Attempt.create({
      recipeId: new ObjectId(),
      notes: 'Yum',
    });

    return request(app)
      .patch(`/api/v1/attempts/${attempt._id}`)
      .send({ rating: 10 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: expect.any(String),
          dateOfEvent: expect.any(String),
          notes: 'Yum',
          rating: 10,
          __v: 0
        });
      });
  });

  it('deletes a attempt by id', async() => {
    const attempt = await Attempt.create({
      recipeId: new ObjectId(),
      notes: 'Yum',
      rating: 10
    });

    await request(app)
      .delete(`/api/v1/attempts/${attempt._id}`, (req, res) => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: expect.any(String),
          dateOfEvent: expect.any(String),
          notes: 'Yum',
          rating: 10,
          __v: 0
        });
      });

    return request(app)
      .get(`/api/v1/attempts/${attempt._id}`, (req, res) => {
        expect(res.body).toBeFalsy;
      });
  });
});
