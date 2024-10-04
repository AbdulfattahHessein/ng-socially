import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AssetImagePipe } from './pipes/assetImage.pipe';

@NgModule({
  declarations: [],
  imports: [HeaderComponent, AssetImagePipe],
  exports: [HeaderComponent, AssetImagePipe],
})
export class SharedModule {}
