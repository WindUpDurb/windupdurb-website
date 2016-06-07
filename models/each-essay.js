"use strict";

/*

let firstEssay = {
    essayNumber: "00",
    title: "Var versus Let: A Discussion on Being a Noob",
    datePosted: "June 3, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `It may have been because I was a Javascript noob—still am, perhaps—that I was steadfast in my use of var for variable declarations and reluctant to let it go. Var was there from “Hello, world,” and I knew what it did for each variable declaration thereupon: it created a global variable or a local variable, depending on the scope in which it was declared, and there, too, was this inherent hoisting behavior. I knew it; I knew var. Then I was introduced to let, and with tense shoulders, I stuck out my hand and politely said, “Nice to meet you.” In my head, though, I was not so welcoming and was thinking, “Nuh-uh. Nuh-uh. We're not hanging out. I'm sticking with var.”`
        },
        {
            contentType: "Text",
            content: `Comfort: it is a state we are naturally disposed to be in. It is in environments that affect us with a sense of it that we retire to when we are weary and stressed. Comfort is familiarity—a response, really, to stimuli that no longer challenges or unnerves, as what is gradually gained in the acclimation to a foreign setting or through exposure to an alien topic. Comfort is what defined my relationship with var: I was comfortable in my use of it, and I was hesitant to—no, maybe adamant to not—ditch it and re-familiarize myself with the different, unfamiliar behaviors of let declarations.`

        },
        {
            contentType: "Text",
            content: `But it is in comfort where learning is no longer active, where we no longer are a noob, for we have already learned about and familiarized ourselves with the alien and unknown—and that, precisely, is why comfort is placidity which is not growth but stagnation. And you cannot be stagnant if you want to be a software developer, or even a purposeful human being: technology evolves, and so, too, does time move forward, both waiting for no one, especially you—and especially me, of course.`
        },
        {
            contentType: "Text",
            content: `I actually learned far more than I anticipated exploring the distinctions between var and let declarations, and I as well reinforced material I had already been somewhat familiar with. So, let me take it from the beginning.`

        },
        {
            contentType: "Text",
            content: `Variables in Javascript can be declared in three ways:`

        },
        {
            contentType: "Image",
            content: `00-00-image`

        },
        {
            contentType: "Text",
            content: `As indicated in the image above, a variable can be declared with one of three keywords: var, let, or const. And the syntax is the same for whichever keyword is used. What follows the keyword is the name of the declared variable, which is known as the identifier. Following the assignment operator, the equal sign, is the initialized value for the variable, which is, in this case, the boolean value of true for each variable. And that, simply, is a variable declaration. Before I move on from the const keyword, I would like to note that the uniqueness in const declarations, besides being block-scoped like let, is that the identifier cannot be used again throughout the entire document, and it cannot be re-declared with a new value. So, in referring to the above image, in that document there cannot be another variable with the identifier of constVariable, or an error will be thrown, and it, as well, cannot be re-declared with another value, such as false. That is the extent to which the const keyword will be discussed here: the const keyword declares a read-only variable with a unique identifier that remains constant throughout the entire document.`
        },
        {
            contentType: "Image",
            content: `00-01-image`

        },
        {
            contentType: "Text",
            content: `Scope, now, can be thought of as the realm, or context, in which a variable can be declared and accessed from. There is the global scope, which exists on the global object, and there are local scopes, which are nested in the global scope. Traditionally, with var, a variable declared outside of a function is a global variable because it exists in the global realm. These globally-scoped variables are accessible throughout the entire document. This is in contrast to a locally-declared variable, which has a much more limited realm in which it can be accessed from. These local variables traditionally exist within a function, and it is only from within the local function-scope in which the variable was declared  that these variables can be accessed from.`
        },
        {
            contentType: "Image",
            content: `00-02-image`

        },
        {
            contentType: "Text",
            content: `Bring forth let. In much the same way that var declarations are function-scoped, let declarations are block-scoped. Prior to ECMAScript 6, block scope did not exist; the variable declared with var, as discussed, would either be a globally-scoped variable or it would be locally-scoped to the function it was declared within. But block statements did exist prior to ECMAScript 6. A local scope just was not created for block statements in the same way as one was created for functions.`
        },
        {
            contentType: "Text",
            content: `A block statement—because it really did not stick to me until I paid attention to what it is—is the block of code contained within a pair of curly braces:`
        },
        {
            contentType: "Image",
            content: `00-03-image`

        },
        {
            contentType: "Text",
            content:`Here, the block statement is var block = “cheese”. Using the var declaration, the variable “block” becomes globally-scoped because var variables do not recognize block scopes  as they do with function scopes, and that is why I would be able to log it to the console outside of the block statement and see “cheese.” But if it was a let declaration, an error would have been thrown if I had tried to access it from outside of the block statement; it would have only been accessible from within the block statement.`
        },
        {
            contentType: "Text",
            content:`What I would like to reinforce is that block statements are demarcated by a pair of curly braces—and this is how you can identify the boundaries of a block scope. Yes, when declaring a function, what follows is a block statement:`

        },
        {
            contentType: "Image",
            content: `00-04-image`
        },
        {
            contentType: "Text",
            content: `And it is within that type of environment—a block statement attached to a function declaration—that local scopes were only able to be created. But block statements exist elsewhere besides function declarations, as it was introduced a couple of images up, and if a var variable is declared in block statements not associated with a function declaration, such as an if statement, it would be created as a global variable.`

        },
        {
            contentType: "Image",
            content: `00-05-image`

        },
        {
            contentType: "Text",
            content: `The variable “iAmLocal” in the image above is a local variable with a block scope, and it is only accessible from within the block it was declared. This is the type of local-scoping that let variables behave in. A var variable in this environment would not belong to a local scope, but instead to the global scope because var variables only recognize block statements attached to a function declaration. That is one of the main distinctions between var and let declarations: with var declarations, local variables are only created if they are declared from within the realm they recognize, which is a block statement attached to a function declaration; with let declarations, on the other hand, local variables are created from within every block statement, not just ones attached to function declarations.`

        },
        {
            contentType: "Text",
            content: `The other main distinction between var and let variables is that var variables are hoisted—or lifted—to the top of the function, or document if it is a global variable. While no actual hoisting ever occurs, what the term refers to is the behavior that occurs when Javascript code is executed. The  declarations are processed first, and the rest of the code in the document is then subsequently processed.  So the declarations are therefore the first things read, which from our perspective puts them at the top of the their respective scopes.`

        },
        {
            contentType: "Image",
            content: `00-06-image`

        },
        {
            contentType: "Text",
            content: `That is how you can refer to a variable declared later in the document, as in the image above, and have it return undefined, instead of an error being thrown.`

        },
        {
            contentType: "Text",
            content: `Variables declared with let do not behave similarly. They will actually throw an error if they are referred to prior to their declaration. In fact, the space before  a let variable is declared is known as the temporal dead zone. It is the space in which a let variable is dead, or inaccessible, between where a  block scope begins and the declaration of the variable. It can be visualized as the space a var variable “travels up” when being “hoisted” to the top of the scope. The hoisting behavior is unavailable to let variables, so all that prior space before the declaration of the variable is blind to the future existence of the variable. It can also be illustrated analogously as speaking to a friend and referring to an idea before it has ever been conceived, or referring to someone before he or she has ever been born: in both situations, both things referred to simply do not exist. That is deep.`
        },
        {
            contentType: "HR"

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `I started programming and writing in Javascript in early December of 2015. ECMAScript 6, or ECMAScript 2015, I believe it is now referred to as, had already been published by the time I started to learn to code, so let and const declarations were already available. But in my earlier noob days—as opposed to my current noob days—I felt comfortable with var declarations. Partly because I was still overwhelmed by how much there was to learn about Javascript and coding in general, and var, at the time, just sufficed. Partly also because var was what I learned directly, as well as gleaned, from the multitude of resources available to me. There were hardly any resources that taught with let, and the ones that did gave no explicit details on whether it should be used over var or not. I still do not know if I should be using let and const over var from this point on, but that is not the aim of this piece of writing.`

        },
        {
            contentType: "Text",
            content:`I learned enough about the distinctions between var and let, as well as const, declarations that I am comfortable with using them in their appropriate situations. These are tools, albeit fundamental tools, that I am proficient enough to know the cases in which I would use each of them. And that is one of the purposes of learning: so that you can understand for yourself the hows and the whys, and so that you can then be equipped to make your own decisions with what you have learned, and to not just regurgitate what you receive from one source and another.`

        },
        {
            contentType: "Text",
            content: `And with that, I push you, reader, to break out of your comfort zone and be a noob again in anything and everything for no other reason than to simply learn.`
        }
    ],
    url: "var-versus-let-a-discussion-on-being-a-noob"
};
*/



