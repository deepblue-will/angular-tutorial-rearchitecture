export class HeroEntity {
  id: number;
  name: string;
  weaponId: number;
}

export type HeroesResponse = HeroEntity[];
export type HeroResponse = HeroEntity;
