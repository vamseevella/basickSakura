import { IDbGetParams, IFromDbOptions, SakuraApi } from '@sakuraapi/core';
import { Collection, CollectionInsertOneOptions, CollectionOptions, Cursor, Db as MongoDb, DeleteWriteOpResultObject, InsertOneWriteOpResult, ObjectID, ReplaceOneOptions, UpdateWriteOpResult } from 'mongodb';
export { Collection, CollectionInsertOneOptions, CollectionOptions, Cursor, MongoDb, DeleteWriteOpResultObject, InsertOneWriteOpResult, ObjectID, ReplaceOneOptions, UpdateWriteOpResult, IDbGetParams, IFromDbOptions, SakuraApi };
export declare class Address {
    static fromJson(json: any): Address;
    address1: string;
    address2: string;
    city: string;
    country: string;
    state: string;
    zip: string;
}
declare const User_base: {
    new (...args: any[]): {
        _id: ObjectID;
        id: ObjectID;
        create: (options?: CollectionInsertOneOptions) => Promise<InsertOneWriteOpResult>;
        getCollection: () => Collection<any>;
        getDb: () => MongoDb;
        remove: (filter: any, options?: CollectionOptions) => Promise<DeleteWriteOpResultObject>;
        save: (set?: {
            [key: string]: any;
        }, options?: ReplaceOneOptions) => Promise<UpdateWriteOpResult>;
        toDb: (changeSet?: object) => any;
        toJson: (projection?: any, context?: string) => any;
        toJsonString: (replacer?: () => any, space?: string | number) => string;
    };
    fromDb: <T>(this: new () => T, json: any, options?: IFromDbOptions) => T;
    fromJson: <T>(this: new (...params: any[]) => T, json: object, context?: string) => T;
    fromJsonToDb: (json: any, context?: string) => any;
    fromDbArray: <T>(this: new () => T, jsons: object[], options?: IFromDbOptions) => T[];
    fromJsonArray: <T>(this: new () => T, jsons: object[]) => T[];
    get: <T>(this: new () => T, params: IDbGetParams) => Promise<T[]>;
    getById: <T>(this: new () => T, id: string | ObjectID, project?: any) => Promise<T>;
    getCollection: () => Collection<any>;
    getCursor: (filter: any, project?: any) => Cursor<any>;
    getCursorById: (id: any, project?: any) => Cursor<any>;
    getDb: () => MongoDb;
    getOne: <T>(this: new () => T, filter: any, project?: any) => Promise<T>;
    removeAll: (filter: any, options?: CollectionOptions) => Promise<DeleteWriteOpResultObject>;
    removeById: (id: ObjectID, options?: CollectionOptions) => Promise<DeleteWriteOpResultObject>;
    sapi: SakuraApi;
    sapiConfig?: any;
} & (new (...args: any[]) => {});
export declare class User extends User_base {
    email: string;
    emailVerified: boolean;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
}
