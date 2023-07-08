import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postCandidateData } from '../app/features/candidateSlice';
import backgroundImage from '../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CandidateForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, data } = useSelector((state) => state.candidate);

  const handleSkillSelection = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSelectedSkills((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };

  const onSubmit = async (data) => {
    const { name, email, location, experience, course, age, aboutMe, jobPreference, salaryRange, experienceDetails } = data;

    const candidateData = {
      id: uuidv4(),
      name,
      email,
      location,
      experience,
      course,
      age,
      aboutMe,
      skills: selectedSkills,
      jobPreference,
      salaryRange,
      experienceDetails,
    };

    dispatch(postCandidateData(candidateData));
  };

  useEffect(() => {
    if (status === 'succeeded' && data) {
      reset();
     
    }
  }, [status, data, navigate, reset]);

  return (
    <div
    className="w-full bg-cover bg-center bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="bg-white rounded-lg p-8 bg-opacity-10 mt-4 mb-4 w-1/2">
      <h2 className="text-3xl text-white text-center font-bold mb-6">Candidate Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
          <label htmlFor="name" className="block text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

   

        <div className="mb-6">
          <label htmlFor="location" className="block text-white mb-1">
            Location
          </label>
          <select id="location" {...register('location')} className="bg-white rounded px-4 py-2">
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="experience" className="block text-white mb-1">
            Experience (in years)
          </label>
          <input
            type="number"
            id="experience"
            {...register('experience')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="course" className="block text-white mb-1">
            Course
          </label>
          <select id="course" {...register('course')} className="bg-white rounded px-4 py-2">
            <option value="BBA">BBA</option>
            <option value="BCA">BCA</option>
            <option value="BCOM">BCOM</option>
            <option value="BE">BE</option>
            <option value="BTECH">BTECH</option>
            <option value="MTECH">MTECH</option>
            <option value="BSC">BSC</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="age" className="block text-white mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register('age')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="aboutMe" className="block text-white mb-1">
            About Me
          </label>
          <textarea
            id="aboutMe"
            {...register('aboutMe')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="skills" className="block text-white mb-1">
            Skills
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="JavaScript"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">JavaScript</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="React"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">React</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Node.js"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">Node.js</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Product Knowledge"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">Product Knowledge</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Relationship Building"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">Relationship Building</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Persuasion"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">Persuasion</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Communication"
                onChange={handleSkillSelection}
                className="form-checkbox"
              />
              <span className="ml-2 text-white">Communication</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="jobPreference" className="block text-white mb-1">
            Job Preference
          </label>
          <select
            id="jobPreference"
            {...register('jobPreference')}
            className="bg-white rounded px-4 py-2"
          >
            <option value="Sales Executive">Sales Executive</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Sales Manager">Sales Manager</option>

            {/* Add more job preferences as needed */}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="salaryRange" className="block text-white mb-1">
            Salary Range
          </label>
          <select
            id="salaryRange"
            {...register('salaryRange')}
            className="bg-white rounded px-4 py-2"
          >
            <option value="0-3lpa">0-3 LPA</option>
            <option value="3-5lpa">3-5 LPA</option>
            <option value="5-8lpa">5-8 LPA</option>
            <option value="8-10lpa">8-10 LPA</option>
            <option value="10-15lpa">10-15 LPA</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="experienceDetails" className="block text-white mb-1">
            Experience Details
          </label>
          <textarea
            id="experienceDetails"
            {...register('experienceDetails')}
            className="bg-white rounded px-4 py-2 w-full"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-blue-500 px-6 py-2 rounded font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default CandidateForm;
