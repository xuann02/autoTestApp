# General Mandates
- **Language:** Luôn luôn phản hồi bằng tiếng Việt.

# Project Overview: Maestro Mobile UI Automation

This project is a **Maestro-based** mobile UI automation suite designed to test multiple education and exam preparation applications. It utilizes a modular structure to run common test flows across various app IDs for both Android and iOS.

## Core Technologies
- **[Maestro](https://maestro.mobile.dev/):** The primary UI automation framework using YAML-based flows.
- **JavaScript:** Used for complex logic, such as app ID iteration, data randomization, and conditional branching within Maestro flows.

## Architecture & Structure
- **Entry Points:**
    - `main.yaml`: The primary entry point for running the test suite. It manages the loop that iterates through different applications.
    - `appModul.yaml`: Orchestrates the sequence of test modules to be executed for each application.
- **App Configuration:**
    - `appAndroid.js`: Contains a list of Android `appId`s and logic to iterate through them.
    - `appiOS.js`: Contains a list of iOS `appId`s and iteration logic.
- **Test Modules (`app/`):**
    Organized by feature, containing YAML flows and supporting JS scripts:
    - `Arena/`, `Audio/`, `Daily/`, `Diagnostic/`, `Final/`, `Login/`, `Onboarding/`, `Passing/`, `Practice/`, `Study/`, `Token/`.
    - **Naming Convention:** Test cases are typically named `TC01.yaml`, `TC02.yaml`, etc.
- **Support Scripts:**
    - `randomAnswer.js`, `randomQuestion.js`, `check_stop.js`: Helper scripts for dynamic test behavior.

## Building and Running

### Prerequisites
- [Maestro CLI](https://maestro.mobile.dev/getting-started/installing-maestro) installed.
- An Android Emulator or iOS Simulator (or physical device) connected.

### Running Tests
To run the full suite:
```bash
maestro test main.yaml
```

To run a specific module or flow:
```bash
maestro test app/Daily/TC01.yaml
```

### Key Commands
- **Clear App State:** `- clearState: ${output.appId}` (used in `main.yaml`)
- **Launch App:** `- launchApp: { appId: ${output.appId} }`
- **Run Script:** `- runScript: scriptName.js`
- **Run Sub-flow:** `- runFlow: folder/flowName.yaml`

## Development Conventions
- **Modularization:** Prefer breaking down complex flows into smaller, reusable YAML files.
- **Dynamic Logic:** Use JavaScript for data randomization or whenever complex conditional branching is required.
- **State Management:** Use `output` variables in JS scripts to pass data back to Maestro YAML flows.
- **Assertions:** Use `assertVisible`, `assertNotVisible` to verify UI states before performing actions.
- **Navigation:** Standard navigation typically starts with `tapOn: [Tab Name]` or `tapOn: [Menu Item]`.
