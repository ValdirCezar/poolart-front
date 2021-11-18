import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { FindComponent } from "./components/find/find.component";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LandingPageComponent },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "find", component: FindComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
