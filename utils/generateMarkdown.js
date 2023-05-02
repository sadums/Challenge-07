const badges = {
  "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GNU Lesser General Public License v3.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "GNU General Public License v2.0": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "Eclipse Public License 2.0": "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
  "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
}

function renderLicenseSection(license) {
  return `${badges[license]}\n\nThis project uses ${license} for licensing`;
}

function generateMarkdown(data) {
  let includedData = new Map();
  let tableOfContents = '';
  let readMeString = '';
  for(let key in data){
    if(data[key] != '' && key === 'License'){
      includedData.set(key, renderLicenseSection(data[key]));
      tableOfContents += `- [${key}](#${key})\n`;
      continue;
    }
    if(data[key] != '' && key != 'tableOfContents' && key != 'title' && key != 'email' && key != 'github'){
      includedData.set(key, data[key]);
      tableOfContents += `- [${key}](#${key})\n`;
    }
  }

  // Add extra data to 
  readMeString += `# ${data.title}\n\n`;
  if(data.tableOfContents === 'Yes') readMeString += `## Table of Contents\n\n${tableOfContents}\n`;
  includedData.forEach((v, k) => {
    readMeString += `## ${k}\n\n${v}\n\n`;
  });
  readMeString += `## Questions \n\nFor any questions, please contact me:\n\nGithub: [${data.github}](https://github.com/${data.github})\n\nEmail: ${data.email}`;

  return readMeString;
}

module.exports = generateMarkdown;
