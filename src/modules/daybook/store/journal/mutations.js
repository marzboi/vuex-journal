// export const myAction = ( state ) => {
//
// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  // const newEntries = state.entries.filter((a) => a.id !== entry.id);
  // state.entries = [...newEntries, entry];

  const idx = state.entries.map((e) => e.id).indexOf(entry.id);
  state.entries[idx] = entry;
};

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((a) => a.id !== id);
};
