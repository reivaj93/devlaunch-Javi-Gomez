/*
La Universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios de becas no es eficiente.
Ahora buscan una forma mejor de evaluar las numerosas solicitudes de estudiantes que reciben.

El nuevo sistema que planean implementar decidira eficientemente quien califica para las becas.
Normlamente, los 4estudiantes deben ayudar en clases de laboratorio y aprobar cuatro materias, con sus calificaciones promediadas para verificar la elegibilidad.

Las reglas de elegibilidad son estrcitas:

- Los estudiantes necesitan tener un promedio de calificaciones de 9 o mas en todas las materias, sin ninguna calificacion individual menor a 8, independientemente
de como les fue como asistentes de laboratorio.

- Alternativamente, si tienen un promedio de 8.5 o mas, aun pueden calificar si obtuvieran una calificacion de  "A" o "B" como asistentes de laboratorio.

- Sin embargo, si obtuvieron una calificacion de "C" como asistentes de laboratorio, no calificaran para la beca, incluso si sus calificaciones generales son buenas.


*/

const prompt = require('prompt-sync')();

const rejectLabGrade = "C";
const acceptLabGrades = ["A", "B"];  
const minAloneGrade = 9;
const minLabProGrade = 8.5;
const amountOfSubjects = 4;

function main() {
    const p1 = parseFloat(prompt('Ingrese su promedio de calificaciones 1: '));
    const p2 = parseFloat(prompt('Ingrese su promedio de calificaciones 2: '));
    const p3 = parseFloat(prompt('Ingrese su promedio de calificaciones 3: '));
    const p4 = parseFloat(prompt('Ingrese su promedio de calificaciones 4: '));
    const lab = prompt('Ingrese su calificación de laboratorio: ').toUpperCase();

    const isEligible = validateScholarship(p1, p2, p3, p4, lab);

    if (isEligible) {
        console.log('El estudiante califica para la beca');
    } else {
        console.log('El estudiante no califica para la beca');
    }
}

function validateScholarship(p1, p2, p3, p4, lab) {
    const pGeneral = (p1 + p2 + p3 + p4) / amountOfSubjects;

    if (lab === rejectLabGrade) return false;

    if (pGeneral >= minLabProGrade && (lab === 'A' || lab === 'B')) {
        return true;
    }

    if ((p1 < minAloneGrade || p2 < minAloneGrade || p3 < minAloneGrade || p4 < minAloneGrade)) {
        return false;
    }

    if (pGeneral < 8.5) {
        return false;
    }

    if (pGeneral >= 8.5 && pGeneral < 9 && !(lab === 'A' || lab === 'B')) {
        return false;
    }

    return true;
}

main();