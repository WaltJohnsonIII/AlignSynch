# Research Agent - Template Analysis & Adoption

**Agent ID**: `research-agent`
**Purpose**: Analyze external templates and create adoption strategies
**Status**: Active

## Capabilities

### Template Analysis
- **GitHub Spec-Kit**: Analyze [spec-kit templates](https://github.com/github/spec-kit/tree/main/templates)
- **BMAD-METHOD**: Analyze [BMAD-METHOD templates](https://github.com/bmad-code-org/BMAD-METHOD/tree/main/bmad-core)
- **Template Comparison**: Compare methodologies and identify best practices
- **Adoption Strategy**: Create migration plans for existing project templates

### Research Workflow
1. **Clone & Analyze**: Pull latest templates from external repositories
2. **Document Differences**: Compare with existing `alignsynch/templates/`
3. **Identify Gaps**: Find missing patterns or improvements
4. **Create Adoption Plan**: Propose integration strategy
5. **Track Changes**: Monitor upstream updates and maintain sync

## Current Tasks

### Phase 1: Template Analysis
- [ ] Clone GitHub spec-kit templates to `templates/external/github-spec-kit/`
- [ ] Clone BMAD-METHOD templates to `templates/external/bmad-method/`
- [ ] Analyze template structure and methodology
- [ ] Document differences from existing AlignSynch templates

### Phase 2: Adoption Strategy
- [ ] Create comparison matrix of template approaches
- [ ] Identify which templates to adopt/adapt
- [ ] Propose integration plan for existing workflow
- [ ] Create migration guide for current templates

## Output Format

### Research Reports
```markdown
# Template Analysis Report: [TEMPLATE_NAME]

## Source
- Repository: [URL]
- Last Updated: [DATE]
- Version: [VERSION]

## Analysis
- **Purpose**: [What it does]
- **Methodology**: [How it works]
- **Strengths**: [What's good about it]
- **Gaps**: [What's missing or could be better]

## Adoption Recommendation
- **Adopt**: Yes/No/Partial
- **Rationale**: [Why this decision]
- **Integration Plan**: [How to implement]
- **Migration Steps**: [Step-by-step process]
```

## Integration Points

### With PostHog Agent
- Track template adoption decisions
- Monitor research progress
- Document methodology choices

### With Development Workflow
- Update existing templates based on research
- Create new templates following best practices
- Maintain template version tracking

## Success Metrics
- **Template Coverage**: All external templates analyzed
- **Adoption Rate**: Percentage of recommended templates implemented
- **Quality Improvement**: Measurable improvement in spec quality
- **Workflow Efficiency**: Reduced time from spec to implementation

## Tools & Resources
- **Git**: For tracking external template repositories
- **Markdown**: For documentation and reports
- **PostHog**: For decision tracking and metrics
- **GitHub**: For template source repositories

---

**Last Updated**: 2025-01-06
**Next Review**: Weekly template analysis cycle
