# QuizHub API-First Sprint Specification
## SpecKit Multi-Agent Implementation Plan

**Date:** September 2025  
**Context:** Current date is September 2025, not 2024. All research and technology references should reflect 2025 capabilities.

---

## Executive Summary

Build the missing backend API that makes the existing QuizHub frontend work with real data, using the exact data structures defined in the template. Focus on core functionality first, with essential admin settings to make it feel like a real SaaS product.

---

## Current State Analysis

### Existing QuizHub Template:
- **Frontend:** Next.js 15 + React 19 with ShadCN UI components
- **Data Structure:** Defined in `data/mock-quizzes.ts` and `data/categories.tsx`
- **Authentication:** Template ready for BetterAuth integration
- **UI Components:** ShadCN dashboard components available
- **Missing:** Complete backend API implementation

### Data Structures (From Template):
```typescript
interface Quiz {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  questions: Question[];
  tags: string[];
  settings: QuizSettings;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSettings {
  timeLimit: number;
  randomizeQuestions: boolean;
  showExplanations: boolean;
  passingScore: number;
  visibility: "private" | "public";
  allowRetakes: boolean;
  questionTimer: number;
}
```

---

## Sprint 1: Core QuizHub API Implementation

### **Must-Have API Endpoints:**

#### Quiz Management:
- `GET /api/quizzes` - List all quizzes with filtering
- `GET /api/quizzes/[id]` - Get specific quiz
- `POST /api/quizzes` - Create new quiz
- `PUT /api/quizzes/[id]` - Update quiz
- `DELETE /api/quizzes/[id]` - Delete quiz

#### Question Management:
- `GET /api/quizzes/[id]/questions` - Get quiz questions
- `POST /api/quizzes/[id]/questions` - Add question to quiz
- `PUT /api/questions/[id]` - Update question
- `DELETE /api/questions/[id]` - Delete question

#### Categories:
- `GET /api/categories` - List all 22 categories
- `GET /api/categories/[slug]/quizzes` - Get quizzes by category

#### User Management:
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/avatar` - Upload user avatar

#### Battle Mode (Real-time):
- `POST /api/battles` - Create battle room
- `GET /api/battles/[id]` - Join battle room
- WebSocket endpoints for real-time updates

### **Database Schema Requirements:**
```sql
-- Core tables
users, organizations, quizzes, questions, categories
quiz_responses, battle_rooms, battle_participants

-- Admin settings
app_settings, user_roles, permissions
```

---

## Essential Admin Settings (First Sprint)

### **Company Branding:**
- Logo upload and management
- App icon configuration
- Company name and description
- Contact information

### **User Management:**
- Basic roles: Admin, User
- User profile management
- Avatar upload functionality

### **App Configuration:**
- App name and description
- Theme settings (dark/light mode)
- Menu management for dashboard navigation

### **Settings API Endpoints:**
- `GET /api/admin/settings` - Get app settings
- `PUT /api/admin/settings` - Update app settings
- `POST /api/admin/upload/logo` - Upload company logo
- `POST /api/admin/upload/icon` - Upload app icon

---

## Technology Stack

### **Backend:**
- **Database:** Drizzle ORM + Neon PostgreSQL
- **Authentication:** BetterAuth integration
- **Real-time:** WebSocket for battle mode
- **File Upload:** Vercel Blob or similar for avatars/logos

### **Frontend Integration:**
- **UI Components:** ShadCN dashboard components
- **State Management:** Existing React state patterns
- **API Client:** Fetch/axios for API calls

---

## Validation Criteria

### **Functional Requirements:**
1. All 20 mock quizzes load and display correctly
2. All 22 categories work with filtering
3. Quiz creation/editing works with exact data structure
4. Battle mode works with real-time updates
5. User authentication integrates with BetterAuth
6. Admin can upload logo and configure app settings

### **Performance Requirements:**
- API response times < 200ms
- Real-time battle updates < 100ms latency
- File uploads complete within 5 seconds

### **User Experience Requirements:**
- Seamless transition from mock data to real API
- No visual changes to existing UI
- Admin settings accessible through dashboard

---

## Excluded from First Sprint

### **Advanced Features (For Survey Module):**
- Complex role hierarchies and permissions
- Internationalization (i18n) support
- Advanced theming and custom color schemes
- Social media integration
- Advanced analytics and reporting
- Email notification system
- Third-party API integrations
- Multi-organization support

---

## Implementation Timeline

### **Week 1: Core API Development**
- Database schema setup
- Basic CRUD operations for quizzes
- User authentication integration
- Category system implementation

### **Week 2: Advanced Features**
- Battle mode real-time functionality
- File upload for avatars and logos
- Admin settings management
- Testing and validation

---

## Success Metrics

### **Technical Success:**
- 100% of existing frontend functionality works with real API
- Zero data loss during transition from mock data
- All performance requirements met

### **Business Success:**
- QuizHub feels like a complete SaaS product
- Admin can configure branding and basic settings
- Foundation ready for survey module development

---

## SpecKit Implementation Notes

### **Key Context for SpecKit:**
- Current date is September 2025
- Use exact data structures from template files
- Focus on API-first approach, not UI changes
- Leverage existing ShadCN components
- BetterAuth integration is priority
- Real-time features are essential for battle mode

### **Research Requirements:**
- BetterAuth organization and user management capabilities
- ShadCN dashboard components for admin settings
- Vercel file upload solutions for logos/avatars
- WebSocket implementation patterns for real-time features

---

*This specification provides SpecKit with comprehensive requirements for building the QuizHub backend API while maintaining focus on core functionality and essential admin features.*

