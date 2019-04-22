import {HeroService} from '../../app/service/hero.service';
import {HeroesComponent} from '../../app/heroes/heroes.component';
import {TestBed} from '@angular/core/testing';
import {Hero} from '../../app/hero';
// https://stackoverflow.com/questions/52283055/angular-service-testing-cannot-find-name-asyncdata
import { asyncData } from '../test-helper/async-observable-helpers';


describe('HeroesComponent', () => {
  let heroServiceMock: jasmine.SpyObj<HeroService>;
  let heroesComponentMock: HeroesComponent;


  beforeEach(() => {
    const spy = jasmine.createSpyObj('HeroService', ['getHeroesByHTTP']);
    const expectedHeroes: Hero[] =
      [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
      ];
    spy.getHeroesByHTTP.and.returnValue(asyncData(expectedHeroes));

    // provide the component-under-test and dependent service
    TestBed.configureTestingModule({ providers: [ HeroesComponent, { provide: HeroService, useValue: spy}]});
    heroServiceMock = TestBed.get(HeroService);
    heroesComponentMock = TestBed.get(HeroesComponent);
  });

  it('should OnInit works', (done: DoneFn) => {
    heroesComponentMock.ngOnInit();
    // from official demo https://stackblitz.com/angular/qmmvpvbyylb?file=src%2Fapp%2Fhero%2Fhero-detail.component.no-testbed.spec.ts
    // async at OnInit, but can't place done at callback like https://angular.io/guide/testing#service-tests, so remember this way!
    // OnInit calls heroServiceMock.getHeroesByHTTP; wait for it to get the fake hero
    heroServiceMock.getHeroesByHTTP.calls.first().returnValue.subscribe(() => {
      console.log(heroesComponentMock.heroes);
      done(); });

  });
});
