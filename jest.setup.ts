// Jest setup file for authentication tests

// Mock environment variables
process.env.NEXTAUTH_SECRET = "test-secret-key";
process.env.WORKOS_API_KEY = "test-workos-api-key";
process.env.WORKOS_CLIENT_ID = "test-workos-client-id";
process.env.WORKOS_WEBHOOK_SECRET = "test-webhook-secret";
process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test_db";

// Global test setup
beforeAll(async () => {
  // Setup test database connection
  // TODO: Initialize test database
});

afterAll(async () => {
  // Cleanup test database
  // TODO: Clean up test data
});

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
