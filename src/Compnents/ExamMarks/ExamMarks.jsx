import React, { use } from 'react';

const ExamMarks = ({exmaMarksPromise}) => {
    const marksDataRes = use(exmaMarksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData);
    
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.math,
            science: studentData.marks.science,
            english: studentData.marks.english,
        }
        
        const avg = (student.english + student.math + student.science) / 3;
        student.avg = avg;
        return student;
    })
    console.log(marksChartData);
    

    return (
        <div>
            {
                // marksData.map(mark => <li>{mark.name}</li>)
            }
        </div>
    );
};

export default ExamMarks;