////////////////////////////////////// End First Essay



/*

let secondEssay = {

    essayNumber: "01",
    title: "Deploying to EC2: A Tutorial--Well, It Is Like Shotgunning Beer",
    datePosted: "June 6, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `It took me about a day and a half to deploy this Wind-UpDurb MEAN stack web application to the Elastic Compute Cloud (EC2) web service on Amazon Web Services. The time did not include any previous coding I did on a local server to build my application. The day and a half mostly involved laboring through the Amazon documentation to figure out how to set up a virtual server and subsequently figuring out how to set up a domain name and have it point to the EC2 instance hosting my web application.`
        },
        {
            contentType: "Text",
            content: `It, indeed, tried my patience, and although there were bouts of frustration, it was a worthwhile experience. Nonetheless, the entire project could have been simplified and the time could have been drastically cut shorter if I had clearer documentation available to me.`
        },
        {
            contentType: "Text",
            content: `As an utter noob to deploying a web application online to the entire world—this Wind-UpDurb web application being my first—the jargon used in the Amazon documentation, at times, confused and misdirected my unexperienced self. I will admit there were moments of being stumped and moments in which what I was reading was indiscernible to me. I bounced between resources, and even started the entire project over from scratch a small handful of times. But you do not give up when you are lost or when you have failed; you continue to trudge forward, anticipating and welcoming more misguided decisions and failures. You will reach that goal as you iterate with each attempt—as you essay through your endeavors: that, there, is patience and perseverance. Dig it.`
        },
        {
            contentType: "Text",
            content: `With that, let us shotgun these beers that are deploying a web application to an EC2 instance and associating it with a custom domain name, and let us not stop until we have chugged them dry.`
        },
        {
            contentType: "Text",
            content: `But a foreword first. This tutorial assumes that you have already created an account with Amazon Web Services, have created an IAM user for EC2 in which we will work from, and have created an EC2 key pair that will be used to log in to the EC2 instance via SSH. If you have not, <b> <a href='http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-key-pair' target="_blank"> here </a> </b> is a link to get you up to speed because it is healthy, you know, to get some exposure to the official documentation.`
        },
        {
            contentType: "Text",
            content: `Also, do not forget to set the permissions of the key pair file that is downloaded locally. That needs to be done; otherwise, the SSH login will be unsuccessful. It can be set with the following terminal command:`
        },
        {
            contentType: "Text",
            content: "$ chmod 400 name-of-your-key-pair-file.pem"
        },
        {
            contentType: "Image",
            content: `01-00-images`

        },
        {
            contentType: "Text",
            content: `As you can see in the image above, my key pair is named tutorial-taco-key-pair. After navigating to the directory in which the file will be stored, I then entered the command “chmod 400” followed by the file name. Do that with your key pair file. Please.`
        },
        {
            contentType: "Image",
            content: `01-01-images`

        },
        {
            contentType: "Text",
            content: `And with a little buzz on after each of these prerequisites have been satisfied, let us crack open the beer that is setting up our EC2 instance.`

        },
        {
            contentType: "Text",
            content: `This tutorial will be using the MEAN stack image powered by Bitnami. There are a plethora of other images on the AWS marketplace, so you can explore it and choose one that is more to your liking. But this tutorial will be using the Bitnami MEAN stack image, and it can be found <b> <a href='http://aws.amazon.com/marketplace/pp/B00GXYE87S/ref=srh_res_product_title?ie=UTF8&sr=0-3&qid=1435737629090' > here </a> </b>.`

        },
        {
            contentType: "Text",
            content: `After opening the link, click the yellow “Continue” button. On the following page, you can customize your EC2 instance. I opted for the 1-Click Launch after modifying some of the options. You can customize it how you like, but I would suggest at least setting the Instance Type to t1.micro so that you can be within the realm of no charges if your Amazon Web Service account has been active for less than 12 months and it still possesses free credits. Also, for the purpose of this tutorial, we will need to modify the Security Group, but this will be done shortly from within the EC2 Dashboard.  Ensure that the Key Pair associated with this instance is the one you created with the intentions for this particular instance. Verify that at the bottom of the page. When all looks good, launch it with one sweet single click of the button.`
        },
        {
            contentType: "Text",
            content: `You can now navigate back to your EC2 Dashboard, and click on Instances under the Instances label. It could take a handful of minutes for the instance to initialize, but when it goes from this:`

        },
        {
            contentType: "Image",
            content: `01-02-images`

        },
        {
            contentType: "Text",
            content: `To this: `

        },
        {
            contentType: "Image",
            content: `01-03-images`

        },
        {
            contentType: "Text",
            content: `Then you are ready to proceed.`

        },
        {
            contentType: "Text",
            content: `Let us now configure the Security Group associated with the instance so that specific ports can be accessed. Navigate to Security Groups below Network & Security. Select the Group Name created by Bitnami:`

        },
        {
            contentType: "Image",
            content: `01-32-images`

        },
        {
            contentType: "Text",
            content: `There should be three open Inbound Rules in the Security Group:`
        },
        {
            contentType: "Image",
            content: `01-33-images`

        },
        {
            contentType: "Text",
            content: `Click the edit button. First, modify the SSH Connection Method so that it can now only be accessed through your IP address, instead of by the entire world. This can be done by selecting “My IP” under Source. Configure two additional inbound rules. Both of the new inbound rules should have “Custom TCP Rule” as the type. Set the Port Range for one of them to “3000” and the other to “27017.” They also should both have “Anywhere” as the source. The Custom TCP Rules will be referenced later in the tutorial, but it pretty much opens the port in which the application will be running on and, when set to 0.0.0.0/0,  make it accessible to the world. Port 3000 will be used by the application, and Port 27017 will be used by MongoDB.`
        },
        {
            contentType: "Image",
            content: `01-34-images`

        },
        {
            contentType: "Text",
            content: `When that is complete, we can move on and gather some preliminary information that will be used for the MongoDB login later in the tutorial.`
        },
        {
            contentType: "Text",
            content: `The Bitnami Mean installation pre-configures a MongoDB administrator user name and password with the created instance. The initial user name will be “root,” and you can gather the password by looking into the system log for the instance. You can access the system log by right clicking on the instance, navigating to Instances Settings, and then to Get System Log.`

        },
        {
            contentType: "Image",
            content: `01-04-images`

        },
        {
            contentType: "Text",
            content: `All the way at the bottom of the log is the password within its border of pound symbols. Or hash symbols.`

        },
        {
            contentType: "Image",
            content: `01-05-images`

        },
        {
            contentType: "Text",
            content: `In the image above, my password is “tcHg487guwH4.” Take a screenshot of it, or store it somewhere for your records.`

        },
        {
            contentType: "Text",
            content: `Next, we will connect to the EC2 instance via SSH. Bring up your terminal and enter as a command the following login template filled in with your information:`

        },
        {
            contentType: "Text",
            content: `ssh -i /path/to/your/key-pair.pem user-name@public-DNS`

        },
        {
            contentType: "Text",
            content: `The first argument following the -i flag is the path to the key pair file that is associated with the instance. The last argument will be the user name “bitnami” followed by an ampersand (@) and again followed by the public DNS name associated with the EC2 instance. You can gather the public DNS by navigating to the EC2 Dashboard, clicking on Instances, and selecting your EC2 instance from the list. Additional information on the instance will open up below it like so:`

        },
        {
            contentType: "Image",
            content: `01-08-images`

        },
        {
            contentType: "Text",
            content: `The public DNS, by the way, is what you can enter into the address bar shortly to send you to your EC2 instance.`

        },
        {
            contentType: "Text",
            content: `But first, let us connect to it via SSH. The complete SSH login command should look like:`

        },
        {
            contentType: "Image",
            content: `01-06-images`

        },
        {
            contentType: "Text",
            content: `A terminal prompt should appear asking if you would like to continue connecting. Enter “yes,” and you should now be successfully connected to the EC2 instance. If the connection times out after entering the SSH login command, it is likely because the SSH port  does not have the inbound rule to allow access to your IP address. It is the one that we set earlier at the beginning of the tutorial along with the Custom TCP Rule for Port 3000 and Port 27017. If you get the connection timeout, verify the inbound rules in the EC2 Dashboard by clicking on Security Groups under Network & Security. Otherwise, you should be successfully connected and see the welcome text:`

        },
        {
            contentType: "Image",
            content: `01-07-images`

        },
        {
            contentType: "Text",
            content: `You can now enter the Public DNS associated with your EC2 instance in the address bar, and you should be taken to a welcome web page:`

        },
        {
            contentType: "Image",
            content: `01-09-images`

        },
        {
            contentType: "Text",
            content: `You also can now explore your EC2 instance and all of the directories within it from within the Secure Shell (SSH).`

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `To deploy your code onto your EC2 instance, you will have to clone it down from you GitHub repository.`

        },
        {
            contentType: "Text",
            content: `From within the SSH terminal pane, cd into “apps”:`

        },
        {
            contentType: "Image",
            content: `01-10-images`

        },
        {
            contentType: "Text",
            content: `You will want to clone your repository here. Prepend your git clone command with the sudo command (for SuperUser Do); otherwise, you will get a permission denied error. Keep in mind that you will have to use the sudo command  for most of your commands inside the EC2 instance. After cloning your repository,  navigate into it and do all of the setup you would do as if you were trying to run your web application on a local server, such as doing an npm install and a bower install if you are using it. Do not forget to use the sudo command. Also, a thing to note is that I had to run sudo bower install with the “--allow-root” option.`
        },
        {
            contentType: "Text",
            content: `Verify that your web application is set to run on Port 3000 from within your app.js or server.js file, since we set one of the Custom TCP Inbound Rules on Port 3000 earlier in the tutorial. After which, start up your web application how you normally do on a local server. I used “node app.js.” And then it should be running:`

        },
        {
            contentType: "Image",
            content: `01-11-images`

        },
        {
            contentType: "Text",
            content: `You can verify that it is running by appending the port number at the end of the DNS and entering that into the address bar in your browser.`

        },
        {
            contentType: "Image",
            content: `01-12-images`

        },
        {
            contentType: "Text",
            content: `You now have your web application running on your EC2 instance. But it will stop running when you exit the SSH session. To have you web application continue to run after you exit the SSH session, you will need to bring in the node package forever.js.`

        }, {
            contentType: "Text",
            content: `Enter the command “sudo npm install forever -g”. And then use “forever start script.js” to launch your web application forever—or at least, to have it run continuously after the SSH session closes:`

        },
        {
            contentType: "Image",
            content: `01-13-images`

        },
        {
            contentType: "Text",
            content: `You now should have your application running continuously at the DNS of your instance on port 3000. On to Mongo.`

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `The MongoDB shell can be accessed with a simple login command:`

        },
        {
            contentType: "Text",
            content: `sudo mongo admin –username root –password password-from-the-system-log`

        },
        {
            contentType: "Image",
            content: `01-15-images`

        },
        {
            contentType: "Text",
            content: `From within the MongoDB shell, you can now create a new user name and password. Navigate into the admin database with “use admin”:`

        },
        {
            contentType: "Image",
            content: `01-16-images`

        },
        {
            contentType: "Text",
            content: `And create a new user with db.createUser(). Keep in mind to set the roles to “root.”`

        },
        {
            contentType: "Image",
            content: `01-17-images`

        },
        {
            contentType: "Text",
            content: `You can exit the MongoDB shell and login with your new user name and password:`

        },
        {
            contentType: "Image",
            content: `01-18-images`

        },
        {
            contentType: "Text",
            content: `You now need to reference the database and include your login credentials from within you application. Open with VIM the application file in which the MongoDB connection is being made. In my application, the connection is being made in app.js:`

        },
        {
            contentType: "Image",
            content: `01-19-images`

        },
        {
            contentType: "Text",
            content: `In VIM, press “i” to enter insert mode to allow you to edit the document. The syntax of the URL to MongoDB will be “mongodb://user-name:password@/opt/bitnami/mongodb/tmp/mongodb-27017.sock:27017/admin”.`

        },
        {
            contentType: "Image",
            content: `01-20-images`

        },
        {
            contentType: "Text",
            content: `By the way, the path following the ampersand, which is “/opt/bitnami/mongodb/tmp/mongodb-27017.sock:27017/admin,” is found when you connect to MongoDB via the shell right there on the third line of the image down below:`

        },
        {
            contentType: "Image",
            content: `01-22-images`

        },
        {
            contentType: "Text",
            content: `After making the edits, hit control-c, and then type “:w” to save the edits. Follow it up with “:q” to exit VIM. Restart the server  and you should see:`

        },
        {
            contentType: "Image",
            content: `01-21-images`

        },
        {
            contentType: "Text",
            content: `And now your application has successfully connected to the Mongo database on the EC2 instance. With forever.js running the application continuously, you are good to close out of the SSH shell without worrying about your application not persisting.`

        },
        {
            contentType: "Text",
            content: `Before leaving the SSH shell, though, you might want to re-direct port 80, which is running the Bitnami MEAN Stack welcome screen,  to port 3000 where the web application is running. The purpose of this is so that you do not have to append port 3000 to the end of the URL. I spent a considerable amount of time searching how I could achieve this before I stumbled across <b> <a href='http://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode'> this </a> </b> Stack Overflow post.`

        },
        {
            contentType: "Text",
            content: `So I  suggest reading through it. But the gist of the solution is to enter the following command in the SSH terminal session:`

        },
        {
            contentType: "Text",
            content: `sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`

        },
        {
            contentType: "Text",
            content: `You can test that it is working by entering the DNS of the instance into the address bar sans the appended port number. `

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `Lastly, you might want to have a custom domain name point to your EC2 instance. To accomplish this I used Route 53 in Amazon Web Services. `

        },
        {
            contentType: "Text",
            content: `Before heading to the Route 53 Dashboard, let us briefly stick around in the EC2 dashboard so that we can assign an Elastic IP address to the EC2 instance. This Elastic IP address is a static, public IP address associated with your AWS account and assigned to an EC2 instance. Generally, when an EC2 instance is stopped and restarted, a new public IP address is assigned to the instance, but associating an Elastic IP address with it will overcome any potential issues stemming from this behavior by allowing you to permanently tie a public IP address with the instance.`

        },
        {
            contentType: "Text",
            content: `In the EC2 Dashboard, click on Elastic IPs  under Network & Security.`

        },
        {
            contentType: "Image",
            content: `01-25-images`

        },
        {
            contentType: "Text",
            content: `Allocate a new address and confirm it:`

        },
        {
            contentType: "Image",
            content: `01-26-images`

        },
        {
            contentType: "Text",
            content: `Next, select the newly-allocated address, click the Actions button, and then Associate Address:`

        },
        {
            contentType: "Image",
            content: `01-27-images`

        },
        {
            contentType: "Text",
            content: `Select the instance that will be associated with this Elastic IP address, and finally click Associate:`

        },
        {
            contentType: "Image",
            content: `01-28-images`

        },
        {
            contentType: "Text",
            content: `You can verify that the Elastic IP address has been associated with the instance by navigating to Instances and selecting the relevant instance:`

        },
        {
            contentType: "Image",
            content: `01-29-images`

        },
        {
            contentType: "Text",
            content: `There are two things to keep in mind. First, assigning an Elastic IP address has likely changed the Public DNS of the instance, as the numbers following the “ec2” in the DNS is the Public IP address. Keep this in mind when logging into the SSH session, as the Public DNS is included in the login information. Also, keep in mind that an Elastic IP address not associated with an Amazon EC2 instance will accrue charges. Otherwise, it should be free to have an Elastic IP address associated with an Amazon EC2 instance.`

        },
        {
            contentType: "Text",
            content: `With the Elastic IP address associated with the EC2, we are good to proceed to Route 53.`

        },
        {
            contentType: "Text",
            content: `In the Route 53 Dashboard, you can register a domain name and check on the status of any pending requests. After registering for a domain through Route 53, it can take up to three days for the domain name to propagate, but it is doubtful that it will take that long. It took about two hours for “windupdurb.com” to propagate on an early Saturday night.`

        },
        {
            contentType: "Image",
            content: `01-23-images`

        },
        {
            contentType: "Text",
            content: `After it has been registered successfully, you can navigate into the Hosted Zones.`

        },
        {
            contentType: "Image",
            content: `01-24-images`

        },
        {
            contentType: "Text",
            content: `Click on the intended domain name to be sent to the record sets associated with it.  Amazon should have created two record sets for you: one for the Name Server with four values, and one for the Start of Authority. We will be creating two A (for address) Records.`

        },
        {
            contentType: "Text",
            content: `Click the Create Record Set button at the top of the page. For the first A Record, enter “www” as the Name. This will associate the “www.” prefix to your created domain name. For Type, select “A – IPv4 address.” For Alias, select “No,” and input the assigned Elastic IP Address as the value. For Routing Policy, select “Simple.” `

        },
        {
            contentType: "Image",
            content: `01-30-images`

        },
        {
            contentType: "Text",
            content: `For the second A Record, leave the Name input empty. This is so that your EC2 instance can be reached when the domain name is entered into the address bar without the prefixed “www.” For Type, Select “A.” For Alias, select “Yes,” and include the A Record that we just created as the Alias Target. Click Create when done. `

        },
        {
            contentType: "Image",
            content: `01-31-images`

        },
        {
            contentType: "Text",
            content: `You should now have a total of four record sets associated with the domain name. Entering the domain name into the address bar should now take you to your web application hosted on the Amazon EC2 instance. Give it a few hours if the domain name is not linked to your EC2 instance. Otherwise, you should have successfully deployed your web application on an Amazon EC2 instance, re-directed port 80 to port 3000, and associated a custom domain name with the instance.`
        },
        {
            contentType: "Text",
            content: `You are done. Go, now, to sleep. Or chug actual beers. Or maybe just drink one. Cheers.`
        }

    ],
    url: "deploying-to-ec2-and-shotgunning-beer"
};
*/



/////////////////////////////////End of Essay Two















