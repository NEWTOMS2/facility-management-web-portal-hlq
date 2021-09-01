export interface Asset {
    id: number;
    a_description: string;
    a_quantity: number;
    a_date_created: string;
    a_type: string;
    t_filler1: string;
    t_filler2: string;
    fk_propietor: number;
    fk_building: number;
}