1. Common Steps in CI

Linting

Purpose: ensure code is clean, consistent, and maintainable.

Tools: Flake8, Pylint.

Testing

Purpose: verify that existing features work and prevent breaking changes.

Tools: pytest, unittest.

Building

Purpose: package the code into a runnable bundle.

Tools: setuptools, poetry.

2. Alternatives to Jenkins and GitHub Actions

Travis CI

Simple setup and configuration.

Supports parallel builds and multiple architectures.

Good for teams needing quick enterprise-supported CI solutions.

SpaceLift

Automates infrastructure-as-code (IaC) deployments (OpenTofu, Terraform, etc.).

Detects and remediates drift in environments.

Simplifies CI/CD automation and improves compliance and visibility.

3. Cloud vs Self-Hosted CI

Cloud-Based

Easier for beginners, no server management required.

Scales automatically with project needs.

Self-Hosted

Offers more control and flexibility.

Better for teams with advanced security, compliance, or custom build requirements.

Decision factors:

Team expertise

Project sensitivity (security, compliance)

Expected build load

Budget

Personal note: Starting with a cloud-based CI is easier to understand the workflow; later, a self-hosted setup can be adopted for more control.
