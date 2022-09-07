export interface rickandmorty{

    info:any;
    results:any;

}

export interface personajes{

    create: string;
    episode: any;
    gender: string;
    id:number;
    image: string;
    location: location;
    name: string;
    origin: origin;
    species: string;
    status: string;
    type:string;
    url:string;

}

interface origin{

    name: string;
    url: string;

}

interface location{

    name: string;
    url: string;

}