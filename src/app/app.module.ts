import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";

import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { PrincipalTableComponent } from "./principal-table/principal-table.component";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SimpleFormComponent,
    PrincipalTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
