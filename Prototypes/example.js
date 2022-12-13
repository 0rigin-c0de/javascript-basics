var homework = {
  topic: "JS",
};
homework.toString();

// create the object using the Object.create(..)

// object linkage
var homework = {
  topic: "JS",
};

var otherHomework = Object.create(homework);

otherHomework.topic; // "JS"

homework.topic;
// "JS"

otherHomework.topic;
// "JS"

otherHomework.topic = "Math";
otherHomework.topic;
// "Math"

homework.topic;
// "JS" -- not "Math"
