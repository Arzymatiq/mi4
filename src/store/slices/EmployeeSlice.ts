import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team, Employee } from "./EmployeeTypes";
import { addEmployee, fetchTeams } from "./EmployeeAction";

const EmployeeSlice = createSlice({
    name: "employee",
    initialState: {
        teams: [] as Team[],
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                fetchTeams.fulfilled,
                (state, action: PayloadAction<Team[]>) => {
                    state.loading = false;
                    state.teams = action.payload;
                }
            )
            .addCase(fetchTeams.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch teams";
            })
            .addCase(addEmployee.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                addEmployee.fulfilled,
                (state, action: PayloadAction<Team>) => {
                    state.loading = false;
                    // Найти и обновить команду в состоянии
                    const updatedTeam = action.payload;
                    const index = state.teams.findIndex(
                        (t) => t.id === updatedTeam.id
                    );
                    if (index !== -1) {
                        state.teams[index] = updatedTeam;
                    }
                }
            )
            .addCase(addEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add employee";
            });
    },
});

export default EmployeeSlice.reducer;
