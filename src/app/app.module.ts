import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { NgxMaskModule } from "ngx-mask";

// Imports para componentes do Angular Material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { AboutComponent } from "./components/about/about.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthInterceptorProvider } from "./interceptors/auth_interceptor";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { FindComponent } from "./components/find/find.component";

import { NgRatingBarModule } from "ng-rating-bar";
import { RatingComponent } from "./components/rating/rating.component";
import { ContatarComponent } from "./components/contatar/contatar.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    FindComponent,
    RatingComponent,
    ContatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisi????es http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
    }),
    NgxMaskModule.forRoot(),
    NgRatingBarModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
