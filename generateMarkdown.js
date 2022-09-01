const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(License) {
    if (License === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (License === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (License === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (License === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (License === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (License === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
        // If there is no license, return an empty string
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
    if (!License) {
        return ``;
    } else {
        return `## License  
    This project is covered under the ${License} license.`
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `

# ${data.Title}

${renderLicenseBadge(data.License)}

---

## Table of Contents

* [Title](#Title)
* [Link](#Link)
* [Description](#Description)
* [Installation](#Installation)
* [Licenses](#Licenses)
* [Contributing](#Contributing)
* [Contact](#Contact)
* [Credits](#Credits)
    
---

## Description

${data.Description}

---

## Link 

${data.URL}

---

## Repository

${data.Repo}

---

## Installation

${data.Installation}

---

${renderLicenseSection(data.License)}

---

## Contributing

${data.contributing}

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request
Following a code review, your feature will be merged.

---

## Contact

GitHub: https://github.com/${data.Github}  
Email: ${data.Email}

---

## Credits

${data.Credits}

  `;
};
module.exports = generateMarkdown;
