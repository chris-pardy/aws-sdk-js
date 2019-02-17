import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {BoundInput} from '../lib/service';
import {InputParams} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ResourceGroups<Params extends ResourceGroups.Types.ClientParams = {}> extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ResourceGroups.Types.ClientConfiguration<Params>)
  config: Config & ResourceGroups.Types.ClientConfiguration<Params>;
  /**
   * Creates a group with a specified name, description, and resource query.
   */
  createGroup(params: BoundInput<ResourceGroups.Types.CreateGroupInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.CreateGroupOutput) => void): Request<ResourceGroups.Types.CreateGroupOutput, AWSError>;
  /**
   * Creates a group with a specified name, description, and resource query.
   */
  createGroup(callback?: (err: AWSError, data: ResourceGroups.Types.CreateGroupOutput) => void): Request<ResourceGroups.Types.CreateGroupOutput, AWSError>;
  /**
   * Deletes a specified resource group. Deleting a resource group does not delete resources that are members of the group; it only deletes the group structure.
   */
  deleteGroup(params: BoundInput<ResourceGroups.Types.DeleteGroupInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.DeleteGroupOutput) => void): Request<ResourceGroups.Types.DeleteGroupOutput, AWSError>;
  /**
   * Deletes a specified resource group. Deleting a resource group does not delete resources that are members of the group; it only deletes the group structure.
   */
  deleteGroup(callback?: (err: AWSError, data: ResourceGroups.Types.DeleteGroupOutput) => void): Request<ResourceGroups.Types.DeleteGroupOutput, AWSError>;
  /**
   * Returns information about a specified resource group.
   */
  getGroup(params: BoundInput<ResourceGroups.Types.GetGroupInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupOutput) => void): Request<ResourceGroups.Types.GetGroupOutput, AWSError>;
  /**
   * Returns information about a specified resource group.
   */
  getGroup(callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupOutput) => void): Request<ResourceGroups.Types.GetGroupOutput, AWSError>;
  /**
   * Returns the resource query associated with the specified resource group.
   */
  getGroupQuery(params: BoundInput<ResourceGroups.Types.GetGroupQueryInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupQueryOutput) => void): Request<ResourceGroups.Types.GetGroupQueryOutput, AWSError>;
  /**
   * Returns the resource query associated with the specified resource group.
   */
  getGroupQuery(callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupQueryOutput) => void): Request<ResourceGroups.Types.GetGroupQueryOutput, AWSError>;
  /**
   * Returns a list of tags that are associated with a resource, specified by an ARN.
   */
  getTags(params: BoundInput<ResourceGroups.Types.GetTagsInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.GetTagsOutput) => void): Request<ResourceGroups.Types.GetTagsOutput, AWSError>;
  /**
   * Returns a list of tags that are associated with a resource, specified by an ARN.
   */
  getTags(callback?: (err: AWSError, data: ResourceGroups.Types.GetTagsOutput) => void): Request<ResourceGroups.Types.GetTagsOutput, AWSError>;
  /**
   * Returns a list of ARNs of resources that are members of a specified resource group.
   */
  listGroupResources(params: BoundInput<ResourceGroups.Types.ListGroupResourcesInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupResourcesOutput) => void): Request<ResourceGroups.Types.ListGroupResourcesOutput, AWSError>;
  /**
   * Returns a list of ARNs of resources that are members of a specified resource group.
   */
  listGroupResources(callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupResourcesOutput) => void): Request<ResourceGroups.Types.ListGroupResourcesOutput, AWSError>;
  /**
   * Returns a list of existing resource groups in your account.
   */
  listGroups(params: BoundInput<ResourceGroups.Types.ListGroupsInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupsOutput) => void): Request<ResourceGroups.Types.ListGroupsOutput, AWSError>;
  /**
   * Returns a list of existing resource groups in your account.
   */
  listGroups(callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupsOutput) => void): Request<ResourceGroups.Types.ListGroupsOutput, AWSError>;
  /**
   * Returns a list of AWS resource identifiers that matches a specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.
   */
  searchResources(params: BoundInput<ResourceGroups.Types.SearchResourcesInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.SearchResourcesOutput) => void): Request<ResourceGroups.Types.SearchResourcesOutput, AWSError>;
  /**
   * Returns a list of AWS resource identifiers that matches a specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.
   */
  searchResources(callback?: (err: AWSError, data: ResourceGroups.Types.SearchResourcesOutput) => void): Request<ResourceGroups.Types.SearchResourcesOutput, AWSError>;
  /**
   * Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
   */
  tag(params: BoundInput<ResourceGroups.Types.TagInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.TagOutput) => void): Request<ResourceGroups.Types.TagOutput, AWSError>;
  /**
   * Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
   */
  tag(callback?: (err: AWSError, data: ResourceGroups.Types.TagOutput) => void): Request<ResourceGroups.Types.TagOutput, AWSError>;
  /**
   * Deletes specified tags from a specified resource.
   */
  untag(params: BoundInput<ResourceGroups.Types.UntagInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.UntagOutput) => void): Request<ResourceGroups.Types.UntagOutput, AWSError>;
  /**
   * Deletes specified tags from a specified resource.
   */
  untag(callback?: (err: AWSError, data: ResourceGroups.Types.UntagOutput) => void): Request<ResourceGroups.Types.UntagOutput, AWSError>;
  /**
   * Updates an existing group with a new or changed description. You cannot update the name of a resource group.
   */
  updateGroup(params: BoundInput<ResourceGroups.Types.UpdateGroupInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupOutput) => void): Request<ResourceGroups.Types.UpdateGroupOutput, AWSError>;
  /**
   * Updates an existing group with a new or changed description. You cannot update the name of a resource group.
   */
  updateGroup(callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupOutput) => void): Request<ResourceGroups.Types.UpdateGroupOutput, AWSError>;
  /**
   * Updates the resource query of a group.
   */
  updateGroupQuery(params: BoundInput<ResourceGroups.Types.UpdateGroupQueryInput, keyof Params>, callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupQueryOutput) => void): Request<ResourceGroups.Types.UpdateGroupQueryOutput, AWSError>;
  /**
   * Updates the resource query of a group.
   */
  updateGroupQuery(callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupQueryOutput) => void): Request<ResourceGroups.Types.UpdateGroupQueryOutput, AWSError>;
}
declare namespace ResourceGroups {
  export interface CreateGroupInput {
    /**
     * The name of the group, which is the identifier of the group in other operations. A resource group name cannot be updated after it is created. A resource group name can have a maximum of 128 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with AWS or aws; these are reserved. A resource group name must be unique within your account.
     */
    Name: GroupName;
    /**
     * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
     */
    Description?: GroupDescription;
    /**
     * The resource query that determines which AWS resources are members of this group.
     */
    ResourceQuery: ResourceQuery;
    /**
     * The tags to add to the group. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags?: Tags;
  }
  export interface CreateGroupOutput {
    /**
     * A full description of the resource group after it is created.
     */
    Group?: Group;
    /**
     * The resource query associated with the group.
     */
    ResourceQuery?: ResourceQuery;
    /**
     * The tags associated with the group.
     */
    Tags?: Tags;
  }
  export interface DeleteGroupInput {
    /**
     * The name of the resource group to delete.
     */
    GroupName: GroupName;
  }
  export interface DeleteGroupOutput {
    /**
     * A full description of the deleted resource group.
     */
    Group?: Group;
  }
  export interface GetGroupInput {
    /**
     * The name of the resource group.
     */
    GroupName: GroupName;
  }
  export interface GetGroupOutput {
    /**
     * A full description of the resource group.
     */
    Group?: Group;
  }
  export interface GetGroupQueryInput {
    /**
     * The name of the resource group.
     */
    GroupName: GroupName;
  }
  export interface GetGroupQueryOutput {
    /**
     * The resource query associated with the specified group.
     */
    GroupQuery?: GroupQuery;
  }
  export interface GetTagsInput {
    /**
     * The ARN of the resource for which you want a list of tags. The resource must exist within the account you are using.
     */
    Arn: GroupArn;
  }
  export interface GetTagsOutput {
    /**
     * The ARN of the tagged resource.
     */
    Arn?: GroupArn;
    /**
     * The tags associated with the specified resource.
     */
    Tags?: Tags;
  }
  export interface Group {
    /**
     * The ARN of a resource group.
     */
    GroupArn: GroupArn;
    /**
     * The name of a resource group.
     */
    Name: GroupName;
    /**
     * The description of the resource group.
     */
    Description?: GroupDescription;
  }
  export type GroupArn = string;
  export type GroupDescription = string;
  export interface GroupFilter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    Name: GroupFilterName;
    /**
     * One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.
     */
    Values: GroupFilterValues;
  }
  export type GroupFilterList = GroupFilter[];
  export type GroupFilterName = "resource-type"|string;
  export type GroupFilterValue = string;
  export type GroupFilterValues = GroupFilterValue[];
  export interface GroupIdentifier {
    /**
     * The name of a resource group.
     */
    GroupName?: GroupName;
    /**
     * The ARN of a resource group.
     */
    GroupArn?: GroupArn;
  }
  export type GroupIdentifierList = GroupIdentifier[];
  export type GroupList = Group[];
  export type GroupName = string;
  export interface GroupQuery {
    /**
     * The name of a resource group that is associated with a specific resource query.
     */
    GroupName: GroupName;
    /**
     * The resource query which determines which AWS resources are members of the associated resource group.
     */
    ResourceQuery: ResourceQuery;
  }
  export interface ListGroupResourcesInput {
    /**
     * The name of the resource group.
     */
    GroupName: GroupName;
    /**
     * Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation.    resource-type - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.  
     */
    Filters?: ResourceFilterList;
    /**
     * The maximum number of group member ARNs that are returned in a single call by ListGroupResources, in paginated output. By default, this number is 50.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value that is returned in a paginated ListGroupResources request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupResourcesOutput {
    /**
     * The ARNs and resource types of resources that are members of the group that you specified.
     */
    ResourceIdentifiers?: ResourceIdentifierList;
    /**
     * The NextToken value to include in a subsequent ListGroupResources request, to get more results.
     */
    NextToken?: NextToken;
    /**
     * A list of QueryError objects. Each error is an object that contains ErrorCode and Message structures. Possible values for ErrorCode are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    QueryErrors?: QueryErrorList;
  }
  export interface ListGroupsInput {
    /**
     * Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.    resource-type - Filter groups by resource type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.  
     */
    Filters?: GroupFilterList;
    /**
     * The maximum number of resource group results that are returned by ListGroups in paginated output. By default, this number is 50.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value that is returned in a paginated ListGroups request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupsOutput {
    /**
     * A list of GroupIdentifier objects. Each identifier is an object that contains both the GroupName and the GroupArn.
     */
    GroupIdentifiers?: GroupIdentifierList;
    /**
     * A list of resource groups.
     */
    Groups?: GroupList;
    /**
     * The NextToken value to include in a subsequent ListGroups request, to get more results.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type Query = string;
  export interface QueryError {
    /**
     * Possible values are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    ErrorCode?: QueryErrorCode;
    /**
     * A message that explains the ErrorCode value. Messages might state that the specified CloudFormation stack does not exist (or no longer exists). For CLOUDFORMATION_STACK_INACTIVE, the message typically states that the CloudFormation stack has a status that is not (or no longer) active, such as CREATE_FAILED.
     */
    Message?: QueryErrorMessage;
  }
  export type QueryErrorCode = "CLOUDFORMATION_STACK_INACTIVE"|"CLOUDFORMATION_STACK_NOT_EXISTING"|string;
  export type QueryErrorList = QueryError[];
  export type QueryErrorMessage = string;
  export type QueryType = "TAG_FILTERS_1_0"|"CLOUDFORMATION_STACK_1_0"|string;
  export type ResourceArn = string;
  export interface ResourceFilter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    Name: ResourceFilterName;
    /**
     * One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.
     */
    Values: ResourceFilterValues;
  }
  export type ResourceFilterList = ResourceFilter[];
  export type ResourceFilterName = "resource-type"|string;
  export type ResourceFilterValue = string;
  export type ResourceFilterValues = ResourceFilterValue[];
  export interface ResourceIdentifier {
    /**
     * The ARN of a resource.
     */
    ResourceArn?: ResourceArn;
    /**
     * The resource type of a resource, such as AWS::EC2::Instance.
     */
    ResourceType?: ResourceType;
  }
  export type ResourceIdentifierList = ResourceIdentifier[];
  export interface ResourceQuery {
    /**
     * The type of the query. The valid values in this release are TAG_FILTERS_1_0 and CLOUDFORMATION_STACK_1_0.   TAG_FILTERS_1_0:  A JSON syntax that lets you specify a collection of simple tag filters for resource types and tags, as supported by the AWS Tagging API GetResources operation. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches any of the specified values. For example, consider the following sample query for resources that have two tags, Stage and Version, with two values each. ([{"Key":"Stage","Values":["Test","Deploy"]},{"Key":"Version","Values":["1","2"]}]) The results of this query might include the following.   An EC2 instance that has the following two tags: {"Key":"Stage","Values":["Deploy"]}, and {"Key":"Version","Values":["2"]}    An S3 bucket that has the following two tags: {"Key":"Stage","Values":["Test","Deploy"]}, and {"Key":"Version","Values":["1"]}   The query would not return the following results, however. The following EC2 instance does not have all tag keys specified in the filter, so it is rejected. The RDS database has all of the tag keys, but no values that match at least one of the specified tag key values in the filter.   An EC2 instance that has only the following tag: {"Key":"Stage","Values":["Deploy"]}.   An RDS database that has the following two tags: {"Key":"Stage","Values":["Archived"]}, and {"Key":"Version","Values":["4"]}      CLOUDFORMATION_STACK_1_0:  A JSON syntax that lets you specify a CloudFormation stack ARN.
     */
    Type: QueryType;
    /**
     * The query that defines a group or a search.
     */
    Query: Query;
  }
  export type ResourceType = string;
  export interface SearchResourcesInput {
    /**
     * The search query, using the same formats that are supported for resource group definition.
     */
    ResourceQuery: ResourceQuery;
    /**
     * The maximum number of group member ARNs returned by SearchResources in paginated output. By default, this number is 50.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value that is returned in a paginated SearchResources request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
     */
    NextToken?: NextToken;
  }
  export interface SearchResourcesOutput {
    /**
     * The ARNs and resource types of resources that are members of the group that you specified.
     */
    ResourceIdentifiers?: ResourceIdentifierList;
    /**
     * The NextToken value to include in a subsequent SearchResources request, to get more results.
     */
    NextToken?: NextToken;
    /**
     * A list of QueryError objects. Each error is an object that contains ErrorCode and Message structures. Possible values for ErrorCode are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    QueryErrors?: QueryErrorList;
  }
  export interface TagInput {
    /**
     * The ARN of the resource to which to add tags.
     */
    Arn: GroupArn;
    /**
     * The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags: Tags;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagOutput {
    /**
     * The ARN of the tagged resource.
     */
    Arn?: GroupArn;
    /**
     * The tags that have been added to the specified resource.
     */
    Tags?: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface UntagInput {
    /**
     * The ARN of the resource from which to remove tags.
     */
    Arn: GroupArn;
    /**
     * The keys of the tags to be removed.
     */
    Keys: TagKeyList;
  }
  export interface UntagOutput {
    /**
     * The ARN of the resource from which tags have been removed.
     */
    Arn?: GroupArn;
    /**
     * The keys of tags that have been removed.
     */
    Keys?: TagKeyList;
  }
  export interface UpdateGroupInput {
    /**
     * The name of the resource group for which you want to update its description.
     */
    GroupName: GroupName;
    /**
     * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
     */
    Description?: GroupDescription;
  }
  export interface UpdateGroupOutput {
    /**
     * The full description of the resource group after it has been updated.
     */
    Group?: Group;
  }
  export interface UpdateGroupQueryInput {
    /**
     * The name of the resource group for which you want to edit the query.
     */
    GroupName: GroupName;
    /**
     * The resource query that determines which AWS resources are members of the resource group.
     */
    ResourceQuery: ResourceQuery;
  }
  export interface UpdateGroupQueryOutput {
    /**
     * The resource query associated with the resource group after the update.
     */
    GroupQuery?: GroupQuery;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientParams = InputParams<CreateGroupInput & DeleteGroupInput & GetGroupInput & GetGroupQueryInput & GetTagsInput & ListGroupResourcesInput & ListGroupsInput & SearchResourcesInput & TagInput & UntagInput & UpdateGroupInput & UpdateGroupQueryInput>;
  export type ClientConfiguration<Params extends ClientParams = {}> = ServiceConfigurationOptions<Params> & ClientApiVersions;
  /**
   * Contains interfaces for use with the ResourceGroups client.
   */
  export import Types = ResourceGroups;
}
export = ResourceGroups;
