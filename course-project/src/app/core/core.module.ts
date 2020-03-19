import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// declarations & imports/exports:
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

// providers:
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
      ],
})
export class CoreModule {}
