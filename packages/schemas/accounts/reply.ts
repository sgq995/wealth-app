import { Static } from '@sinclair/typebox';
import { HttpBadRequest, HttpNotFound } from '../commons/reply';
import { ComposeStatic, Created, NotFound, OK } from '../helpers/responses';
import { AccountModel, ArrayOfAccountModel } from './model';

export const AccountArrayOK = OK(ArrayOfAccountModel);

export type TAccountArrayOK = Static<typeof AccountArrayOK['200']>;

export const AccountCreated = Created(AccountModel);

export type TAccountCreated = Static<typeof AccountCreated['201']>;

export const AccountOK = OK(AccountModel);

export type TAccountOK = Static<typeof AccountOK['200']>;

export const AccountNotFound = NotFound();

export type TAccountNotFound = Static<typeof AccountNotFound['404']>;

export const AccountRecord = {
  ...AccountOK,
  ...AccountNotFound,
};

export type TAccountRecord = TAccountOK | TAccountNotFound;

export const FindAll = {
  ...AccountArrayOK,
  ...HttpBadRequest,
};

export type TFindAll = ComposeStatic<typeof FindAll>;

export const AddOne = {
  ...AccountCreated,
  ...HttpBadRequest,
};

export type TAddOne = ComposeStatic<typeof AddOne>;

export const FindOne = {
  ...AccountOK,
  ...HttpBadRequest,
  ...HttpNotFound,
};

export type TFindOne = ComposeStatic<typeof FindOne>;

export const UpdateOne = {
  ...AccountOK,
  ...HttpBadRequest,
  ...HttpNotFound,
};

export type TUpdateOne = ComposeStatic<typeof UpdateOne>;

export const RemoveOne = {
  ...AccountOK,
  ...HttpBadRequest,
  ...HttpNotFound,
};

export type TRemoveOne = ComposeStatic<typeof RemoveOne>;
