import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// ENUMS
export const userRoleEnum = pgEnum("user_role", [
  "initiator",
  "counterparty",
  "coach",
]);

// ENUMS
export const userRoleEnum = pgEnum("user_role", [
  "initiator",
  "counterparty",
  "coach",
]);
export const relationshipModeEnum = pgEnum("relationship_mode", [
  "Basic",
  "Advanced",
]); // 2 vs 4 opinions
export const relationshipSettingEnum = pgEnum("relationship_setting", [
  "Soft",
  "Full",
]); // Gap tolerance
export const inviteStatusEnum = pgEnum("invite_status", [
  "pending",
  "accepted",
  "declined",
  "revoked",
]);
export const opinionTypeEnum = pgEnum("opinion_type", [
  "feel",
  "wish",
  "think",
  "guess",
]);

// 1. RELATIONSHIPS TABLE
export const relationships = pgTable("relationships", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(), // e.g., "Staff / Manager"
  type: varchar("type", { length: 100 }), // e.g., "Business", "Personal"
  realm: varchar("realm", { length: 255 }), // e.g., "Office"
  descriptor: text("descriptor"), // e.g., "Office Manager Job Functions and Tasks"
  mode: relationshipModeEnum("mode").default("Basic").notNull(),
  setting: relationshipSettingEnum("setting").default("Soft").notNull(),
  initiatorId: uuid("initiator_id").notNull(), // References users.id (uuid)
  coachId: uuid("coach_id"), // References users.id (uuid)
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 2. RELATIONSHIP_PARTICIPANTS (Junction Table)
export const relationshipParticipants = pgTable("relationship_participants", {
  id: serial("id").primaryKey(),
  relationshipId: integer("relationship_id")
    .references(() => relationships.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id").notNull(), // References users.id (uuid)
  role: varchar("role", { length: 100 }).notNull(), // e.g., "Manager", "Staff"
});

// 3. ASPECTS TABLE
export const aspects = pgTable("aspects", {
  id: serial("id").primaryKey(),
  relationshipId: integer("relationship_id")
    .references(() => relationships.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(), // e.g., "Variety of Work (Detail vs. Strategy)"
  leftValue: varchar("left_value", { length: 100 }).notNull(), // e.g., "Detailed"
  rightValue: varchar("right_value", { length: 100 }).notNull(), // e.g., "Strategic"
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 4. OPINIONS TABLE
// This table stores the actual slider values for each user on each aspect
export const opinions = pgTable(
  "opinions",
  {
    id: serial("id").primaryKey(),
    aspectId: integer("aspect_id")
      .references(() => aspects.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id").notNull(), // References users.id (uuid)
    opinionType: opinionTypeEnum("opinion_type").notNull(), // 'feel', 'wish', 'think', 'guess'
    value: integer("value").notNull(), // e.g., a value from 1 to 5
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => {
    return {
      unq: uniqueIndex("user_aspect_opinion_unique").on(
        table.aspectId,
        table.userId,
        table.opinionType
      ),
    };
  }
);

// 5. INVITES TABLE
export const invites = pgTable("invites", {
  id: serial("id").primaryKey(),
  relationshipId: integer("relationship_id")
    .references(() => relationships.id, { onDelete: "cascade" })
    .notNull(),
  inviterId: uuid("inviter_id").notNull(), // References users.id (uuid)
  inviteeEmail: varchar("invitee_email", { length: 255 }).notNull(),
  role: userRoleEnum("role").notNull(), // 'counterparty' or 'coach'
  status: inviteStatusEnum("status").default("pending").notNull(),
  token: varchar("token", { length: 255 }).unique(), // Secure, single-use token
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 6. RELATIONSHIP_TEMPLATES TABLE (for future use)
export const relationshipTemplates = pgTable("relationship_templates", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }), // e.g., "Business", "Personal", "Family"
  isPublic: boolean("is_public").default(false),
  createdBy: uuid("created_by").notNull(), // References users.id (uuid)
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 7. TEMPLATE_ASPECTS TABLE (for relationship templates)
export const templateAspects = pgTable("template_aspects", {
  id: serial("id").primaryKey(),
  templateId: integer("template_id")
    .references(() => relationshipTemplates.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  leftValue: varchar("left_value", { length: 100 }).notNull(),
  rightValue: varchar("right_value", { length: 100 }).notNull(),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
