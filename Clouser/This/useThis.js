function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}

var assignment = classroom("Kyle");

assignment();

var homework = {
  topic: "JS",
  assignment: assignment,
};

homework.assignment();
// Kyle says to study JS

var otherHomework = {
  topic: "Math",
};

assignment.call(otherHomework);
// Kyle says to study Math
