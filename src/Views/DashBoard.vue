<template>
   <h2 style="text-align: center; color: black;
   margin-top: 120px;">Student Performance in L3 SWD</h2>
  <div class="dashboard-table">
   

    
    <div class="input-form">
      <input v-model="newStudent.class" placeholder="Class" /> <br> <br>
      <input v-model="newStudent.topStudent" placeholder="Student Name" /> <br> <br>
      <input v-model.number="newStudent.score" type="number" placeholder="Score" /> <br> <br>
      <input v-model.number="newStudent.average" type="number" placeholder="Average" /> <br> <br>
      <input v-model="newStudent.completed" placeholder="Subject Completed" /> <br> <br>
      <input v-model="newStudent.notes" placeholder="Notes" /> <br> <br>
      <button @click="addStudent">Add Student</button>
    </div>

  
    <table border="" class="student-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Students</th>
          <th>Marks</th>
          <th>Average</th>
          <th>Subject Completed</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.class }}</td>
          <td>{{ student.topStudent }}</td>
          <td>{{ student.score }}</td>
          <td>{{ student.average }}</td>
          <td>{{ student.completed }}</td>
          <td>{{ student.notes }}</td>
          <td>
            <button class="remove-btn" @click="removeStudent(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'


const savedStudents = JSON.parse(localStorage.getItem('students')) || [
]

const students = reactive(savedStudents)


watch(
  students,
  (newVal) => {
    localStorage.setItem('students', JSON.stringify(newVal))
  },
  { deep: true }
)


const newStudent = reactive({
  class: '',
  topStudent: '',
  score: null,
  average: null,
  completed: '',
  notes: ''
})


function addStudent() {
  if (
    newStudent.class &&
    newStudent.topStudent &&
    newStudent.score != null &&
    newStudent.average != null &&
    newStudent.completed &&
    newStudent.notes
  ) {
    students.push({ ...newStudent })
    resetForm()
  } else {
    alert('Please fill in all fields!')
  }
}

function resetForm() {
  newStudent.class = ''
  newStudent.topStudent = ''
  newStudent.score = null
  newStudent.average = null
  newStudent.completed = ''
  newStudent.notes = ''
}


function removeStudent(index) {
  if (confirm('Are you sure you want to remove this student?')) {
    students.splice(index, 1)
  }
}
</script>

