
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create react components',
        prompts: [{
            type: 'list',
            name: "input",
            message: 'Choose your component',
            choices: ['class', 'functional'],
        },
        {
            type: "input",
            name: "name"
        }
        ],
        actions: function (data) {
            const actions = [];
            if (data.input === 'functional') {
                actions.push(
                    {
                        type: 'add',
                        templateFile: 'plop-templates/functional-component.hbs',
                        path: 'src/{{pascalCase name}}.js'
                    }
                )
            } else {
                actions.push(
                    {
                        type: 'add',
                        templateFile: 'plop-templates/class-component.hbs',
                        path: 'src/{{pascalCase name}}.js'
                    }
                )
            }
            return actions;
        }
    });
};