import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AssetImagePipe } from './pipes/assetImage.pipe';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [],
  imports: [HeaderComponent, AssetImagePipe, ButtonComponent],
  exports: [HeaderComponent, AssetImagePipe, ButtonComponent],
})
export class SharedModule {}
