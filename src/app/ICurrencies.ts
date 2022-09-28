
export interface ICurrencies
{
    result: string;
    documentation: string;
    terms_of_use:string;
    time_last_update_unix:Date;
    time_last_update_utc:number
    time_next_update_unix:Date
    time_next_update_utc:number
    base_code:Date
    conversion_rates:object
}


export interface ICurrency{
     key:string;
     value:number
}
