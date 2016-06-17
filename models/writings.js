"use strict";

let mongoose = require("mongoose");

let essaySchema = new mongoose.Schema({
    essayNumber: { type: String },
    title: { type: String, required: true },
    datePosted: { type: String, required: true },
    //text body will be an array of paragraphs
    textBody: [{
        contentType: String,
        content: String
    }],
    url: { type: String }
});

let Essay = mongoose.model("Essay", essaySchema);

let thirdEssay = {
    essayNumber: "02",
    title: "Have some Class with your Beer: An Introduction to Prototype-Based Inheritance in Javascript",
    datePosted: "June 16, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `Javascript is a prototype-oriented language.  In short, objects in Javascript can be created as an instance of another object, and the instanced objects inherit properties and methods  from the prototype object. If trying to understand the concepts of prototype and instance from within the context of Javascript is proving to be a little bit difficult—because I know I briefly had some difficulty grasping the concepts at first—take a few moments to consider them in another light.  To get a better sense of prototype and instance in Javascript, strip away the context of Javascript and just concentrate on each word and their corresponding definitions outside of the language. The word prototype denotes a model in which something can be patterned from. An antagonist stealing the prototype for a laser beam, for example, is a familiar science fiction trope. The laser beam prototype serves as a model in which the antagonist can create more laser beams to advance his or her world domination goals.  An instance, on the other, can broadly be thought of as an example of something. In relation to prototype, an instance is an example of the prototype—the additional laser beams the antagonist aims to build and potentially upgrade.`
        },
        {
            contentType: "Text",
            content: `Lend your attention for another minute to the following example that slowly creeps towards Javascript relevance. The intangible concept that is Beer—not what we drink, but the ideal of Beer—can be thought of as, for the sake of simplicity, the prototype in which every beer we have ever consumed is extended from. Again, for the sake of simplicity and without veering too much into a philosophical discussion, all of those Bud Lights and Keystone Ices you have actually consumed can be thought of as instances of the prototype Beer ideal. Take a gander at the Javascript down below as an illustration to this example.`
        },
        {
            contentType: "Image",
            content: `02-00-images`

        },
        {
            contentType: "Text",
            content: `What has been constructed in ECMAScript 5 fashion is a prototype for the Beer class. As you can see, I defined the class name, which is Beer, the two properties each instance of the Beer class must have, which are the name and alcoholic properties, and an instance method that each instance of the Beer class will inherently possess, which is the shouldIDrink method.`
        },
        {
            contentType: "Text",
            content: `With the prototype defined, I can now create instances of the Beer class:`
        },
        {
            contentType: "Image",
            content: `02-01-images`

        },
        {
            contentType: "Text",
            content: `Up above, I have created three new instances of the Beer class—for a small buzz, of course. Each instance also has access to the shouldIDrink method:`
        },
        {
            contentType: "Image",
            content: `02-02-images`
        },
        {
            contentType: "Text",
            content: `Now, creating classes via this prototype syntax has been available in Javascript.  The introduction of the class syntax in ECMAScript 6, though, pretty much accomplishes the same thing as what I did using the prototype syntax above, but it does so in a more pleasant syntax. The class syntax in ECMAScript 6 is simply syntactical sugar, which can be considered revisions to the language for no other substantial purpose than to make writing code a bit more sweeter for the developer.`
        },
        {
            contentType: "Text",
            content: `Now, let us scoop on some of that sweet class syntax:`
        },
        {
            contentType: "Image",
            content: `02-03-images`
        },
        {
            contentType: "Text",
            content: `The above example illustrates how to define a class in ECMAScript 6 using the class declaration.  Note that the class syntax does look a little less complicated and much clearer than the first syntax that was introduced. The second way to define a class is by using the class expression syntax:`
        },
        {
            contentType: "Image",
            content: `02-04-images`
        },
        {
            contentType: "Text",
            content: `Now, maybe we would like to add properties and methods to the class  object, but we do not want them to be passed down in each instance of the class. We can add static properties and static methods to a class object via the static keyword:`
        },
        {
            contentType: "Image",
            content: `02-05-images`
        },
        {
            contentType: "Text",
            content: `The previous illustrations show how the class syntax can be used to create classes in ECMAScript 6, but as I briefly mentioned earlier, the functionality and features really are not all that different than what existed in the language prior to ECMAScript 6. The prototype-based inheritance has not changed, which, according to my understanding, all boils down to a system in Javascript that is based on the construct of the object. Nearly everything in Javascript is an object, and each object has at least another relationship with a parent object—its prototype—or with null, which is the final link in the prototype chain.`
        },
        {
            contentType: "Text",
            content: `It is through the intrinsic behavior of prototype-based inheritance in Javascript that a subclass can be created, which can otherwise be thought of as a class that is a child of another class—its prototype class. This can be accomplished using the extends keyword in ECMAScript 6, which can be used in both class declarations and class expressions:`
        },
        {
            contentType: "Image",
            content: `02-06-images`
        },
        {
            contentType: "Text",
            content: `The SixPack class in the example above is a subclass of the Beer class. As an extension of Beer, each instance of the SixPack class is created with the properties—name and alcoholic—it  inherits from Beer, and it as well inherits the shouldIDrink method from Beer. The super keyword, for one, is used to call functions on the parent of a class using object notation: super.functionOnTheParent(). Using the super keyword in the constructor, as it is illustrated in the example above, can all be used to access the properties of the parent class so that they can be inherited by the the instances of the child of the class.`
        },
        {
            contentType: "Text",
            content: `As it might be noted, the SixPack class is not simply just inheriting the properties and methods from the Beer class out of sheer convenience. Rather, there is an actual association between the two classes that make them appropriate prototype and child classes. Keep this in mind when creating subclasses, so as to avoid creating subclasses all willy-nilly.`
        },{
            contentType: "Text",
            content: `And now, after this brief introduction on the prototype-based inheritance in Javascript, I part ways with you. May your coding ventures be accompanied by bounties of beer. Cheers. `
        }
    ],
    url: "class-with-your-beer-intro-to-prototype-based-inheritance"
};

/*
Essay.create(thirdEssay, function (error, savedDocument) {
    if (error) return console.log(error);
    console.log("saved doc: ", savedDocument);
});*/


module.exports = Essay;