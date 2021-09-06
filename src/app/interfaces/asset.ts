export interface Asset {
    id: number;
    a_description: string;
    a_quantity: number;
    a_date_created: string;
    a_type: string;
    a_filler1: string;
    a_filler2: string;
    fk_propietor: number;
    fk_building: number;
}