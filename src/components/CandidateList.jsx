import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandidateData, filterCandidates } from '../app/features/candidateSlice';

import CandidateCard from './CandidateCard';

const CandidateList = () => {
  const dispatch = useDispatch();
  const filteredCandidates = useSelector((state) => state.candidate.filteredData);
  const [locationFilter, setLocationFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCandidateData());
  }, [dispatch]);

  const handleLocationFilter = (event) => {
    const location = event.target.value;
    setLocationFilter(location);
    dispatch(filterCandidates({ location, role: roleFilter }));
  };
  const handleRoleFilter = (event) => {
    const role = event.target.value;
    setRoleFilter(role);
    dispatch(filterCandidates({ location: locationFilter, role }));
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">Candidate List</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex items-center space-x-4 mb-4 w-full sm:w-auto">
            <label htmlFor="locationFilter" className="font-medium">
              Location:
            </label>
            <select
              id="locationFilter"
              value={locationFilter}
              onChange={handleLocationFilter}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Noida">Noida</option>
              <option value="Gurugram">Gurugram</option>
            </select>
          </div>

          <div className="flex items-center space-x-4 mb-4 w-full sm:w-auto">
            <label htmlFor="roleFilter" className="font-medium">
              Role:
            </label>
            <select
              id="roleFilter"
              value={roleFilter}
              onChange={handleRoleFilter}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Roles</option>
              <option value="Sales Executive">Sales Executive</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Sales Manager">Sales Manager</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.email}
              id={candidate.uid}
              name={candidate.name}
              email={candidate.email}
              location={candidate.location}
              experience={candidate.experience}
              course={candidate.course}
              jobPreference={candidate.jobPreference}
              skills={candidate.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
