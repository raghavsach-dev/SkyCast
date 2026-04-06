# SkyCast Test Plan

## 1. Scope Management
- **In-Scope:** City weather search, UI rendering (video background, font/icons), search button interaction, responsiveness on standard screen sizes.
- **Out-of-Scope:** Advanced predictive analytics, user authentication, history storage, browser-specific compatibility fixes (beyond modern standard).

## 2. Test Approach
- **Strategy:** Manual testing for UI/UX; unit/integration testing for JS functions.
- **Methodology:** Black-box testing focusing on user inputs and expected outputs (weather data retrieval).

## 3. Criteria for Testing
- **Entry:** Project build is stable, all required assets (videos/icons) are loaded, API connectivity confirmed.
- **Exit:** No high-priority bugs, functional feature parity with requirements, clean console.

## 4. Identifying Responsibilities
- **Developer:** Raghav Sachdev (Code fixes, testing execution).
- **Tester:** Raghav Sachdev / Peer Reviewers (Validation of inputs/outputs).

## 5. Staffing & Training Needs
- **Staffing:** 1 Software Developer, 1 QA Lead.
- **Training:** Familiarity with Weather API documentation and basic frontend debugging tools (Chrome DevTools).

## 6. Resource Requirements
- **Software:** VS Code, Chrome/Firefox browsers, Git.
- **Services:** OpenWeatherMap API (or similar), GitHub for version control.

## 7. Test Deliverables
- Test Plan Document (this file).
- Bug Report / Issue Tracker.
- Final Test Summary Report.

## 8. Testing Tasks
- **Input Testing:** Enter valid/invalid city names.
- **Visual Testing:** Verify background video autoplay and responsiveness.
- **Performance:** Check load times for assets.
- **Compatibility:** Test on mobile vs. desktop browsers.
