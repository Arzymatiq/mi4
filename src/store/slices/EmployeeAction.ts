import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Employee, Team } from "./EmployeeTypes";
import { employee_api } from "../../helpers/const";

interface AddEmployeePayload {
    employee: Employee;
    teamId: number;
}

export const fetchTeams = createAsyncThunk<Team[]>(
    "teams/fetchTeams",
    async () => {
        const response = await axios.get<Team[]>(employee_api);
        return response.data;
    }
);

export const addEmployee = createAsyncThunk<Team, AddEmployeePayload>(
    "team/addEmployee",
    async ({ teamId, employee }: AddEmployeePayload, { rejectWithValue }) => {
        try {
            // Шаг 1: Обновим команду, добавив нового сотрудника
            const teamResponse = await axios.get(`${employee_api}/${teamId}`);
            const team: Team = teamResponse.data;
            team.employees.push(employee);

            // Шаг 2: Обновляем команду с новым массивом employees
            const updatedTeamResponse = await axios.put(
                `${employee_api}/${teamId}`,
                team
            );
            return updatedTeamResponse.data;
        } catch (error) {}
    }
);
