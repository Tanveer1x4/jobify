import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdWorkHistory, MdLocationOn } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { RiGraduationCapFill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';

const CandidateCard = ({ id, name, email, location, experience, course, jobPreference, skills }) => {
  return (
    <div className="bg-gray-600 text-white rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="flex items-center text-gray-300">
        <AiOutlineMail className="mr-2" /> {email}
      </p>
      <p className="flex items-center text-gray-300">
        <MdLocationOn className="mr-2" /> {location}
      </p>
      <p className="flex items-center text-gray-300">
        <MdWorkHistory className="mr-2" /> {experience} years
      </p>
      <p className="flex items-center text-gray-300">
        <RiGraduationCapFill className="mr-2" /> {course}
      </p>
      <p className="flex items-center text-gray-300">
        <HiOutlineBriefcase className="mr-2" /> {jobPreference}
      </p>
      <p className="flex items-center text-gray-300">
        <GiSkills className="mr-2" /> {skills.join(', ')}
      </p>
    </div>
  );
};

export default CandidateCard;
