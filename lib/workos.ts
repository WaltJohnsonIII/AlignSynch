import { WorkOS } from "@workos-inc/node";

// Allow build without WorkOS key for development
const workosKey = process.env.WORKOS_API_KEY || "sk_test_placeholder";
export const workos = new WorkOS(workosKey);

// Auth service for authentication flows
export class AuthService {
  /**
   * Generate SSO authorization URL
   */
  static async getAuthorizationUrl(data: {
    provider: string;
    organizationId?: string;
    redirectUri: string;
    state?: string;
  }) {
    return await workos.sso.getAuthorizationUrl({
      provider: data.provider,
      organizationId: data.organizationId,
      redirectUri: data.redirectUri,
      clientId: process.env.WORKOS_CLIENT_ID!,
      state: data.state,
    });
  }

  /**
   * Get user profile and token from SSO callback
   */
  static async getProfileAndToken(code: string) {
    return await workos.sso.getProfileAndToken({
      code,
      clientId: process.env.WORKOS_CLIENT_ID!,
    });
  }

  /**
   * Create user with custom attributes
   */
  static async createUser(data: {
    email: string;
    firstName?: string;
    lastName?: string;
    emailVerified?: boolean;
    password?: string;
    profilePictureUrl?: string;
    customAttributes?: Record<string, any>;
  }) {
    return await workos.userManagement.createUser(data);
  }

  /**
   * Update user with custom attributes
   */
  static async updateUser(
    userId: string,
    data: {
      firstName?: string;
      lastName?: string;
      emailVerified?: boolean;
      profilePictureUrl?: string;
      customAttributes?: Record<string, any>;
    }
  ) {
    return await workos.userManagement.updateUser(userId, data);
  }
}

// Organization management functions
export class OrganizationService {
  /**
   * Create a new organization for a company/team
   */
  static async createOrganization(data: {
    name: string;
    domains?: string[];
    allowProfilesOutsideOrganization?: boolean;
  }) {
    return await workos.organizations.createOrganization({
      name: data.name,
      domains: data.domains,
      allowProfilesOutsideOrganization:
        data.allowProfilesOutsideOrganization ?? false,
    });
  }

  /**
   * Get organization by ID
   */
  static async getOrganization(organizationId: string) {
    return await workos.organizations.getOrganization(organizationId);
  }

  /**
   * List organizations with pagination
   */
  static async listOrganizations(options?: {
    limit?: number;
    before?: string;
    after?: string;
  }) {
    return await workos.organizations.listOrganizations(options);
  }

  /**
   * Update organization
   */
  static async updateOrganization(
    organizationId: string,
    data: {
      name?: string;
      domains?: string[];
      allowProfilesOutsideOrganization?: boolean;
    }
  ) {
    return await workos.organizations.updateOrganization(organizationId, data);
  }

  /**
   * Delete organization
   */
  static async deleteOrganization(organizationId: string) {
    return await workos.organizations.deleteOrganization(organizationId);
  }

  /**
   * List organization members
   */
  static async listOrganizationMembers(
    organizationId: string,
    options?: {
      limit?: number;
      before?: string;
      after?: string;
    }
  ) {
    return await workos.organizations.listOrganizationMembers(
      organizationId,
      options
    );
  }

  /**
   * Create organization membership
   */
  static async createOrganizationMembership(data: {
    organizationId: string;
    userId: string;
  }) {
    return await workos.organizations.createOrganizationMembership(data);
  }

  /**
   * Delete organization membership
   */
  static async deleteOrganizationMembership(membershipId: string) {
    return await workos.organizations.deleteOrganizationMembership(
      membershipId
    );
  }
}

// User management functions
export class UserService {
  /**
   * Get user by ID
   */
  static async getUser(userId: string) {
    return await workos.userManagement.getUser(userId);
  }

  /**
   * List users with pagination
   */
  static async listUsers(options?: {
    limit?: number;
    before?: string;
    after?: string;
    email?: string;
  }) {
    return await workos.userManagement.listUsers(options);
  }

  /**
   * Update user
   */
  static async updateUser(
    userId: string,
    data: {
      firstName?: string;
      lastName?: string;
      emailVerified?: boolean;
      profilePictureUrl?: string;
    }
  ) {
    return await workos.userManagement.updateUser(userId, data);
  }

  /**
   * Delete user
   */
  static async deleteUser(userId: string) {
    return await workos.userManagement.deleteUser(userId);
  }

  /**
   * Create user (for bulk operations)
   */
  static async createUser(data: {
    email: string;
    firstName?: string;
    lastName?: string;
    emailVerified?: boolean;
    password?: string;
    profilePictureUrl?: string;
  }) {
    return await workos.userManagement.createUser(data);
  }
}
