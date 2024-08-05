import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox,
    CircularProgress,
    Typography,
} from "@mui/material";
import { fetchTeams, addEmployee } from "../store/slices/EmployeeAction";
import { Employee } from "../store/slices/EmployeeTypes";
import { AppDispatch, RootState } from "../store/store";
import { RadioGroup, Radio } from "@mui/material";

const EmployeeAddForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const teams = useSelector((state: RootState) => state.employee.teams);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [teamId, setTeamId] = useState<number | "">("");
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    const handlePositionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPosition((event.target as HTMLInputElement).value);
    };

    const handleAddEmployee = async () => {
        if (name && surname && phone && position && teamId !== "") {
            const newEmployee: Employee = {
                id: Date.now(), // Лучше использовать уникальный идентификатор
                name,
                surname,
                phone,
                position,
                team: [],
                isActive,
            };

            setLoading(true);
            setError(null);

            try {
                await dispatch(
                    addEmployee({
                        employee: newEmployee,
                        teamId: teamId as number,
                    })
                );
                setName("");
                setSurname("");
                setPhone("");
                setPosition("");
                setTeamId("");
                setIsActive(true);
            } catch (err) {
                setError("Failed to add employee");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Box>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                fullWidth
                margin="normal"
            />

            <Box>
                <RadioGroup
                    value={position}
                    onChange={handlePositionChange}
                    aria-label="position"
                    name="position">
                    <FormControlLabel
                        value="Cutter"
                        control={<Radio />}
                        label="Раскройщик"
                    />
                    <FormControlLabel
                        value="Technologist"
                        control={<Radio />}
                        label="Технолог"
                    />
                    <FormControlLabel
                        value="Seamstress"
                        control={<Radio />}
                        label="Швея"
                    />
                </RadioGroup>
            </Box>
            <FormControl fullWidth margin="normal">
                <InputLabel>Team</InputLabel>
                <Select
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value as number)}>
                    {teams.map((team) => (
                        <MenuItem key={team.id} value={team.id}>
                            {team.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                onClick={handleAddEmployee}
                variant="contained"
                color="primary"
                disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Add Employee"}
            </Button>
            {error && <Typography color="error">{error}</Typography>}
        </Box>
    );
};

export default EmployeeAddForm;
