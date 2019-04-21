import { places } from '../shared/places.model';

export class TravelStory
{
    public name: string;
    public description: string;
    public image: string;
    public place: places[];

    constructor(name: string, desc: string,image:string,pla : places[])
    {
        this.name =  name;
        this.description = desc;
        this.image = image;
        this.place = pla;
    }
}