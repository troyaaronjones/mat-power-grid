# Contributing to Mat Power Grid

Thank you for your interest in contributing to **Mat Power Grid**! We welcome contributions from developers of all skill levels.

---

## Code of Conduct

Please be respectful, collaborative, and constructive when opening issues, submitting pull requests, or participating in discussions.

---

## How to Contribute

### 1. Reporting Issues
If you discover a bug, unexpected behavior, or have a feature request:
1. Search the [GitHub Issues](https://github.com/troyaaronjones/mat-power-grid/issues) to ensure it hasn't already been reported.
2. If not found, open a new issue with a clear title and detailed description, including steps to reproduce and environment details (Angular version, browser, etc.).

### 2. Local Development Setup
1. **Fork and Clone** the repository:
   ```bash
   git clone https://github.com/<your-username>/mat-power-grid.git
   cd mat-power-grid
   ```
2. **Install dependencies** using Yarn:
   ```bash
   yarn install
   ```
3. **Build the library:**
   ```bash
   yarn lib:build
   ```
4. **Run unit tests:**
   ```bash
   yarn test
   ```

### 3. Submitting Pull Requests
1. Create a new topic branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
2. Implement your changes following standard Angular & TypeScript best practices.
3. Write unit tests for all new code or changed functionality.
4. Verify all unit tests pass (`yarn test`) and the library builds cleanly (`yarn lib:build`).
5. Commit your changes with clear, descriptive commit messages.
6. Push your branch to your fork and create a Pull Request detailing your changes.

---

## Code Style & Testing Guidelines

- Write clean, maintainable, and well-typed TypeScript code.
- Ensure component inputs/outputs follow standard Angular naming conventions.
- All new features or bug fixes MUST include corresponding unit tests in `.spec.ts` files.

---

## License

By contributing to Mat Power Grid, you agree that your contributions will be licensed under the [MIT License](LICENSE).
