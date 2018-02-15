import {
  Db,
  IDbGetParams,
  IFromDbOptions,
  Json,
  Model,
  SakuraApi,
  SapiModelMixin
}            from '@sakuraapi/core';
import {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  Db as MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult
}            from 'mongodb';
import {dbs} from '../config/bootstrap/db';

export {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult,
  IDbGetParams,
  IFromDbOptions,
  SakuraApi
};

export class Address {
  static fromJson(json: any) {
    json = json || {};
    const address = new Address();
    address.address1 = json.address1;
    address.address2 = json.address2;
    address.city = json.city;
    address.country = json.country;
    address.state = json.state;
    address.zip = json.zip;
    return address;
  }

  @Db('addr1') @Json()
  address1: string;

  @Db('addr2') @Json()
  address2: string;

  @Db('cty') @Json()
  city: string;

  @Db() @Json()
  country: string;

  @Db('st') @Json()
  state: string;

  @Db('zip') @Json()
  zip: string;

}

@Model({
  dbConfig: dbs.user
})
export class User extends SapiModelMixin() {
  // @Db({field: 'address', model: Address}) @Json()
  // mailingAddress = new Address();
  //
  // @Db() @Json()
  // domain = 'default';

  // @Db({field: 'mdonor'}) @Json()
  // majorDonor = false;

  @Db('email') @Json()
  email: string;

  @Db('emailVerified') @Json()
  emailVerified: boolean;

  // @Db({field: 'emailVerified'}) @Json({field: 'emailVerified'})
  // emailVerificationKey: string;

  @Db('firstName') @Json()
  firstName: string;

  // @Db() @Json()
  // lastLogin: Date;

  @Db('lastName') @Json()
  lastName: string;

  @Db('password') @Json()
  password: string;

  // @Db({field: 'pwHash'}) @Json()
  // passwordResetHash: string;

  // @Db() @Json()
  // passwordStrength: number;

  @Db('phone') @Json()
  phone: string;

  // @Db('sfid') @Json()
  // salesForceId: string = null;
  //
  // @Db('cid') @Json()
  // stripeCustomerId: string = null;
}
