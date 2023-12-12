import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaginationInterface} from '../interfaces/pagination.interface';
import {CardInterface} from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private readonly http = inject(HttpClient);
  private readonly baseurl: string = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  getCards(pagination: PaginationInterface) {
    return this.http.get<{
      data: CardInterface[]
    }>(`${this.baseurl}?&num=${pagination.total}&offset=${pagination.offset}`);
  }
}
