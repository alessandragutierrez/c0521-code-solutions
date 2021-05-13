/* exported getStudentNames */

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    studentNames.push(studentName);
  }
  return studentNames;
}
