const natalia = {
    name: "Natalia",
    age:20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito){
        natalia.cursosAprobados.push(nuevoCursito)
    },

};


function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
};

// Hacer que Natalia aprueba otro curso

natalia.cursosAprobados.push('Curso de Responsive Design');

