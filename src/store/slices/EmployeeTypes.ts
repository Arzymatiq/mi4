export interface Team {
    id: number;
    name: number;
    employees: any;
}
export interface Employee {
    id: number;
    name: string;
    surname: string;
    phone: string;
    position: string;
    team: string[];
    isActive: boolean;
}
