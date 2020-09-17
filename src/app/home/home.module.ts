import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { HelloWorldPlugin } from "@ionic-native/hello-world-plugin/ngx";
import { HomePageRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage],
  providers: [HelloWorldPlugin],
})
export class HomePageModule {}
