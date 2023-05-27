module.exports = '<html><body><pre>To connect to an EC2 instance using Session Manager, you can follow these steps:\n' +
    '\n' +
    'Go to the AWS Management Console and open the Systems Manager console.\n' +
    'In the navigation pane, choose Session Manager.\n' +
    'In the Start Session dialog box, choose Connect to a running instance.\n' +
    'In the Select an instance dialog box, choose the instance that you want to connect to.\n' +
    'If you have multiple regions, choose the region where the instance is running.\n' +
    'Choose Open a Session.\n' +
    'Session Manager will open a new tab in your browser and connect to the instance. You will be prompted to enter your credentials. Once you have entered your credentials, you will be connected to the instance.\n' +
    '\n' +
    'You can also connect to an EC2 instance using the Session Manager command-line tool. To do this, you will need to install the Session Manager agent on your computer. You can find the instructions for installing the Session Manager agent on the AWS website.\n' +
    '\n' +
    'Once you have installed the Session Manager agent, you can connect to an EC2 instance using the following command:\n' +
    '\n' +
    'Code snippet\n' +
    'aws ssm start-session --target <instance-id>\n' +
    'Use code with caution. Learn more\n' +
    'Replace <instance-id> with the ID of the instance that you want to connect to.\n' +
    '\n' +
    'Once you have connected to the instance, you can use the Session Manager console or the Session Manager command-line tool to manage the instance.\n' +
    '\n' +
    'Here are some additional things to keep in mind when connecting to an EC2 instance using Session Manager:\n' +
    '\n' +
    'You can only connect to an EC2 instance that has the Session Manager agent installed.\n' +
    'You can only connect to an EC2 instance that is in the same region as your account.\n' +
    'You can only connect to an EC2 instance that is in a VPC that has the Session Manager service enabled.\n' +
    'If you have any problems connecting to an EC2 instance using Session Manager, you can contact AWS support for help.</pre></body></html>';