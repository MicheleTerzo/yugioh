import {Component, inject, OnInit} from '@angular/core';
import {CardsService} from '../../services/cards.service';
import {PaginationInterface} from '../../interfaces/pagination.interface';
import {CardInterface} from '../../interfaces/card.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  protected cards: CardInterface[] = [];
  protected readonly asCard = (data: any): CardInterface => data as CardInterface;
  private readonly cardsService = inject(CardsService);

  ngOnInit(): void {
    this.initData().then();
  }

  private async initData(): Promise<void> {
    const pagination: PaginationInterface = {
      total: 50,
      offset: 0
    };
    this.cardsService.getCards(pagination).subscribe(data => this.cards = data.data);
  }
}
