/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface TruststoreAttestation {
  index?: string;
  identifier?: string;
  identifierType?: string;

  /** @format uint64 */
  rating?: string;
  creator?: string;

  /** @format int64 */
  last_updated_at_height?: string;
}

export interface TruststoreGlobal {
  /** @format uint64 */
  nextId?: string;
}

export interface TruststoreIdentifierType {
  index?: string;
  name?: string;
  description?: string;
}

export interface TruststoreMsgCreateAttestationResponse {
  idValue?: string;
}

export type TruststoreMsgUpdateAttestationResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface TruststoreParams {
  /** @format uint64 */
  attestationRewardlessUpdatePeriod?: string;
}

export interface TruststoreQueryAllAttestationResponse {
  attestation?: TruststoreAttestation[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TruststoreQueryAllIdentifierTypeResponse {
  identifierType?: TruststoreIdentifierType[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TruststoreQueryAttestationByCreatorIdentifierResponse {
  attestation?: TruststoreAttestation;
}

export interface TruststoreQueryAttestationByCreatorResponse {
  attestations?: TruststoreAttestation[];
}

export interface TruststoreQueryGetAttestationResponse {
  attestation?: TruststoreAttestation;
}

export interface TruststoreQueryGetGlobalResponse {
  Global?: TruststoreGlobal;
}

export interface TruststoreQueryGetIdentifierTypeResponse {
  identifierType?: TruststoreIdentifierType;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface TruststoreQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: TruststoreParams;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title truststore/attestation.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAttestationAll
   * @summary Queries a list of Attestation items.
   * @request GET:/blarsy/truststore/truststore/attestation
   */
  queryAttestationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TruststoreQueryAllAttestationResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/attestation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAttestation
   * @summary Queries a Attestation by index.
   * @request GET:/blarsy/truststore/truststore/attestation/{index}
   */
  queryAttestation = (index: string, params: RequestParams = {}) =>
    this.request<TruststoreQueryGetAttestationResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/attestation/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAttestationByCreator
   * @summary Queries a list of AttestationByCreator items.
   * @request GET:/blarsy/truststore/truststore/attestation_by_creator/{creator}
   */
  queryAttestationByCreator = (creator: string, params: RequestParams = {}) =>
    this.request<TruststoreQueryAttestationByCreatorResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/attestation_by_creator/${creator}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAttestationByCreatorIdentifier
   * @summary Queries a list of AttestationByCreatorIdentifier items.
   * @request GET:/blarsy/truststore/truststore/attestation_by_creator_identifier/{creator}/{identifierType}/{identifier}
   */
  queryAttestationByCreatorIdentifier = (
    creator: string,
    identifierType: string,
    identifier: string,
    params: RequestParams = {},
  ) =>
    this.request<TruststoreQueryAttestationByCreatorIdentifierResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/attestation_by_creator_identifier/${creator}/${identifierType}/${identifier}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGlobal
   * @summary Queries a Global by index.
   * @request GET:/blarsy/truststore/truststore/global
   */
  queryGlobal = (params: RequestParams = {}) =>
    this.request<TruststoreQueryGetGlobalResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/global`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIdentifierTypeAll
   * @summary Queries a list of IdentifierType items.
   * @request GET:/blarsy/truststore/truststore/identifier_type
   */
  queryIdentifierTypeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TruststoreQueryAllIdentifierTypeResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/identifier_type`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIdentifierType
   * @summary Queries a IdentifierType by index.
   * @request GET:/blarsy/truststore/truststore/identifier_type/{index}
   */
  queryIdentifierType = (index: string, params: RequestParams = {}) =>
    this.request<TruststoreQueryGetIdentifierTypeResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/identifier_type/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/blarsy/truststore/truststore/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<TruststoreQueryParamsResponse, RpcStatus>({
      path: `/blarsy/truststore/truststore/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
