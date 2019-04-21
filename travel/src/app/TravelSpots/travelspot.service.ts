import { places } from '../shared/places.model';
import { Subject } from 'rxjs/internal/Subject';

export class TravelSpotService{
private place: places [] = [new places('xyz'),new places('home'),];
placechanged = new Subject<places[]>();
startedediting = new Subject<number>();
    getnewplace()
    {
        return this.place.slice();
    }

    getnewplaces(index: number)
    {
        return this.place[index];
    }

    addloc(newplace: places)
    {
        this.place.push(newplace);
        this.placechanged.next(this.place.slice());
    }

    addsomething(placess: places[])
    {
        this.place.push(...placess);
        this.placechanged.next(this.place.slice());
    }

    updateloc(index: number, newplaced: places)
    {
        this.place[index] = newplaced;
        this.placechanged.next(this.place.slice());
    }

    deleteitem(index: number)
    {
        this.place.splice(index,1);
        this.placechanged.next(this.place.slice());
    }
}