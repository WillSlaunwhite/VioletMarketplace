import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../../ui/shared/shared.module";
import { CreateTokenComponent } from "./create-token/create-token.component";
import { TokenEffects } from "./state/tokens.effects";
import { reducer } from "./state/tokens.reducer";
import { TokenRoutingModule } from "./token-routing.module";

@NgModule({
  declarations: [
    CreateTokenComponent,
  ],
  imports: [
    SharedModule,
    TokenRoutingModule,
    StoreModule.forFeature('token', reducer),
    EffectsModule.forFeature([TokenEffects])
  ],
  exports: [
    CreateTokenComponent,
  ]
})
export class TokenModule { }
