import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  organizationId: uuid("organization_id").references(() => organizations.id),
  role: varchar("role", { length: 50 }).default("user").notNull(), // 'admin', 'creator', 'participant'

  // Custom attributes for quiz platform
  quizPreferences: jsonb("quiz_preferences").$type<{
    difficulty: "beginner" | "intermediate" | "advanced";
    categories: string[];
    timeLimit: number; // minutes
    questionCount: number;
    showHints: boolean;
    allowRetakes: boolean;
  }>(),

  progressTracking: jsonb("progress_tracking").$type<{
    totalQuizzes: number;
    averageScore: number;
    lastQuizDate: string;
    streak: number;
    achievements: string[];
    categoryProgress: Record<
      string,
      {
        completed: number;
        averageScore: number;
      }
    >;
  }>(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Organizations table
export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }),

  // Organization-specific quiz settings
  quizSettings: jsonb("quiz_settings").$type<{
    defaultDifficulty: "beginner" | "intermediate" | "advanced";
    allowedCategories: string[];
    maxQuizDuration: number; // minutes
    allowRetakes: boolean;
    showLeaderboard: boolean;
    customBranding: {
      logo?: string;
      primaryColor?: string;
      secondaryColor?: string;
    };
  }>(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Sessions table for authentication
export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  token: text("token").notNull(),
  refreshToken: text("refresh_token"),
  expiresAt: timestamp("expires_at").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Organization memberships (many-to-many relationship)
export const organizationMemberships = pgTable("organization_memberships", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  organizationId: uuid("organization_id")
    .references(() => organizations.id)
    .notNull(),
  role: varchar("role", { length: 50 }).default("participant").notNull(), // 'admin', 'creator', 'participant'
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

// Define relations
export const usersRelations = relations(users, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [users.organizationId],
    references: [organizations.id],
  }),
  sessions: many(sessions),
  organizationMemberships: many(organizationMemberships),
}));

export const organizationsRelations = relations(organizations, ({ many }) => ({
  users: many(users),
  memberships: many(organizationMemberships),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const organizationMembershipsRelations = relations(
  organizationMemberships,
  ({ one }) => ({
    user: one(users, {
      fields: [organizationMemberships.userId],
      references: [users.id],
    }),
    organization: one(organizations, {
      fields: [organizationMemberships.organizationId],
      references: [organizations.id],
    }),
  })
);

// Type exports for TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type OrganizationMembership =
  typeof organizationMemberships.$inferSelect;
export type NewOrganizationMembership =
  typeof organizationMemberships.$inferInsert;
