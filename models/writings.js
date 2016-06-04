"use strict";

let mongoose = require("mongoose");

/*const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost/windupdurbWebsite";

mongoose.connect(MONGOURL, function (error) {
    console.log(error || `Connected to MongoDB at ${MONGOURL}`);
});*/


let essaySchema = new mongoose.Schema({
    title: { type: String },
    //text body will be an array of paragraphs
    textBody: [{
        contentType: String,
        content: String
    }],
    url: { type: String }
});

let Essay = mongoose.model("Essay", essaySchema);

/*let firstEssay = {

    title: "Var versus Let: A Discussion on Being a Noob",
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

Essay.create(firstEssay, function (error, savedDocument) {
    if (error) return console.log(error);
    console.log("saved doc: ", savedDocument);
});*/

module.exports = Essay;