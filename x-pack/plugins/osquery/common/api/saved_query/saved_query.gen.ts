/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Saved Queries Schema
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { FindSavedQueryRequestQuery } from './find_saved_query.gen';
import { DefaultSuccessResponse, SavedQueryId } from '../model/schema/common_attributes.gen';
import { CreateSavedQueryRequestBody } from './create_saved_query.gen';
import { UpdateSavedQueryRequestBody } from './update_saved_query.gen';

export type OsqueryCreateSavedQueryRequestBody = z.infer<typeof OsqueryCreateSavedQueryRequestBody>;
export const OsqueryCreateSavedQueryRequestBody = CreateSavedQueryRequestBody;
export type OsqueryCreateSavedQueryRequestBodyInput = z.input<
  typeof OsqueryCreateSavedQueryRequestBody
>;

export type OsqueryCreateSavedQueryResponse = z.infer<typeof OsqueryCreateSavedQueryResponse>;
export const OsqueryCreateSavedQueryResponse = DefaultSuccessResponse;

export type OsqueryDeleteSavedQueryRequestParams = z.infer<
  typeof OsqueryDeleteSavedQueryRequestParams
>;
export const OsqueryDeleteSavedQueryRequestParams = z.object({
  id: SavedQueryId,
});
export type OsqueryDeleteSavedQueryRequestParamsInput = z.input<
  typeof OsqueryDeleteSavedQueryRequestParams
>;

export type OsqueryDeleteSavedQueryResponse = z.infer<typeof OsqueryDeleteSavedQueryResponse>;
export const OsqueryDeleteSavedQueryResponse = DefaultSuccessResponse;
export type OsqueryFindSavedQueriesRequestQuery = z.infer<
  typeof OsqueryFindSavedQueriesRequestQuery
>;
export const OsqueryFindSavedQueriesRequestQuery = z.object({
  query: FindSavedQueryRequestQuery,
});
export type OsqueryFindSavedQueriesRequestQueryInput = z.input<
  typeof OsqueryFindSavedQueriesRequestQuery
>;

export type OsqueryFindSavedQueriesResponse = z.infer<typeof OsqueryFindSavedQueriesResponse>;
export const OsqueryFindSavedQueriesResponse = DefaultSuccessResponse;

export type OsqueryGetSavedQueryDetailsRequestParams = z.infer<
  typeof OsqueryGetSavedQueryDetailsRequestParams
>;
export const OsqueryGetSavedQueryDetailsRequestParams = z.object({
  id: SavedQueryId,
});
export type OsqueryGetSavedQueryDetailsRequestParamsInput = z.input<
  typeof OsqueryGetSavedQueryDetailsRequestParams
>;

export type OsqueryGetSavedQueryDetailsResponse = z.infer<
  typeof OsqueryGetSavedQueryDetailsResponse
>;
export const OsqueryGetSavedQueryDetailsResponse = DefaultSuccessResponse;

export type OsqueryUpdateSavedQueryRequestParams = z.infer<
  typeof OsqueryUpdateSavedQueryRequestParams
>;
export const OsqueryUpdateSavedQueryRequestParams = z.object({
  id: SavedQueryId,
});
export type OsqueryUpdateSavedQueryRequestParamsInput = z.input<
  typeof OsqueryUpdateSavedQueryRequestParams
>;

export type OsqueryUpdateSavedQueryRequestBody = z.infer<typeof OsqueryUpdateSavedQueryRequestBody>;
export const OsqueryUpdateSavedQueryRequestBody = UpdateSavedQueryRequestBody;
export type OsqueryUpdateSavedQueryRequestBodyInput = z.input<
  typeof OsqueryUpdateSavedQueryRequestBody
>;

export type OsqueryUpdateSavedQueryResponse = z.infer<typeof OsqueryUpdateSavedQueryResponse>;
export const OsqueryUpdateSavedQueryResponse = DefaultSuccessResponse;
