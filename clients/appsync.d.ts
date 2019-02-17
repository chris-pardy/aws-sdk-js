import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {BoundInput} from '../lib/service';
import {InputParams} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AppSync<Params extends AppSync.Types.ClientParams = {}> extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppSync.Types.ClientConfiguration<Params>)
  config: Config & AppSync.Types.ClientConfiguration<Params>;
  /**
   * Creates a unique key that you can distribute to clients who are executing your API.
   */
  createApiKey(params: BoundInput<AppSync.Types.CreateApiKeyRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateApiKeyResponse) => void): Request<AppSync.Types.CreateApiKeyResponse, AWSError>;
  /**
   * Creates a unique key that you can distribute to clients who are executing your API.
   */
  createApiKey(callback?: (err: AWSError, data: AppSync.Types.CreateApiKeyResponse) => void): Request<AppSync.Types.CreateApiKeyResponse, AWSError>;
  /**
   * Creates a DataSource object.
   */
  createDataSource(params: BoundInput<AppSync.Types.CreateDataSourceRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateDataSourceResponse) => void): Request<AppSync.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a DataSource object.
   */
  createDataSource(callback?: (err: AWSError, data: AppSync.Types.CreateDataSourceResponse) => void): Request<AppSync.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a Function object. A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
   */
  createFunction(params: BoundInput<AppSync.Types.CreateFunctionRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateFunctionResponse) => void): Request<AppSync.Types.CreateFunctionResponse, AWSError>;
  /**
   * Creates a Function object. A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
   */
  createFunction(callback?: (err: AWSError, data: AppSync.Types.CreateFunctionResponse) => void): Request<AppSync.Types.CreateFunctionResponse, AWSError>;
  /**
   * Creates a GraphqlApi object.
   */
  createGraphqlApi(params: BoundInput<AppSync.Types.CreateGraphqlApiRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateGraphqlApiResponse) => void): Request<AppSync.Types.CreateGraphqlApiResponse, AWSError>;
  /**
   * Creates a GraphqlApi object.
   */
  createGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.CreateGraphqlApiResponse) => void): Request<AppSync.Types.CreateGraphqlApiResponse, AWSError>;
  /**
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.
   */
  createResolver(params: BoundInput<AppSync.Types.CreateResolverRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateResolverResponse) => void): Request<AppSync.Types.CreateResolverResponse, AWSError>;
  /**
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.
   */
  createResolver(callback?: (err: AWSError, data: AppSync.Types.CreateResolverResponse) => void): Request<AppSync.Types.CreateResolverResponse, AWSError>;
  /**
   * Creates a Type object.
   */
  createType(params: BoundInput<AppSync.Types.CreateTypeRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.CreateTypeResponse) => void): Request<AppSync.Types.CreateTypeResponse, AWSError>;
  /**
   * Creates a Type object.
   */
  createType(callback?: (err: AWSError, data: AppSync.Types.CreateTypeResponse) => void): Request<AppSync.Types.CreateTypeResponse, AWSError>;
  /**
   * Deletes an API key.
   */
  deleteApiKey(params: BoundInput<AppSync.Types.DeleteApiKeyRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteApiKeyResponse) => void): Request<AppSync.Types.DeleteApiKeyResponse, AWSError>;
  /**
   * Deletes an API key.
   */
  deleteApiKey(callback?: (err: AWSError, data: AppSync.Types.DeleteApiKeyResponse) => void): Request<AppSync.Types.DeleteApiKeyResponse, AWSError>;
  /**
   * Deletes a DataSource object.
   */
  deleteDataSource(params: BoundInput<AppSync.Types.DeleteDataSourceRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteDataSourceResponse) => void): Request<AppSync.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a DataSource object.
   */
  deleteDataSource(callback?: (err: AWSError, data: AppSync.Types.DeleteDataSourceResponse) => void): Request<AppSync.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a Function.
   */
  deleteFunction(params: BoundInput<AppSync.Types.DeleteFunctionRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteFunctionResponse) => void): Request<AppSync.Types.DeleteFunctionResponse, AWSError>;
  /**
   * Deletes a Function.
   */
  deleteFunction(callback?: (err: AWSError, data: AppSync.Types.DeleteFunctionResponse) => void): Request<AppSync.Types.DeleteFunctionResponse, AWSError>;
  /**
   * Deletes a GraphqlApi object.
   */
  deleteGraphqlApi(params: BoundInput<AppSync.Types.DeleteGraphqlApiRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteGraphqlApiResponse) => void): Request<AppSync.Types.DeleteGraphqlApiResponse, AWSError>;
  /**
   * Deletes a GraphqlApi object.
   */
  deleteGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.DeleteGraphqlApiResponse) => void): Request<AppSync.Types.DeleteGraphqlApiResponse, AWSError>;
  /**
   * Deletes a Resolver object.
   */
  deleteResolver(params: BoundInput<AppSync.Types.DeleteResolverRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteResolverResponse) => void): Request<AppSync.Types.DeleteResolverResponse, AWSError>;
  /**
   * Deletes a Resolver object.
   */
  deleteResolver(callback?: (err: AWSError, data: AppSync.Types.DeleteResolverResponse) => void): Request<AppSync.Types.DeleteResolverResponse, AWSError>;
  /**
   * Deletes a Type object.
   */
  deleteType(params: BoundInput<AppSync.Types.DeleteTypeRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.DeleteTypeResponse) => void): Request<AppSync.Types.DeleteTypeResponse, AWSError>;
  /**
   * Deletes a Type object.
   */
  deleteType(callback?: (err: AWSError, data: AppSync.Types.DeleteTypeResponse) => void): Request<AppSync.Types.DeleteTypeResponse, AWSError>;
  /**
   * Retrieves a DataSource object.
   */
  getDataSource(params: BoundInput<AppSync.Types.GetDataSourceRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetDataSourceResponse) => void): Request<AppSync.Types.GetDataSourceResponse, AWSError>;
  /**
   * Retrieves a DataSource object.
   */
  getDataSource(callback?: (err: AWSError, data: AppSync.Types.GetDataSourceResponse) => void): Request<AppSync.Types.GetDataSourceResponse, AWSError>;
  /**
   * Get a Function.
   */
  getFunction(params: BoundInput<AppSync.Types.GetFunctionRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetFunctionResponse) => void): Request<AppSync.Types.GetFunctionResponse, AWSError>;
  /**
   * Get a Function.
   */
  getFunction(callback?: (err: AWSError, data: AppSync.Types.GetFunctionResponse) => void): Request<AppSync.Types.GetFunctionResponse, AWSError>;
  /**
   * Retrieves a GraphqlApi object.
   */
  getGraphqlApi(params: BoundInput<AppSync.Types.GetGraphqlApiRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetGraphqlApiResponse) => void): Request<AppSync.Types.GetGraphqlApiResponse, AWSError>;
  /**
   * Retrieves a GraphqlApi object.
   */
  getGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.GetGraphqlApiResponse) => void): Request<AppSync.Types.GetGraphqlApiResponse, AWSError>;
  /**
   * Retrieves the introspection schema for a GraphQL API.
   */
  getIntrospectionSchema(params: BoundInput<AppSync.Types.GetIntrospectionSchemaRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetIntrospectionSchemaResponse) => void): Request<AppSync.Types.GetIntrospectionSchemaResponse, AWSError>;
  /**
   * Retrieves the introspection schema for a GraphQL API.
   */
  getIntrospectionSchema(callback?: (err: AWSError, data: AppSync.Types.GetIntrospectionSchemaResponse) => void): Request<AppSync.Types.GetIntrospectionSchemaResponse, AWSError>;
  /**
   * Retrieves a Resolver object.
   */
  getResolver(params: BoundInput<AppSync.Types.GetResolverRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetResolverResponse) => void): Request<AppSync.Types.GetResolverResponse, AWSError>;
  /**
   * Retrieves a Resolver object.
   */
  getResolver(callback?: (err: AWSError, data: AppSync.Types.GetResolverResponse) => void): Request<AppSync.Types.GetResolverResponse, AWSError>;
  /**
   * Retrieves the current status of a schema creation operation.
   */
  getSchemaCreationStatus(params: BoundInput<AppSync.Types.GetSchemaCreationStatusRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetSchemaCreationStatusResponse) => void): Request<AppSync.Types.GetSchemaCreationStatusResponse, AWSError>;
  /**
   * Retrieves the current status of a schema creation operation.
   */
  getSchemaCreationStatus(callback?: (err: AWSError, data: AppSync.Types.GetSchemaCreationStatusResponse) => void): Request<AppSync.Types.GetSchemaCreationStatusResponse, AWSError>;
  /**
   * Retrieves a Type object.
   */
  getType(params: BoundInput<AppSync.Types.GetTypeRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.GetTypeResponse) => void): Request<AppSync.Types.GetTypeResponse, AWSError>;
  /**
   * Retrieves a Type object.
   */
  getType(callback?: (err: AWSError, data: AppSync.Types.GetTypeResponse) => void): Request<AppSync.Types.GetTypeResponse, AWSError>;
  /**
   * Lists the API keys for a given API.  API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted. 
   */
  listApiKeys(params: BoundInput<AppSync.Types.ListApiKeysRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListApiKeysResponse) => void): Request<AppSync.Types.ListApiKeysResponse, AWSError>;
  /**
   * Lists the API keys for a given API.  API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted. 
   */
  listApiKeys(callback?: (err: AWSError, data: AppSync.Types.ListApiKeysResponse) => void): Request<AppSync.Types.ListApiKeysResponse, AWSError>;
  /**
   * Lists the data sources for a given API.
   */
  listDataSources(params: BoundInput<AppSync.Types.ListDataSourcesRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListDataSourcesResponse) => void): Request<AppSync.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the data sources for a given API.
   */
  listDataSources(callback?: (err: AWSError, data: AppSync.Types.ListDataSourcesResponse) => void): Request<AppSync.Types.ListDataSourcesResponse, AWSError>;
  /**
   * List multiple functions.
   */
  listFunctions(params: BoundInput<AppSync.Types.ListFunctionsRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListFunctionsResponse) => void): Request<AppSync.Types.ListFunctionsResponse, AWSError>;
  /**
   * List multiple functions.
   */
  listFunctions(callback?: (err: AWSError, data: AppSync.Types.ListFunctionsResponse) => void): Request<AppSync.Types.ListFunctionsResponse, AWSError>;
  /**
   * Lists your GraphQL APIs.
   */
  listGraphqlApis(params: BoundInput<AppSync.Types.ListGraphqlApisRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListGraphqlApisResponse) => void): Request<AppSync.Types.ListGraphqlApisResponse, AWSError>;
  /**
   * Lists your GraphQL APIs.
   */
  listGraphqlApis(callback?: (err: AWSError, data: AppSync.Types.ListGraphqlApisResponse) => void): Request<AppSync.Types.ListGraphqlApisResponse, AWSError>;
  /**
   * Lists the resolvers for a given API and type.
   */
  listResolvers(params: BoundInput<AppSync.Types.ListResolversRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListResolversResponse) => void): Request<AppSync.Types.ListResolversResponse, AWSError>;
  /**
   * Lists the resolvers for a given API and type.
   */
  listResolvers(callback?: (err: AWSError, data: AppSync.Types.ListResolversResponse) => void): Request<AppSync.Types.ListResolversResponse, AWSError>;
  /**
   * List the resolvers that are associated with a specific function.
   */
  listResolversByFunction(params: BoundInput<AppSync.Types.ListResolversByFunctionRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListResolversByFunctionResponse) => void): Request<AppSync.Types.ListResolversByFunctionResponse, AWSError>;
  /**
   * List the resolvers that are associated with a specific function.
   */
  listResolversByFunction(callback?: (err: AWSError, data: AppSync.Types.ListResolversByFunctionResponse) => void): Request<AppSync.Types.ListResolversByFunctionResponse, AWSError>;
  /**
   * Lists the types for a given API.
   */
  listTypes(params: BoundInput<AppSync.Types.ListTypesRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.ListTypesResponse) => void): Request<AppSync.Types.ListTypesResponse, AWSError>;
  /**
   * Lists the types for a given API.
   */
  listTypes(callback?: (err: AWSError, data: AppSync.Types.ListTypesResponse) => void): Request<AppSync.Types.ListTypesResponse, AWSError>;
  /**
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
   */
  startSchemaCreation(params: BoundInput<AppSync.Types.StartSchemaCreationRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.StartSchemaCreationResponse) => void): Request<AppSync.Types.StartSchemaCreationResponse, AWSError>;
  /**
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
   */
  startSchemaCreation(callback?: (err: AWSError, data: AppSync.Types.StartSchemaCreationResponse) => void): Request<AppSync.Types.StartSchemaCreationResponse, AWSError>;
  /**
   * Updates an API key.
   */
  updateApiKey(params: BoundInput<AppSync.Types.UpdateApiKeyRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateApiKeyResponse) => void): Request<AppSync.Types.UpdateApiKeyResponse, AWSError>;
  /**
   * Updates an API key.
   */
  updateApiKey(callback?: (err: AWSError, data: AppSync.Types.UpdateApiKeyResponse) => void): Request<AppSync.Types.UpdateApiKeyResponse, AWSError>;
  /**
   * Updates a DataSource object.
   */
  updateDataSource(params: BoundInput<AppSync.Types.UpdateDataSourceRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateDataSourceResponse) => void): Request<AppSync.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a DataSource object.
   */
  updateDataSource(callback?: (err: AWSError, data: AppSync.Types.UpdateDataSourceResponse) => void): Request<AppSync.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a Function object.
   */
  updateFunction(params: BoundInput<AppSync.Types.UpdateFunctionRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateFunctionResponse) => void): Request<AppSync.Types.UpdateFunctionResponse, AWSError>;
  /**
   * Updates a Function object.
   */
  updateFunction(callback?: (err: AWSError, data: AppSync.Types.UpdateFunctionResponse) => void): Request<AppSync.Types.UpdateFunctionResponse, AWSError>;
  /**
   * Updates a GraphqlApi object.
   */
  updateGraphqlApi(params: BoundInput<AppSync.Types.UpdateGraphqlApiRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateGraphqlApiResponse) => void): Request<AppSync.Types.UpdateGraphqlApiResponse, AWSError>;
  /**
   * Updates a GraphqlApi object.
   */
  updateGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.UpdateGraphqlApiResponse) => void): Request<AppSync.Types.UpdateGraphqlApiResponse, AWSError>;
  /**
   * Updates a Resolver object.
   */
  updateResolver(params: BoundInput<AppSync.Types.UpdateResolverRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateResolverResponse) => void): Request<AppSync.Types.UpdateResolverResponse, AWSError>;
  /**
   * Updates a Resolver object.
   */
  updateResolver(callback?: (err: AWSError, data: AppSync.Types.UpdateResolverResponse) => void): Request<AppSync.Types.UpdateResolverResponse, AWSError>;
  /**
   * Updates a Type object.
   */
  updateType(params: BoundInput<AppSync.Types.UpdateTypeRequest, keyof Params>, callback?: (err: AWSError, data: AppSync.Types.UpdateTypeResponse) => void): Request<AppSync.Types.UpdateTypeResponse, AWSError>;
  /**
   * Updates a Type object.
   */
  updateType(callback?: (err: AWSError, data: AppSync.Types.UpdateTypeResponse) => void): Request<AppSync.Types.UpdateTypeResponse, AWSError>;
}
declare namespace AppSync {
  export interface ApiKey {
    /**
     * The API key ID.
     */
    id?: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.
     */
    expires?: Long;
  }
  export type ApiKeys = ApiKey[];
  export type AuthenticationType = "API_KEY"|"AWS_IAM"|"AMAZON_COGNITO_USER_POOLS"|"OPENID_CONNECT"|string;
  export interface AuthorizationConfig {
    /**
     * The authorization type required by the HTTP endpoint.    AWS_IAM: The authorization type is Sigv4.  
     */
    authorizationType: AuthorizationType;
    /**
     * The AWS IAM settings.
     */
    awsIamConfig?: AwsIamConfig;
  }
  export type AuthorizationType = "AWS_IAM"|string;
  export interface AwsIamConfig {
    /**
     * The signing region for AWS IAM authorization.
     */
    signingRegion?: String;
    /**
     * The signing service name for AWS IAM authorization.
     */
    signingServiceName?: String;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export interface CreateApiKeyRequest {
    /**
     * The ID for your GraphQL API.
     */
    apiId: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
     */
    expires?: Long;
  }
  export interface CreateApiKeyResponse {
    /**
     * The API key.
     */
    apiKey?: ApiKey;
  }
  export interface CreateDataSourceRequest {
    /**
     * The API ID for the GraphQL API for the DataSource.
     */
    apiId: String;
    /**
     * A user-supplied name for the DataSource.
     */
    name: ResourceName;
    /**
     * A description of the DataSource.
     */
    description?: String;
    /**
     * The type of the DataSource.
     */
    type: DataSourceType;
    /**
     * The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source.
     */
    serviceRoleArn?: String;
    /**
     * Amazon DynamoDB settings.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * AWS Lambda settings.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * Amazon Elasticsearch Service settings.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
    /**
     * HTTP endpoint settings.
     */
    httpConfig?: HttpDataSourceConfig;
    /**
     * Relational database settings.
     */
    relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  }
  export interface CreateDataSourceResponse {
    /**
     * The DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface CreateFunctionRequest {
    /**
     * The GraphQL API ID.
     */
    apiId: String;
    /**
     * The Function name. The function name does not have to be unique.
     */
    name: ResourceName;
    /**
     * The Function description.
     */
    description?: String;
    /**
     * The Function DataSource name.
     */
    dataSourceName: ResourceName;
    /**
     * The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The Function response mapping template. 
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The version of the request mapping template. Currently the supported value is 2018-05-29. 
     */
    functionVersion: String;
  }
  export interface CreateFunctionResponse {
    /**
     * The Function object.
     */
    functionConfiguration?: FunctionConfiguration;
  }
  export interface CreateGraphqlApiRequest {
    /**
     * A user-supplied name for the GraphqlApi.
     */
    name: String;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: LogConfig;
    /**
     * The authentication type: API key, AWS IAM, or Amazon Cognito user pools.
     */
    authenticationType: AuthenticationType;
    /**
     * The Amazon Cognito user pool configuration.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The OpenID Connect configuration.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
  }
  export interface CreateGraphqlApiResponse {
    /**
     * The GraphqlApi.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface CreateResolverRequest {
    /**
     * The ID for the GraphQL API for which the resolver is being created.
     */
    apiId: String;
    /**
     * The name of the Type.
     */
    typeName: ResourceName;
    /**
     * The name of the field to attach the resolver to.
     */
    fieldName: ResourceName;
    /**
     * The name of the data source for which the resolver is being created.
     */
    dataSourceName?: ResourceName;
    /**
     * The mapping template to be used for requests. A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The mapping template to be used for responses from the data source.
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The resolver type.    UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.    PIPELINE: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of Function in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.  
     */
    kind?: ResolverKind;
    /**
     * The PipelineConfig.
     */
    pipelineConfig?: PipelineConfig;
  }
  export interface CreateResolverResponse {
    /**
     * The Resolver object.
     */
    resolver?: Resolver;
  }
  export interface CreateTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type definition, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.
     */
    definition: String;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface CreateTypeResponse {
    /**
     * The Type object.
     */
    type?: Type;
  }
  export interface DataSource {
    /**
     * The data source ARN.
     */
    dataSourceArn?: String;
    /**
     * The name of the data source.
     */
    name?: ResourceName;
    /**
     * The description of the data source.
     */
    description?: String;
    /**
     * The type of the data source.    AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table.    AMAZON_ELASTICSEARCH: The data source is an Amazon Elasticsearch Service domain.    AWS_LAMBDA: The data source is an AWS Lambda function.    NONE: There is no data source. This type is used when you wish to invoke a GraphQL operation without connecting to a data source, such as performing data transformation with resolvers or triggering a subscription to be invoked from a mutation.    HTTP: The data source is an HTTP endpoint.    RELATIONAL_DATABASE: The data source is a relational database.  
     */
    type?: DataSourceType;
    /**
     * The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source.
     */
    serviceRoleArn?: String;
    /**
     * Amazon DynamoDB settings.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * AWS Lambda settings.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * Amazon Elasticsearch Service settings.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
    /**
     * HTTP endpoint settings.
     */
    httpConfig?: HttpDataSourceConfig;
    /**
     * Relational database settings.
     */
    relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  }
  export type DataSourceType = "AWS_LAMBDA"|"AMAZON_DYNAMODB"|"AMAZON_ELASTICSEARCH"|"NONE"|"HTTP"|"RELATIONAL_DATABASE"|string;
  export type DataSources = DataSource[];
  export type DefaultAction = "ALLOW"|"DENY"|string;
  export interface DeleteApiKeyRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The ID for the API key.
     */
    id: String;
  }
  export interface DeleteApiKeyResponse {
  }
  export interface DeleteDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the data source.
     */
    name: ResourceName;
  }
  export interface DeleteDataSourceResponse {
  }
  export interface DeleteFunctionRequest {
    /**
     * The GraphQL API ID.
     */
    apiId: String;
    /**
     * The Function ID.
     */
    functionId: ResourceName;
  }
  export interface DeleteFunctionResponse {
  }
  export interface DeleteGraphqlApiRequest {
    /**
     * The API ID.
     */
    apiId: String;
  }
  export interface DeleteGraphqlApiResponse {
  }
  export interface DeleteResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the resolver type.
     */
    typeName: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName: ResourceName;
  }
  export interface DeleteResolverResponse {
  }
  export interface DeleteTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: ResourceName;
  }
  export interface DeleteTypeResponse {
  }
  export interface DynamodbDataSourceConfig {
    /**
     * The table name.
     */
    tableName: String;
    /**
     * The AWS Region.
     */
    awsRegion: String;
    /**
     * Set to TRUE to use Amazon Cognito credentials with this data source.
     */
    useCallerCredentials?: Boolean;
  }
  export interface ElasticsearchDataSourceConfig {
    /**
     * The endpoint.
     */
    endpoint: String;
    /**
     * The AWS Region.
     */
    awsRegion: String;
  }
  export type FieldLogLevel = "NONE"|"ERROR"|"ALL"|string;
  export interface FunctionConfiguration {
    /**
     * A unique ID representing the Function object.
     */
    functionId?: String;
    /**
     * The ARN of the Function object.
     */
    functionArn?: String;
    /**
     * The name of the Function object.
     */
    name?: ResourceName;
    /**
     * The Function description.
     */
    description?: String;
    /**
     * The name of the DataSource.
     */
    dataSourceName?: ResourceName;
    /**
     * The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
     */
    requestMappingTemplate?: MappingTemplate;
    /**
     * The Function response mapping template.
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The version of the request mapping template. Currently only the 2018-05-29 version of the template is supported.
     */
    functionVersion?: String;
  }
  export type Functions = FunctionConfiguration[];
  export type FunctionsIds = String[];
  export interface GetDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the data source.
     */
    name: ResourceName;
  }
  export interface GetDataSourceResponse {
    /**
     * The DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface GetFunctionRequest {
    /**
     * The GraphQL API ID.
     */
    apiId: String;
    /**
     * The Function ID.
     */
    functionId: ResourceName;
  }
  export interface GetFunctionResponse {
    /**
     * The Function object.
     */
    functionConfiguration?: FunctionConfiguration;
  }
  export interface GetGraphqlApiRequest {
    /**
     * The API ID for the GraphQL API.
     */
    apiId: String;
  }
  export interface GetGraphqlApiResponse {
    /**
     * The GraphqlApi object.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface GetIntrospectionSchemaRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The schema format: SDL or JSON.
     */
    format: OutputType;
  }
  export interface GetIntrospectionSchemaResponse {
    /**
     * The schema, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.
     */
    schema?: _Blob;
  }
  export interface GetResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The resolver type name.
     */
    typeName: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName: ResourceName;
  }
  export interface GetResolverResponse {
    /**
     * The Resolver object.
     */
    resolver?: Resolver;
  }
  export interface GetSchemaCreationStatusRequest {
    /**
     * The API ID.
     */
    apiId: String;
  }
  export interface GetSchemaCreationStatusResponse {
    /**
     * The current state of the schema (PROCESSING, ACTIVE, or DELETING). Once the schema is in the ACTIVE state, you can add data.
     */
    status?: SchemaStatus;
    /**
     * Detailed information about the status of the schema creation operation.
     */
    details?: String;
  }
  export interface GetTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: ResourceName;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface GetTypeResponse {
    /**
     * The Type object.
     */
    type?: Type;
  }
  export interface GraphqlApi {
    /**
     * The API name.
     */
    name?: ResourceName;
    /**
     * The API ID.
     */
    apiId?: String;
    /**
     * The authentication type.
     */
    authenticationType?: AuthenticationType;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: LogConfig;
    /**
     * The Amazon Cognito user pool configuration.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The OpenID Connect configuration.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
    /**
     * The ARN.
     */
    arn?: String;
    /**
     * The URIs.
     */
    uris?: MapOfStringToString;
  }
  export type GraphqlApis = GraphqlApi[];
  export interface HttpDataSourceConfig {
    /**
     * The HTTP URL endpoint. You can either specify the domain name or IP, and port combination, and the URL scheme must be HTTP or HTTPS. If the port is not specified, AWS AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.
     */
    endpoint?: String;
    /**
     * The authorization config in case the HTTP endpoint requires authorization.
     */
    authorizationConfig?: AuthorizationConfig;
  }
  export interface LambdaDataSourceConfig {
    /**
     * The ARN for the Lambda function.
     */
    lambdaFunctionArn: String;
  }
  export interface ListApiKeysRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListApiKeysResponse {
    /**
     * The ApiKey objects.
     */
    apiKeys?: ApiKeys;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListDataSourcesResponse {
    /**
     * The DataSource objects.
     */
    dataSources?: DataSources;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListFunctionsRequest {
    /**
     * The GraphQL API ID.
     */
    apiId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListFunctionsResponse {
    /**
     * A list of Function objects.
     */
    functions?: Functions;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListGraphqlApisRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListGraphqlApisResponse {
    /**
     * The GraphqlApi objects.
     */
    graphqlApis?: GraphqlApis;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListResolversByFunctionRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The Function ID.
     */
    functionId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListResolversByFunctionResponse {
    /**
     * The list of resolvers.
     */
    resolvers?: Resolvers;
    /**
     * An identifier that can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListResolversRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListResolversResponse {
    /**
     * The Resolver objects.
     */
    resolvers?: Resolvers;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTypesRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListTypesResponse {
    /**
     * The Type objects.
     */
    types?: TypeList;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface LogConfig {
    /**
     * The field logging level. Values can be NONE, ERROR, or ALL.     NONE: No field-level logs are captured.    ERROR: Logs the following information only for the fields that are in error:   The error section in the server response.   Field-level errors.   The generated request/response functions that got resolved for error fields.      ALL: The following information is logged for all fields in the query:   Field-level tracing information.   The generated request/response functions that got resolved for each field.    
     */
    fieldLogLevel: FieldLogLevel;
    /**
     * The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. 
     */
    cloudWatchLogsRoleArn: String;
  }
  export type Long = number;
  export type MapOfStringToString = {[key: string]: String};
  export type MappingTemplate = string;
  export type MaxResults = number;
  export interface OpenIDConnectConfig {
    /**
     * The issuer for the OpenID Connect configuration. The issuer returned by discovery must exactly match the value of iss in the ID token.
     */
    issuer: String;
    /**
     * The client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
     */
    clientId?: String;
    /**
     * The number of milliseconds a token is valid after being issued to a user.
     */
    iatTTL?: Long;
    /**
     * The number of milliseconds a token is valid after being authenticated.
     */
    authTTL?: Long;
  }
  export type OutputType = "SDL"|"JSON"|string;
  export type PaginationToken = string;
  export interface PipelineConfig {
    /**
     * A list of Function objects.
     */
    functions?: FunctionsIds;
  }
  export interface RdsHttpEndpointConfig {
    /**
     * AWS Region for RDS HTTP endpoint.
     */
    awsRegion?: String;
    /**
     * Amazon RDS cluster identifier.
     */
    dbClusterIdentifier?: String;
    /**
     * Logical database name.
     */
    databaseName?: String;
    /**
     * Logical schema name.
     */
    schema?: String;
    /**
     * AWS secret store ARN for database credentials.
     */
    awsSecretStoreArn?: String;
  }
  export interface RelationalDatabaseDataSourceConfig {
    /**
     * Source type for the relational database.    RDS_HTTP_ENDPOINT: The relational database source type is an Amazon RDS HTTP endpoint.  
     */
    relationalDatabaseSourceType?: RelationalDatabaseSourceType;
    /**
     * Amazon RDS HTTP endpoint settings.
     */
    rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
  }
  export type RelationalDatabaseSourceType = "RDS_HTTP_ENDPOINT"|string;
  export interface Resolver {
    /**
     * The resolver type name.
     */
    typeName?: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName?: ResourceName;
    /**
     * The resolver data source name.
     */
    dataSourceName?: ResourceName;
    /**
     * The resolver ARN.
     */
    resolverArn?: String;
    /**
     * The request mapping template.
     */
    requestMappingTemplate?: MappingTemplate;
    /**
     * The response mapping template.
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The resolver type.    UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.    PIPELINE: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of Function in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.  
     */
    kind?: ResolverKind;
    /**
     * The PipelineConfig.
     */
    pipelineConfig?: PipelineConfig;
  }
  export type ResolverKind = "UNIT"|"PIPELINE"|string;
  export type Resolvers = Resolver[];
  export type ResourceName = string;
  export type SchemaStatus = "PROCESSING"|"ACTIVE"|"DELETING"|string;
  export interface StartSchemaCreationRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The schema definition, in GraphQL schema language format.
     */
    definition: _Blob;
  }
  export interface StartSchemaCreationResponse {
    /**
     * The current state of the schema (PROCESSING, ACTIVE, or DELETING). When the schema is in the ACTIVE state, you can add data.
     */
    status?: SchemaStatus;
  }
  export type String = string;
  export interface Type {
    /**
     * The type name.
     */
    name?: ResourceName;
    /**
     * The type description.
     */
    description?: String;
    /**
     * The type ARN.
     */
    arn?: String;
    /**
     * The type definition.
     */
    definition?: String;
    /**
     * The type format: SDL or JSON.
     */
    format?: TypeDefinitionFormat;
  }
  export type TypeDefinitionFormat = "SDL"|"JSON"|string;
  export type TypeList = Type[];
  export interface UpdateApiKeyRequest {
    /**
     * The ID for the GraphQL API.
     */
    apiId: String;
    /**
     * The API key ID.
     */
    id: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
     */
    expires?: Long;
  }
  export interface UpdateApiKeyResponse {
    /**
     * The API key.
     */
    apiKey?: ApiKey;
  }
  export interface UpdateDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new name for the data source.
     */
    name: ResourceName;
    /**
     * The new description for the data source.
     */
    description?: String;
    /**
     * The new data source type.
     */
    type: DataSourceType;
    /**
     * The new service role ARN for the data source.
     */
    serviceRoleArn?: String;
    /**
     * The new Amazon DynamoDB configuration.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * The new AWS Lambda configuration.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * The new Elasticsearch Service configuration.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
    /**
     * The new HTTP endpoint configuration.
     */
    httpConfig?: HttpDataSourceConfig;
    /**
     * The new relational database configuration.
     */
    relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  }
  export interface UpdateDataSourceResponse {
    /**
     * The updated DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface UpdateFunctionRequest {
    /**
     * The GraphQL API ID.
     */
    apiId: String;
    /**
     * The Function name.
     */
    name: ResourceName;
    /**
     * The Function description.
     */
    description?: String;
    /**
     * The function ID.
     */
    functionId: ResourceName;
    /**
     * The Function DataSource name.
     */
    dataSourceName: ResourceName;
    /**
     * The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The Function request mapping template. 
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The version of the request mapping template. Currently the supported value is 2018-05-29. 
     */
    functionVersion: String;
  }
  export interface UpdateFunctionResponse {
    /**
     * The Function object.
     */
    functionConfiguration?: FunctionConfiguration;
  }
  export interface UpdateGraphqlApiRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new name for the GraphqlApi object.
     */
    name: String;
    /**
     * The Amazon CloudWatch Logs configuration for the GraphqlApi object.
     */
    logConfig?: LogConfig;
    /**
     * The new authentication type for the GraphqlApi object.
     */
    authenticationType?: AuthenticationType;
    /**
     * The new Amazon Cognito user pool configuration for the GraphqlApi object.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The OpenID Connect configuration for the GraphqlApi object.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
  }
  export interface UpdateGraphqlApiResponse {
    /**
     * The updated GraphqlApi object.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface UpdateResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new type name.
     */
    typeName: ResourceName;
    /**
     * The new field name.
     */
    fieldName: ResourceName;
    /**
     * The new data source name.
     */
    dataSourceName?: ResourceName;
    /**
     * The new request mapping template.
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The new response mapping template.
     */
    responseMappingTemplate?: MappingTemplate;
    /**
     * The resolver type.    UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.    PIPELINE: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of Function in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.  
     */
    kind?: ResolverKind;
    /**
     * The PipelineConfig.
     */
    pipelineConfig?: PipelineConfig;
  }
  export interface UpdateResolverResponse {
    /**
     * The updated Resolver object.
     */
    resolver?: Resolver;
  }
  export interface UpdateTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new type name.
     */
    typeName: ResourceName;
    /**
     * The new definition.
     */
    definition?: String;
    /**
     * The new type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface UpdateTypeResponse {
    /**
     * The updated Type object.
     */
    type?: Type;
  }
  export interface UserPoolConfig {
    /**
     * The user pool ID.
     */
    userPoolId: String;
    /**
     * The AWS Region in which the user pool was created.
     */
    awsRegion: String;
    /**
     * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
     */
    defaultAction: DefaultAction;
    /**
     * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
     */
    appIdClientRegex?: String;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientParams = InputParams<CreateApiKeyRequest & CreateDataSourceRequest & CreateFunctionRequest & CreateGraphqlApiRequest & CreateResolverRequest & CreateTypeRequest & DeleteApiKeyRequest & DeleteDataSourceRequest & DeleteFunctionRequest & DeleteGraphqlApiRequest & DeleteResolverRequest & DeleteTypeRequest & GetDataSourceRequest & GetFunctionRequest & GetGraphqlApiRequest & GetIntrospectionSchemaRequest & GetResolverRequest & GetSchemaCreationStatusRequest & GetTypeRequest & ListApiKeysRequest & ListDataSourcesRequest & ListFunctionsRequest & ListGraphqlApisRequest & ListResolversRequest & ListResolversByFunctionRequest & ListTypesRequest & StartSchemaCreationRequest & UpdateApiKeyRequest & UpdateDataSourceRequest & UpdateFunctionRequest & UpdateGraphqlApiRequest & UpdateResolverRequest & UpdateTypeRequest>;
  export type ClientConfiguration<Params extends ClientParams = {}> = ServiceConfigurationOptions<Params> & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppSync client.
   */
  export import Types = AppSync;
}
export = AppSync;
