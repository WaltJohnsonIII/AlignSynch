-- Migration: Create Relationship Tables
-- This migration creates all the tables needed for the relationship alignment platform

-- Create ENUMS
CREATE TYPE user_role AS ENUM ('initiator', 'counterparty', 'coach');
CREATE TYPE relationship_mode AS ENUM ('Basic', 'Advanced');
CREATE TYPE relationship_setting AS ENUM ('Soft', 'Full');
CREATE TYPE invite_status AS ENUM ('pending', 'accepted', 'declined', 'revoked');
CREATE TYPE opinion_type AS ENUM ('feel', 'wish', 'think', 'guess');

-- 1. RELATIONSHIPS TABLE
CREATE TABLE relationships (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  realm VARCHAR(255),
  descriptor TEXT,
  mode relationship_mode DEFAULT 'Basic' NOT NULL,
  setting relationship_setting DEFAULT 'Soft' NOT NULL,
  initiator_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  coach_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  workos_organization_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 2. RELATIONSHIP_PARTICIPANTS TABLE
CREATE TABLE relationship_participants (
  id SERIAL PRIMARY KEY,
  relationship_id INTEGER REFERENCES relationships(id) ON DELETE CASCADE NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  role VARCHAR(100) NOT NULL,
  workos_user_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 3. ASPECTS TABLE
CREATE TABLE aspects (
  id SERIAL PRIMARY KEY,
  relationship_id INTEGER REFERENCES relationships(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  left_value VARCHAR(100) NOT NULL,
  right_value VARCHAR(100) NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 4. OPINIONS TABLE
CREATE TABLE opinions (
  id SERIAL PRIMARY KEY,
  aspect_id INTEGER REFERENCES aspects(id) ON DELETE CASCADE NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  opinion_type opinion_type NOT NULL,
  value INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  UNIQUE(aspect_id, user_id, opinion_type)
);

-- 5. INVITES TABLE
CREATE TABLE invites (
  id SERIAL PRIMARY KEY,
  relationship_id INTEGER REFERENCES relationships(id) ON DELETE CASCADE NOT NULL,
  inviter_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  invitee_email VARCHAR(255) NOT NULL,
  role user_role NOT NULL,
  status invite_status DEFAULT 'pending' NOT NULL,
  workos_invite_id VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 6. RELATIONSHIP_TEMPLATES TABLE
CREATE TABLE relationship_templates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  realm VARCHAR(255),
  descriptor TEXT,
  mode relationship_mode DEFAULT 'Basic' NOT NULL,
  setting relationship_setting DEFAULT 'Soft' NOT NULL,
  is_public BOOLEAN DEFAULT false,
  created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 7. TEMPLATE_ASPECTS TABLE
CREATE TABLE template_aspects (
  id SERIAL PRIMARY KEY,
  template_id INTEGER REFERENCES relationship_templates(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  left_value VARCHAR(100) NOT NULL,
  right_value VARCHAR(100) NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_relationships_initiator_id ON relationships(initiator_id);
CREATE INDEX idx_relationships_coach_id ON relationships(coach_id);
CREATE INDEX idx_relationship_participants_relationship_id ON relationship_participants(relationship_id);
CREATE INDEX idx_relationship_participants_user_id ON relationship_participants(user_id);
CREATE INDEX idx_aspects_relationship_id ON aspects(relationship_id);
CREATE INDEX idx_opinions_aspect_id ON opinions(aspect_id);
CREATE INDEX idx_opinions_user_id ON opinions(user_id);
CREATE INDEX idx_invites_relationship_id ON invites(relationship_id);
CREATE INDEX idx_invites_invitee_email ON invites(invitee_email);
CREATE INDEX idx_template_aspects_template_id ON template_aspects(template_id);
