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

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}


const Juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        "Cursos de Introduccion a los videojuegos",
        "Creacion de personajes"
    ]
);


// Hacer que Natalia aprueba otro curso

natalia.cursosAprobados.push('Curso de Responsive Design');


class Student2{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};


const miguelito = new Student2({
    name: "Miguel",
    age:22,
    email: 'jcz_1999@hotmail.com'
});