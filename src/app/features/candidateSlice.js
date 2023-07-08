import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postCandidateData = createAsyncThunk(
  'candidate/postData',
  async (candidateData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://jobify-xyz-default-rtdb.firebaseio.com/candidates.json',
        candidateData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCandidateData = createAsyncThunk(
  'candidate/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://jobify-xyz-default-rtdb.firebaseio.com/candidates.json'
      );
      const candidatesArray = response.data ? Object.values(response.data) : [];
      return candidatesArray;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const candidateSlice = createSlice({
  name: 'candidate',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    filteredData: [],
  },
  reducers: {
    filterCandidates: (state, action) => {
      const { location, role } = action.payload;
      state.filteredData = state.data.filter((candidate) => {
        const locationMatch = !location || candidate.location === location;
        const roleMatch = !role || candidate.jobPreference === role;
        return locationMatch && roleMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCandidateData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postCandidateData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(postCandidateData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCandidateData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCandidateData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchCandidateData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { filterCandidates } = candidateSlice.actions;

export default candidateSlice.reducer;
