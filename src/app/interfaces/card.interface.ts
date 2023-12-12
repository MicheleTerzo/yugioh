import {CardSetInterface} from './card-set.interface';
import {CardImagesInterface} from './card-images.interface';
import {CardPricesInterface} from './card-prices.interface';

export interface CardInterface {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  race: string;
  archetype: string;
  ygoprodeck_url: string;
  card_sets: CardSetInterface[];
  card_images: CardImagesInterface[];
  card_prices: CardPricesInterface[];
}