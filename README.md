Continue with https://github.com/PeaceUCR/AngularIO-Offical-demo

Create sub Module HeroesModule

1. RouterModule.forChild() vs RouteModule.forRoot()

https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes

RouteModule.forRoot() at src/app/app-routing.module.ts

RouterModule.forChild() at sub routing module....


2.loadChildren https://angular.io/guide/lazy-loading-ngmodules

change src/app/app-routing.module.ts

    { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' },

and src/app/heroes/heroes-routing.module.ts
    
    const routes: Routes = [{ path: '', component: HeroesComponent },
                              { path: 'detail/:id', component: HeroDetailComponent }];    
and remove HeroesModule from imports of app.module.ts 
https://stackoverflow.com/questions/48991372/angular-error-uncaught-in-promise-at-webpackasynccontext-eval-at-src
    
Finally you can check Chrome Network Panel for lazy loading

3.route guards https://angular.io/guide/router#milestone-5-route-guards

create service AuthGuard Service for hero-detail routes, add into route (only return true can successful route)
   
    { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] }

**Not just canActivate, CanLoad, Resolve, CanDeactivate.....**

4.preload strategy can check here https://angular.io/guide/router#preloading-background-loading-of-feature-areas

# Component passevent (child comp use function of parent comp)
https://angular.io/guide/template-syntax#event-binding-event https://angular.io/guide/template-syntax#input-and-output-properties
And also used at https://github.com/PeaceUCR/Angular7_get_start by **EventEmitter**

5.More on 'NgForOf'https://angular.io/guide/template-syntax#ngforof

# Component LifeCycle When& Why to use each?
https://angular.io/guide/lifecycle-hooks#oninit

**ngOnInit()** https://angular.io/guide/lifecycle-hooks#oninit

Use ngOnInit() for two main reasons:

To perform complex initializations shortly after construction.
To set up the component after Angular sets the input properties.

**ngOnChanges** https://angular.io/guide/lifecycle-hooks#onchanges

Angular calls its ngOnChanges() method whenever it detects changes to input properties of the component (or directive)

**ngDoCheck()** https://stackoverflow.com/questions/38629828/what-is-the-difference-between-onchanges-and-docheck-in-angular-2

ngOnChanges vs ngDoCheck
 
ngOnChanges() (OnChanges) is called when a value bound to an input has changed so you can run custom code when an input has changed.

ngDoCheck() (DoCheck) is called when change detection runs so you can implement your custom change detection action.

**AfterView & AfterContent**

AfterView:  after it creates a component's child views.

AfterContent:  projects external content into the component.(normally with ng-content, **just like transclude from Angular1**)


