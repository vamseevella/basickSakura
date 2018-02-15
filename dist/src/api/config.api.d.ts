/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/core';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
declare const ConfigApi_base: {
    new (...args: any[]): {
        sapi?: SakuraApi;
        sapiConfig?: any;
    };
    getRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    getAllRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    putRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    postRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    deleteRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    sapi?: SakuraApi;
    sapiConfig?: any;
} & (new (...args: any[]) => {});
export declare class ConfigApi extends ConfigApi_base {
    getHandler(req: Request, res: Response, next: NextFunction): Promise<void>;
    configHandler(req: Request, res: Response): Promise<void>;
}
