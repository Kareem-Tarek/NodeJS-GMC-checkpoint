# Run all the tasks from here (the current directory of "README!.txt")
    * How to run the tasks?
        - for example... run the following in the terminal => node checkpoint-tasks/[your_task_here.js]

# You must install "generate-password" package before running [task_4.js]!
    * How to install "generate-password" package?
        - Open terminal (cmd or git bash) and run => npm i generate-password
    * generate-password package documentation: https://www.npmjs.com/package/generate-password

# You must install "nodemailer" package before running [task_5.js]!
    * How to install "nodemailer" package?
            - Open terminal (cmd or git bash) and run => ...
                1- npm init --y
                2- npm i nodemailer
    * How to make the pre-steps before sending an email from Node.js? (we will be using "gmail" service in the tasks (task_5_1.js and task_5_2.js)!)
        1- You need to enable "2- Step Verification" in your google's account security, and after enabling it
        2- Create an "app" and give it any name you want (e.g. NodeJS) then after submitting, google will give you a security code
        3- take that security code (copy) and paste it in auth's password in your js file in the transporter
        4- Now you are ready to run your js file (e.g. node checkpoint-tasks/your_js_file.js) in order to send an email
    * nodemailer package documentation: https://openjavascript.info/2023/01/10/nodemailer-tutorial-send-emails-in-node-js/