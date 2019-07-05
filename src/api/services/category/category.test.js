const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcryptjs');
const { some, omitBy, isNil } = require('lodash');
const app = require('../../../app');
const Category = require('./category.model');

describe('Categories API', () => {
    let dotaCategory;
    let csgoCategory;

    beforeEach(async () => {
        dotaCategory = {
            name: 'Dota',
        };

        csgoCategory = {
            name: 'csgo',
        };

        await Category.deleteMany({});
        await Category.create(dotaCategory);
    });

    describe('POST /v1/categories', () => {
        it('should create a new user when request is ok', () => {
            return request(app)
                .post('/v1/categories')
                // .set('Authorization', `Bearer ${adminAccessToken}`)
                .send(csgoCategory)
                .expect(httpStatus.CREATED)
                .then((res) => {
                    expect(res.body).to.include(csgoCategory);
                });
        });
    });
});
