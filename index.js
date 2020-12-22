const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'Title',
      message: 'What is the title of the program',
      default: 'no answer given',
    },
    {
        name: 'Description',
        message: 'Please describe the program',
        default: 'no answer given',
    },
    {
        name: 'Instalation',
        message: 'How do i install the program',
        default: 'no answer given',
    },
    {
        name: 'Usage',
        message: 'How do i use the program',
        default: 'no answer given',
    },
    {
        name: 'Contributing',
        message: 'Who contributed to the program',
        default: 'no answer given',
    },
    {
        name: 'Licence',
        message: 'Enter license type',
        default: 'no answer given',
    },
    {
        name: 'Links',
        message: 'Add Links',
        default: '',
    },
    {
        name: 'Image',
        message: 'Add image url',
        default: '',
    },
  ])
  .then((answers) => {
    
    console.info('Answer:', answers);
    fs.writeFile('Readme.md', `
# ${answers.Title}
${answers.Description}

## Installation
${answers.Instalation}
    
## Usage
${answers.Usage}
    
## Contributing
${answers.Contributing}
    
## License
 ${answers.Licence}
 
 ## Images
 ${answers.Image}
 
 ## Links
 ${answers.Links}`, function (err){
        if (err) throw err;
        console.log('Readme Created!');
    })
  });
  