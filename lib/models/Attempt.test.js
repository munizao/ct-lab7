const mongoose = require('mongoose');
const Attempt = require('./Attempt');

describe('Attempt model', () => {

  it('has recipeId, notes, and rating fields', () => {
    const attempt = new Attempt({
      recipeId: new mongoose.Types.ObjectId(),
      notes: 'Yum',
      rating: 10
    });
    expect(attempt.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      dateOfEvent: expect.any(Date),
      recipeId: expect.any(mongoose.Types.ObjectId),
      notes: 'Yum',
      rating: 10
    });
  });
});
