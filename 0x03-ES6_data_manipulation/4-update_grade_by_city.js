export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
	// Filter students based on their location
	// Update or add grades for students in the newGrades list
	// If a student from the filtered list is not found in newGrades, set their grade to N/A
	const cityStudents = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
		// });
		// console.log('FOUND STUDENT1: ', student);
		// console.log('FOUND ITEM2: ', item2);
		// console.log(item2 ? {...student, ...item2} : student.grade = 'N/A', student);
		// If item2 exists, merge its properties with the student object; otherwise, set student's grade to 'N/A'
		// if (!item2) {
		// student.grade = 'N/A'; // eslint-disable-line no-param-reassign
		// }
		return { ...student, grade: item2 ? item2.grade : 'N/A' };
    // return item2 ? {...student, ...item2} : student,  student.grade = 'M/A';
		});
  return cityStudents;
}
