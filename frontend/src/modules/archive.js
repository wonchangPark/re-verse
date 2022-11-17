import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myArchiveList: [],
  friendArchiveList: [],
  likeArchiveList: [],
  joinArchive: { members: [{ nickname: "" }] },
};

const reducers = {
  setMyArchiveList: (state, action) => {
    state.myArchiveList = action.payload;
  },
  setFriendArchiveList: (state, action) => {
    state.friendArchiveList = action.payload;
  },
  setLikeArchiveList: (state, action) => {
    state.likeArchiveList = action.payload;
  },
  setJoinArchive: (state, action) => {
    state.joinArchive = action.payload;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});

export const { setMyArchiveList, setFriendArchiveList, setLikeArchiveList, setJoinArchive } =
  archiveSlice.actions;

export default archiveSlice.reducer;
