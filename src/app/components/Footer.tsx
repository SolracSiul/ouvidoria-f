import React from 'react'
import List from './List'

function Footer() {
  const wordsArray = ['Institutional', 'About Us', 'News', 'Unifacisa Careers', 'Academic Secretary', 'Library', 'Social Responsibility', 'Accessibility and Inclusion', 'Psychopedagogical Assistance', 'ENEM Tips', 'Research', 'Alumni Portal', 'Academic Repository', 'Cepros - Executive Selection Process Committee', 'Contact', 'Work with Us', 'Ombudsman', 'Privacy Policy'];
  const unifacisaData = ['I am Unifacisa', 'Student Portal', 'Academic Portal', 'Canvas', 'Library', 'Academic Repository'];
  const studyAtUnifacisaData = ['Study at Unifacisa', 'Enrollment Office', 'Entrance Exam', 'ENEM', 'Second Undergraduate Degree', 'Transfer', 'See all'];
  const scholarshipsAndFinancingData = ['Scholarships and Financing', 'LEME', 'CredIES', 'Agreement', 'Pravaler', 'Family', 'Alumni', 'See all'];
  const coursesData = ['Courses', 'Undergraduate', 'Medical Postgraduate', 'Medical Residency 2024'];

  return (
    <div className='bg-[#F2F2F2] pt-6'>   
    <div className='containter mx-auto md:max-w-[1400px] flex flex-col md:grid md:grid-cols-5'>
      <List names={wordsArray} title="Institutional"/>
      <List names={unifacisaData} title="unifacisaData"/>
      <List names={studyAtUnifacisaData} title="Study at Unifacisa"/>
      <List names={scholarshipsAndFinancingData} title="Scholarships and Financing"/>
      <List names={coursesData} title="Courses"/>
    </div>
    </div>
  )
}

export default Footer