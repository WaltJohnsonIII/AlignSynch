// Role-based access control types for quiz platform

export type UserRole =
  | "super_admin" // Platform admin - can do everything
  | "org_admin" // Organization admin - can manage org users and quizzes
  | "quiz_creator" // Can create and manage quizzes
  | "quiz_participant"; // Can only take quizzes

export type QuizPermission =
  | "create_quiz"
  | "edit_quiz"
  | "delete_quiz"
  | "publish_quiz"
  | "view_quiz_analytics"
  | "manage_quiz_users"
  | "take_quiz"
  | "view_quiz_results";

export type OrganizationPermission =
  | "manage_organization"
  | "manage_organization_users"
  | "view_organization_analytics"
  | "manage_organization_quizzes";

export interface RolePermissions {
  role: UserRole;
  quizPermissions: QuizPermission[];
  organizationPermissions: OrganizationPermission[];
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  super_admin: {
    role: "super_admin",
    quizPermissions: [
      "create_quiz",
      "edit_quiz",
      "delete_quiz",
      "publish_quiz",
      "view_quiz_analytics",
      "manage_quiz_users",
      "take_quiz",
      "view_quiz_results",
    ],
    organizationPermissions: [
      "manage_organization",
      "manage_organization_users",
      "view_organization_analytics",
      "manage_organization_quizzes",
    ],
  },
  org_admin: {
    role: "org_admin",
    quizPermissions: [
      "create_quiz",
      "edit_quiz",
      "delete_quiz",
      "publish_quiz",
      "view_quiz_analytics",
      "manage_quiz_users",
      "take_quiz",
      "view_quiz_results",
    ],
    organizationPermissions: [
      "manage_organization_users",
      "view_organization_analytics",
      "manage_organization_quizzes",
    ],
  },
  quiz_creator: {
    role: "quiz_creator",
    quizPermissions: [
      "create_quiz",
      "edit_quiz",
      "publish_quiz",
      "view_quiz_analytics",
      "take_quiz",
      "view_quiz_results",
    ],
    organizationPermissions: [],
  },
  quiz_participant: {
    role: "quiz_participant",
    quizPermissions: ["take_quiz", "view_quiz_results"],
    organizationPermissions: [],
  },
};

export interface UserAccessContext {
  userId: string;
  organizationId?: string;
  role: UserRole;
  permissions: {
    quiz: QuizPermission[];
    organization: OrganizationPermission[];
  };
}

// Helper functions for access control
export class AccessControl {
  static hasQuizPermission(
    userRole: UserRole,
    permission: QuizPermission
  ): boolean {
    return ROLE_PERMISSIONS[userRole].quizPermissions.includes(permission);
  }

  static hasOrganizationPermission(
    userRole: UserRole,
    permission: OrganizationPermission
  ): boolean {
    return ROLE_PERMISSIONS[userRole].organizationPermissions.includes(
      permission
    );
  }

  static canAccessQuiz(
    userRole: UserRole,
    action: "create" | "edit" | "delete" | "publish" | "view" | "take"
  ): boolean {
    switch (action) {
      case "create":
        return AccessControl.hasQuizPermission(userRole, "create_quiz");
      case "edit":
        return AccessControl.hasQuizPermission(userRole, "edit_quiz");
      case "delete":
        return AccessControl.hasQuizPermission(userRole, "delete_quiz");
      case "publish":
        return AccessControl.hasQuizPermission(userRole, "publish_quiz");
      case "view":
        return AccessControl.hasQuizPermission(userRole, "view_quiz_analytics");
      case "take":
        return AccessControl.hasQuizPermission(userRole, "take_quiz");
      default:
        return false;
    }
  }

  static canManageOrganization(
    userRole: UserRole,
    action: "manage" | "users" | "analytics" | "quizzes"
  ): boolean {
    switch (action) {
      case "manage":
        return AccessControl.hasOrganizationPermission(
          userRole,
          "manage_organization"
        );
      case "users":
        return AccessControl.hasOrganizationPermission(
          userRole,
          "manage_organization_users"
        );
      case "analytics":
        return AccessControl.hasOrganizationPermission(
          userRole,
          "view_organization_analytics"
        );
      case "quizzes":
        return AccessControl.hasOrganizationPermission(
          userRole,
          "manage_organization_quizzes"
        );
      default:
        return false;
    }
  }
}
