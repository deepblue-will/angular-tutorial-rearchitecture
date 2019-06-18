import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HeroEntity, HeroesResponse, HeroResponse } from '../types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class HeroesRepository {
  private heroesUrl = 'api/heroes'; // Web APIのURL

  constructor(private http: HttpClient) {}

  /** サーバーからヒーローを取得する */
  getHeroes(): Observable<HeroesResponse> {
    return this.http
      .get<HeroesResponse>(this.heroesUrl)
      .pipe(catchError(this.handleError<HeroesResponse>('getHeroes', [])));
  }

  /** IDによりヒーローを取得する。idが見つからない場合は`undefined`を返す。 */
  getHeroNo404<Data>(id: number): Observable<HeroEntity> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<HeroesResponse>(url).pipe(
      map(heroes => heroes[0]), // {0|1} 要素の配列を返す
      catchError(this.handleError<HeroEntity>(`getHero id=${id}`))
    );
  }

  /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
  getHero(id: number): Observable<HeroResponse> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<HeroResponse>(url)
      .pipe(catchError(this.handleError<HeroResponse>(`getHero id=${id}`)));
  }

  /* 検索語を含むヒーローを取得する */
  searchHeroes(term: string): Observable<HeroEntity[]> {
    if (!term.trim()) {
      // 検索語がない場合、空のヒーロー配列を返す
      return of([]);
    }
    return this.http
      .get<HeroesResponse>(`${this.heroesUrl}/?name=${term}`)
      .pipe(catchError(this.handleError<HeroEntity[]>('searchHeroes', [])));
  }

  //////// Save methods //////////

  /** POST: サーバーに新しいヒーローを登録する */
  addHero(hero: Partial<HeroEntity>): Observable<HeroResponse> {
    return this.http
      .post<HeroResponse>(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError<HeroEntity>('addHero')));
  }

  /** DELETE: サーバーからヒーローを削除 */
  deleteHero(hero: HeroEntity | number): Observable<HeroResponse> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .delete<HeroResponse>(url, httpOptions)
      .pipe(catchError(this.handleError<HeroResponse>('deleteHero')));
  }

  /** PUT: サーバー上でヒーローを更新 */
  updateHero(hero: HeroEntity): Observable<any> {
    return this.http
      .put(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError<any>('updateHero')));
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
