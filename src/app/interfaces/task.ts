export interface Task {
    id: number;
    t_description: string;
    t_date_created: string;
    t_status: string;
    t_filler1: string;
    t_filler2: string;
    fk_employee: number;
    fk_shift: number;
}