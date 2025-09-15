# Continuous Integration (CI) Overview

## 1. Common Steps in CI

### **Linting**
- **Purpose**: Ensure code is clean, consistent, and maintainable.
- **Tools**: 
  - [Flake8](http://flake8.pycqa.org/)
  - [Pylint](https://pylint.pycqa.org/)

### **Testing**
- **Purpose**: Verify that existing features work and prevent breaking changes.
- **Tools**: 
  - [pytest](https://pytest.org/)
  - [unittest](https://docs.python.org/3/library/unittest.html)

### **Building**
- **Purpose**: Package the code into a runnable bundle.
- **Tools**:
  - [setuptools](https://setuptools.pypa.io/en/latest/)
  - [poetry](https://python-poetry.org/)

---

## 2. Alternatives to Jenkins and GitHub Actions

### **Travis CI**
- Simple setup and configuration.
- Supports parallel builds and multiple architectures.
- Good for teams needing quick enterprise-supported CI solutions.

### **SpaceLift**
- Automates infrastructure-as-code (IaC) deployments (OpenTofu, Terraform, etc.).
- Detects and remediates drift in environments.
- Simplifies CI/CD automation and improves compliance and visibility.

---

## 3. Cloud vs Self-Hosted CI

### **Cloud-Based CI**
- **Pros**:
  - Easier for beginners, no server management required.
  - Scales automatically with project needs.
- **Cons**:
  - Limited control over infrastructure.
  - Dependent on service provider’s limitations and costs.

### **Self-Hosted CI**
- **Pros**:
  - Offers more control and flexibility.
  - Better for teams with advanced security, compliance, or custom build requirements.
- **Cons**:
  - Requires management of infrastructure.
  - More complex to set up and maintain.

### **Decision Factors**:
- Team expertise.
- Project sensitivity (security, compliance).
- Expected build load.
- Budget.

### **Personal Note**:
Starting with a cloud-based CI is easier to understand the workflow; later, a self-hosted setup can be adopted for more control.
