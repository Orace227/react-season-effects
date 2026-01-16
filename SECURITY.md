# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of react-season-effects seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please DO NOT:

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before it has been addressed

### Please DO:

1. Email your findings to [your-email@example.com] (Update with your email)
2. Include the following information:
   - Type of vulnerability
   - Full paths of source file(s) related to the vulnerability
   - Location of the affected source code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### What to Expect:

- We will acknowledge receipt of your vulnerability report within **48 hours**
- We will provide an estimated timeline for a fix within **5 business days**
- We will notify you when the vulnerability has been fixed
- We will publicly acknowledge your responsible disclosure (if you wish)

## Security Best Practices for Users

When using react-season-effects:

1. **Keep the package updated** to the latest version
2. **Regularly run `npm audit`** to check for vulnerabilities
3. **Review our CHANGELOG** for security-related updates
4. **Follow our integration guidelines** in the documentation

## Known Security Considerations

### SSR Safety

This library is designed to be SSR-safe for Next.js applications. All client-side code checks for `window` existence before execution.

### Canvas Security

The library uses HTML Canvas API which is subject to browser security policies. No external resources or user-generated content is rendered on the canvas.

### Dependencies

We maintain **zero runtime dependencies** to minimize the attack surface.

## Security Updates

Security updates will be released as:

- **Patch versions** for minor vulnerabilities
- **Immediate hotfixes** for critical vulnerabilities

All security updates will be documented in:

- CHANGELOG.md
- GitHub Security Advisories
- npm package advisory

## Contact

For security concerns, contact: [your-email@example.com]

For general questions, open a discussion on GitHub.

---

_Last updated: January 16, 2026_
