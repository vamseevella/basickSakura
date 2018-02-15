import {
  IRoutableLocals,
  Routable,
  Route,
  SakuraApi,
  SapiRoutableMixin
}                   from '@sakuraapi/core';
import {
  getRouteHandler
}                   from '@sakuraapi/core/lib/src/handlers';
import {ok}         from 'assert';
import {
  NextFunction,
  Request,
  Response
}                   from 'express';
import {
  FORBIDDEN,
  OK,
  SERVER_ERROR
}                   from '../lib/http-status';
import {User}       from '../models/user-model';
import {LogService} from '../services/log-service';

export {SakuraApi};

@Routable({
  baseUrl: 'users',
  model: User,
  suppressApi: false
})
export class ConfigApi extends SapiRoutableMixin() {

  @Route({
    method: 'get',
    path: ':uid'
  })
  async getHandler(req: Request, res: Response, next: NextFunction) {
    const id = req.params.uid;
    if (!id) {
      res
        .status(FORBIDDEN)
        .json({error: 'FORBIDDEN'});
      return next();
    }
    User.getById(id).then(user => {
      res.json(user);
      return next();
    }).catch(err => {
      res.json(err);
      return next();
    });
  }

  async configHandler(req: Request, res: Response): Promise<void> {
    const locals = res.locals as IRoutableLocals;

    try {
      locals
        .send(OK, {
          server: 'sdsdsds',
          serverUp: true
        });
    } catch (err) {
      locals
        .send(SERVER_ERROR, {
          error: 'SERVER_ERROR'
        });
    }
  }
}
