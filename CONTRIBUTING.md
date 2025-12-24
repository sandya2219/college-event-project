# Contributing to Vignan's Institute Event Review System

Thank you for considering contributing to the Vignan's Institute Event Review System! We welcome contributions from faculty, students, and developers who want to help improve this educational tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Submission Guidelines](#submission-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

This project adheres to the academic values of Vignan's Institute. By participating, you are expected to uphold this code:

- **Respectful Communication**: Use welcoming and inclusive language
- **Collaborative Spirit**: Be respectful of differing viewpoints and experiences
- **Academic Integrity**: Ensure all contributions are original or properly credited
- **Constructive Feedback**: Focus on what is best for the community and educational outcomes
- **Professional Conduct**: Maintain professionalism in all interactions

## 🛠️ How Can I Contribute?

### Reporting Bugs
- Check existing issues to avoid duplicates
- Use a clear, descriptive title
- Include steps to reproduce the bug
- Provide system/browser information
- Include screenshots if applicable

### Suggesting Enhancements
- Use a clear, descriptive title
- Explain the current behavior vs. expected behavior
- Describe the use case and benefits
- Consider backwards compatibility

### Code Contributions
- Bug fixes
- Feature implementations
- Performance improvements
- Documentation updates
- UI/UX enhancements

## 🚀 Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/vignan-institute/event-review-system.git
   cd event-review-system
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Follow the coding standards
   - Test your changes thoroughly
   - Update documentation if needed

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "type: brief description of changes"
   ```

## 💻 Development Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Optional Development Tools
```bash
# Install Node.js development tools (optional)
npm install

# Start local development server
npm run dev

# Or use any static file server
python -m http.server 8000
```

### Project Structure
```
vignan-event-system/
├── index.html          # Main application
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript modules
│   └── images/        # Static images
├── docs/              # Documentation
└── tests/             # Test files
```

## 📝 Submission Guidelines

### Pull Request Process

1. **Before Submitting**
   - Ensure your code follows the style guidelines
   - Test on multiple browsers if possible
   - Update documentation if necessary
   - Rebase your branch on the latest main branch

2. **Pull Request Description**
   - Clearly describe what changes were made
   - Reference any related issues
   - Include screenshots for UI changes
   - List any breaking changes

3. **Review Process**
   - All submissions require review
   - Reviewers may request changes
   - Once approved, maintainers will merge

### Commit Message Format

Use conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding missing tests
- `chore`: Updating grunt tasks etc.

**Examples:**
```
feat(forms): add validation for mandatory fields
fix(ui): resolve mobile responsive layout issues
docs(readme): update installation instructions
```

## 🎨 Coding Standards

### HTML Guidelines
- Use semantic HTML5 elements
- Maintain proper document structure
- Use descriptive class and ID names
- Ensure accessibility compliance (ARIA labels, alt text)

### CSS Guidelines
- Use consistent naming conventions (BEM recommended)
- Organize styles logically (layout → components → utilities)
- Use CSS custom properties for theming
- Ensure responsive design principles
- Comment complex selectors

### JavaScript Guidelines
- Use ES6+ features where appropriate
- Follow consistent naming conventions (camelCase)
- Add comments for complex logic
- Handle errors gracefully
- Avoid global variables
- Use strict mode

### File Organization
- Keep files focused on single responsibilities
- Use consistent file naming
- Group related functionality
- Maintain clean directory structure

## 🧪 Testing

### Manual Testing Checklist
- [ ] Test on different screen sizes
- [ ] Verify form validation works
- [ ] Check PDF/Word generation
- [ ] Test file upload functionality
- [ ] Verify navigation works correctly
- [ ] Test with different browsers

### Browser Compatibility
Ensure compatibility with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📖 Documentation

### Code Documentation
- Comment complex algorithms
- Document function parameters and return values
- Use JSDoc format for JavaScript functions
- Update README for new features

### User Documentation
- Update user guides for new features
- Include screenshots for UI changes
- Maintain accurate setup instructions
- Keep changelog updated

## 🏷️ Issue Labels

We use these labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎯 Priority Contributions

We especially welcome contributions in these areas:

1. **Accessibility Improvements**
   - Screen reader compatibility
   - Keyboard navigation
   - High contrast mode

2. **Mobile Experience**
   - Touch-friendly interface
   - Improved responsive design
   - Offline functionality

3. **Performance Optimization**
   - File size reduction
   - Loading time improvements
   - Memory usage optimization

4. **Educational Features**
   - Better reporting templates
   - Data visualization
   - Export capabilities

## 🙋 Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Contact the development team
4. Join our developer community discussions

## 🏆 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Annual contributor acknowledgment
- Academic publications (where applicable)

Thank you for helping make education better through technology! 🎓

---

**Vignan's Institute of Information Technology**  
*Committed to Educational Excellence*
